# 双亲委派模型

## 类加载器

### 加载类的开放性

类加载器（ClassLoader）是 Java 语言的一项创新，也是 Java 流行的一个重要原因。在类加载的第一阶段“加载”过程中，需要通过一个类的全限定名来获取定义此类的二进制字节流，完成这个动作的代码块就是 **类加载器**。这一动作是放在 Java 虚拟机外部去实现的，以便让应用程序自己决定如何获取所需的类。

虚拟机规范并没有指明二进制字节流要从一个 Class 文件获取，或者说根本没有指明从哪里获取、怎样获取。这种开放使得 Java 在很多领域得到充分运用，例如：

- 从 ZIP 包中读取，这很常见，成为 JAR，EAR，WAR 格式的基础
- 从网络中获取，最典型的应用就是 Applet
- 运行时计算生成，最典型的是动态代理技术，在 `java.lang.reflect.Proxy` 中，就是用了 `ProxyGenerator.generateProxyClass` 来为特定接口生成形式为“*$Proxy”的代理类的二进制字节流
- 有其他文件生成，最典型的 JSP 应用，由 JSP 文件生成对应的 Class 类

### 类加载器与类的唯一性

类加载器虽然只用于实现类的加载动作，但是对于任意一个类，都需要由加载它的类加载器和这个类本身共同确立其在 Java 虚拟机中的 **唯一性**。通俗的说，JVM 中两个类是否“相等”，首先就必须是同一个类加载器加载的，否则，即使这两个类来源于同一个 Class 文件，被同一个虚拟机加载，只要类加载器不同，那么这两个类必定是不相等的。

这里的“相等”，包括代表类的 Class 对象的 `equals()` 方法、`isAssignableFrom()` 方法、`isInstance()`方法的返回结果，也包括使用 `instanceof` 关键字做对象所属关系判定等情况。

下代码说明了不同的类加载器对 `instanceof` 关键字运算的结果的影响。

```java
package com.jvm.classloading;

import java.io.IOException;
import java.io.InputStream;

/**
 * 类加载器在类相等判断中的影响
 * 
 * instanceof关键字
 * 
 */

public class ClassLoaderTest {
    public static void main(String[] args) throws Exception {
        // 自定义类加载器
        ClassLoader myLoader = new ClassLoader() {
            @Override
            public Class<?> loadClass(String name) throws ClassNotFoundException {
                try {
                    String fileName = name.substring(name.lastIndexOf(".") + 1) + ".class";
                    InputStream is = getClass().getResourceAsStream(fileName);
                    if (is == null) {
                        return super.loadClass(fileName);
                    }
                    byte[] b = new byte[is.available()];
                    is.read(b);
                    return defineClass(name, b, 0, b.length);   
                } catch (IOException e) {
                    throw new ClassNotFoundException();
                }
            }
        };

        // 使用 ClassLoaderTest 的类加载器加载本类
        Object obj1 = ClassLoaderTest.class.getClassLoader().loadClass("com.jvm.classloading.ClassLoaderTest").newInstance();
        System.out.println(obj1.getClass());
        System.out.println(obj1 instanceof com.jvm.classloading.ClassLoaderTest);

        // 使用自定义类加载器加载本类
        Object obj2 = myLoader.loadClass("com.jvm.classloading.ClassLoaderTest").newInstance();
        System.out.println(obj2.getClass());
        System.out.println(obj2 instanceof com.jvm.classloading.ClassLoaderTest);
    }
}
```

输出结果：

```text
class com.jvm.classloading.ClassLoaderTest
true
class com.jvm.classloading.ClassLoaderTest
false
```

myLoader 是自定义的类加载器，可以用来加载与自己在同一路径下的 Class 文件。main 函数的第一部分使用系统加载主类 ClassLoaderTest 的类加载器加载 ClassLoaderTest，输出显示，obj1 的所属类型检查正确，这是虚拟机中有 2 个 ClassLoaderTest 类，一个是主类，另一个是 main() 方法中加载的类，由于这两个类使用同一个类加载器加载并且来源于同一个 Class 文件，因此这两个类是完全相同的。

第二部分使用自定义的类加载器加载 ClassLoaderTest，`class com.jvm.classloading.ClassLoaderTest` 显示，obj2 确实是类 `com.jvm.classloading.ClassLoaderTest` 实例化出来的对象，但是第二句输出 false。此时虚拟机中有 3 个 ClassLoaderTest 类，由于第 3 个类的类加载器与前面 2 个类加载器不同，虽然来源于同一个 Class 文件，但它是一个独立的类，所属类型检查是返回结果自然是 false。

## 双亲委派模型

### 类加载器种类

从 Java 虚拟机的角度来说，只存在两种不同的类加载器：一种是启动类加载器（**Bootstrap ClassLoader**），这个类加载器使用 C++ 语言实现（HotSpot 虚拟机中），是虚拟机自身的一部分；另一种就是所有其他的类加载器，这些类加载器都有 Java 语言实现，独立于虚拟机外部，并且全部继承自 `java.lang.ClassLoader`。

从开发者的角度，类加载器可以细分为：

- 启动（Bootstrap）类加载器：负责将 Java_Home/lib 下面的类库加载到内存中（比如 **rt.jar**）。由于引导类加载器涉及到虚拟机本地实现细节，开发者无法直接获取到启动类加载器的引用，所以不允许直接通过引用进行操作。
- 标准扩展（Extension）类加载器：是由 Sun 的 **ExtClassLoader（sun.misc.Launcher$ExtClassLoader）**实现的。它负责将 Java_Home /lib/ext 或者由系统变量 java.ext.dir 指定位置中的类库加载到内存中。开发者可以直接使用标准扩展类加载器。
- 应用程序（Application）类加载器：是由 Sun 的 **AppClassLoader（sun.misc.Launcher$AppClassLoader）** 实现的。它负责将系统类路径（CLASSPATH）中指定的类库加载到内存中。开发者可以直接使用系统类加载器。由于这个类加载器是 ClassLoader 中的 `getSystemClassLoader()` 方法的返回值，因此一般称为系统（System）加载器。

除此之外，还有自定义的类加载器，它们之间的层次关系被称为类加载器的 **双亲委派模型**。该模型要求除了顶层的启动类加载器外，其余的类加载器都应该有自己的父类加载器，而这种父子关系一般通过组合（Composition）关系来实现，而不是通过继承（Inheritance）。

![img](https://funtl.com/assets1/20160506184936657.jpg)

### 双亲委派模型

#### 双亲委派模型过程

某个特定的类加载器在接到加载类的请求时，首先将加载任务委托给父类加载器，依次递归，如果父类加载器可以完成类加载任务，就成功返回；只有父类加载器无法完成此加载任务时，才自己去加载。

使用双亲委派模型的好处在于 **Java 类随着它的类加载器一起具备了一种带有优先级的层次关系**。例如类 `java.lang.Object` ，它存在在 **rt.jar** 中，无论哪一个类加载器要加载这个类，最终都是委派给处于模型最顶端的 **Bootstrap ClassLoader** 进行加载，因此 Object 类在程序的各种类加载器环境中都是同一个类。相反，如果没有双亲委派模型而是由各个类加载器自行加载的话，如果用户编写了一个 `java.lang.Object` 的同名类并放在 ClassPath 中，那系统中将会出现多个不同的 Object 类，程序将混乱。因此，如果开发者尝试编写一个与 **rt.jar** 类库中重名的 Java 类，可以正常编译，但是永远无法被加载运行。

#### 双亲委派模型的系统实现

在 `java.lang.ClassLoader` 的 `loadClass()` 方法中，先检查是否已经被加载过，若没有加载则调用父类加载器的 `loadClass()` 方法，若父加载器为空则默认使用启动类加载器作为父加载器。如果父加载失败，则抛出 `ClassNotFoundException` 异常后，再调用自己的 `findClass()` 方法进行加载。

```java
protected synchronized Class<?> loadClass(String name,boolean resolve)throws ClassNotFoundException{
    //check the class has been loaded or not
    Class c = findLoadedClass(name);
    if(c == null){
        try{
            if(parent != null){
                c = parent.loadClass(name,false);
            }else{
                c = findBootstrapClassOrNull(name);
            }
        }catch(ClassNotFoundException e){
            //if throws the exception ,the father can not complete the load
        }
        if(c == null){
            c = findClass(name);
        }
    }
    if(resolve){
        resolveClass(c);
    }
    return c;
}
```

注意，双亲委派模型是 Java 设计者推荐给开发者的类加载器的实现方式，并不是强制规定的。大多数的类加载器都遵循这个模型，但是 JDK 中也有较大规模破坏双亲模型的情况，例如线程上下文类加载器（**Thread Context ClassLoader**）的出现