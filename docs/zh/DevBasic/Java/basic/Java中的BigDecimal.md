# Java中的BigDecimal



## 一、BigDecimal概述

Java在java.math包中提供的API类BigDecimal，用来对超过16位有效位的数进行精确的运算。双精度浮点型变量double可以处理16位有效数，但在实际应用中，可能需要对更大或者更小的数进行运算和处理。一般情况下，对于那些不需要准确计算精度的数字，我们可以直接使用Float和Double处理，但是Double.valueOf(String) 和Float.valueOf(String)会丢失精度。所以开发中，如果我们需要精确计算的结果，则必须使用BigDecimal类来操作。

BigDecimal所创建的是对象，故我们不能使用传统的+、-、*、/等算术运算符直接对其对象进行数学运算，而必须调用其相对应的方法。方法中的参数也必须是BigDecimal的对象。构造器是类的特殊方法，专门用来创建对象，特别是带有参数的对象。



## 二、BigDecimal常用构造函数

### 1、常用构造函数

1. BigDecimal(int)

   创建一个具有参数所指定整数值的对象

2. BigDecimal(double)

   创建一个具有参数所指定双精度值的对象

3. BigDecimal(long)

   创建一个具有参数所指定长整数值的对象

4. BigDecimal(String)

   创建一个具有参数所指定以字符串表示的数值的对象

### 2、使用问题分析

使用示例：

```java
BigDecimal a = new BigDecimal(0.1);
System.out.println("a values is:"+a);
System.out.println("=====================");
BigDecimal b =new BigDecimal("0.1");
System.out.println("b values is:"+b);
```

结果示例：

```
a values is:0.1000000000000000055511151231257827021181583404541015625
=====================
b values is:0.1
```

原因分析：

**1）**参数类型为double的构造方法的结果有一定的不可预知性。有人可能认为在Java中写入newBigDecimal(0.1)所创建的BigDecimal正好等于 0.1（非标度值 1，其标度为 1），但是它实际上等于0.1000000000000000055511151231257827021181583404541015625。这是因为0.1无法准确地表示为 double（或者说对于该情况，不能表示为任何有限长度的二进制小数）。这样，传入到构造方法的值不会正好等于 0.1（虽然表面上等于该值）。



**2）**String 构造方法是完全可预知的：写入 newBigDecimal(“0.1”) 将创建一个 BigDecimal，它正好等于预期的 0.1。因此，比较而言， 通常建议优先使用String构造方法。



**3）**当double必须用作BigDecimal的源时，请注意，此构造方法提供了一个准确转换；它不提供与以下操作相同的结果：先使用Double.toString(double)方法，然后使用BigDecimal(String)构造方法，将double转换为String。要获取该结果，请使用static valueOf(double)方法。



## 三、BigDecimal常用方法详解

### 1、常用方法

1. add(BigDecimal)

   BigDecimal对象中的值相加，返回BigDecimal对象

   

2. subtract(BigDecimal)

   BigDecimal对象中的值相减，返回BigDecimal对象

   

3. multiply(BigDecimal)

   BigDecimal对象中的值相乘，返回BigDecimal对象

   

4. divide(BigDecimal)

   BigDecimal对象中的值相除，返回BigDecimal对象

   

5. toString()

   将BigDecimal对象中的值转换成字符串

   

6. doubleValue()

   将BigDecimal对象中的值转换成双精度数

   

7. floatValue()

   将BigDecimal对象中的值转换成单精度数

   

8. longValue()

   将BigDecimal对象中的值转换成长整数

   

9. intValue()

   将BigDecimal对象中的值转换成整数

   

### 2、BigDecimal大小比较

Java中对BigDecimal比较大小一般用的是bigdemical的compareTo方法

```java
int a = bigdemical.compareTo(bigdemical2)
```

返回结果分析：

```
a = -1,表示bigdemical小于bigdemical2；
a = 0,表示bigdemical等于bigdemical2；
a = 1,表示bigdemical大于bigdemical2；
```

举例：a大于等于b

```java
new bigdemica(a).compareTo(new bigdemical(b)) >= 0
```



## 四、BigDecimal也会丢失精度

我们基本已经形成了常识，需要用到金钱的地方要用 BigDecimal 而不是其他，而我们也都知道浮点型变量在进行计算的时候会出现丢失精度的问题。

那么，你知道其实 BigDecimal 也会丢失精度吗？而使用 BigDecimal 的背后又有什么值得去探究的地方吗？今天，告诉你，知其然，也知其所以然。

如下一段代码：

```java
System.out.println(0.05 + 0.01);  
System.out.println(1.0 - 0.42);  
System.out.println(4.015 * 100);  
System.out.println(123.3 / 100);  
```

输出：

> 0.060000000000000005
> 0.5800000000000001
> 401.49999999999994
> 1.2329999999999999

可以看到在 Java 中进行浮点数运算的时候，会出现丢失精度的问题。那么我们如果在进行商品价格计算的时候，就会出现问题。

很有可能造成我们手中有 0.06 元，却无法购买一个 0.05 元和一个 0.01 元的商品。

因为如上所示，他们两个的总和为 0.060000000000000005。

这无疑是一个很严重的问题，尤其是当电商网站的并发量上去的时候，出现的问题将是巨大的。可能会导致无法下单，或者对账出现问题。所以接下来我们就可以使用 Java 中的 BigDecimal 类来解决这类问题。



**普及一下：**

Java 中 float 的精度为 6-7 位有效数字。double 的精度为 15-16 位。



**API**

构造器：

```
构造器                   描述
BigDecimal(int)       创建一个具有参数所指定整数值的对象。
BigDecimal(double)    创建一个具有参数所指定双精度值的对象。
BigDecimal(long)      创建一个具有参数所指定长整数值的对象。
BigDecimal(String)    创建一个具有参数所指定以字符串表示的数值的对象。
```

函数：

```
方法                    描述
add(BigDecimal)       BigDecimal对象中的值相加，然后返回这个对象。
subtract(BigDecimal)  BigDecimal对象中的值相减，然后返回这个对象。
multiply(BigDecimal)  BigDecimal对象中的值相乘，然后返回这个对象。
divide(BigDecimal)    BigDecimal对象中的值相除，然后返回这个对象。
toString()            将BigDecimal对象的数值转换成字符串。
doubleValue()         将BigDecimal对象中的值以双精度数返回。
floatValue()          将BigDecimal对象中的值以单精度数返回。
longValue()           将BigDecimal对象中的值以长整数返回。
intValue()            将BigDecimal对象中的值以整数返回。
```

由于一般的数值类型，例如 double 不能准确的表示 16 位以上的数字。



**BigDecimal 精度也丢失**

我们在使用 BigDecimal 时，使用它的 BigDecimal(String) 构造器创建对象才有意义。其他的如 BigDecimal b = new BigDecimal(1) 这种，还是会发生精度丢失的问题。如下代码：

```java
BigDecimal a = new BigDecimal(1.01);
BigDecimal b = new BigDecimal(1.02);
BigDecimal c = new BigDecimal("1.01");
BigDecimal d = new BigDecimal("1.02");
System.out.println(a.add(b));
System.out.println(c.add(d));
```

输出：

> 2.0300000000000000266453525910037569701671600341796875
> 2.03

可见论丢失精度 BigDecimal 显的更为过分。但是使用 Bigdecimal 的 BigDecimal(String) 构造器的变量在进行运算的时候却没有出现这种问题。

究其原因计算机组成原理里面都有，它们的编码决定了这样的结果。

long 可以准确存储 19 位数字，而 double 只能准备存储 16 位数字。

double 由于有 exp 位，可以存 16 位以上的数字，但是需要以低位的不精确作为代价。如果需要高于 19 位数字的精确存储，则必须用 BigInteger 来保存，当然会牺牲一些性能。

所以我们一般使用 BigDecimal 来解决商业运算上丢失精度的问题的时候，声明 BigDecimal 对象的时候一定要使用它构造参数为 String 的类型的构造器。

同时这个原则 Effective Java 和 MySQL 必知必会中也都有提及。float 和 double 只能用来做科学计算和工程计算。商业运算中我们要使用 BigDecimal。

而且我们从源码的注释中官方也给出了说明，如下是 BigDecimal 类的 double 类型参数的构造器上的一部分注释说明：

```java
* The results of this constructor can be somewhat unpredictable.  
     * One might assume that writing {@codenew BigDecimal(0.1)} in  
     * Java creates a {@code BigDecimal} which is exactly equal to  
     * 0.1 (an unscaled value of 1, with a scale of 1), but it is  
     * actually equal to  
     * 0.1000000000000000055511151231257827021181583404541015625.  
     * This is because 0.1 cannot be represented exactly as a  
     * {@codedouble} (or, for that matter, as a binary fraction of  
     * any finite length).  Thus, the value that is being passed  
     * <i>in</i> to the constructor is not exactly equal to 0.1,  
     * appearances notwithstanding.  
       ……  
        * When a {@codedouble} must be used as a source for a  
     * {@code BigDecimal}, note that this constructor provides an  
     * exact conversion; it does not give the same result as  
     * converting the {@codedouble} to a {@code String} using the  
     * {@link Double#toString(double)} method and then using the  
     * {@link #BigDecimal(String)} constructor.  To get that result,  
     * use the {@codestatic} {@link #valueOf(double)} method.  
     * </ol>  
public BigDecimal(double val) {  
    this(val,MathContext.UNLIMITED);  
}  
```

第一段也说的很清楚它只能计算的无限接近这个数，但是无法精确到这个数。

第二段则说，如果要想准确计算这个值，那么需要把 double 类型的参数转化为 String 类型的。并且使用 BigDecimal(String) 这个构造方法进行构造，去获取结果。



## 五、BigDecimal格式化

由于NumberFormat类的format()方法可以使用BigDecimal对象作为其参数，可以利用BigDecimal对超出16位有效数字的货币值，百分值，以及一般数值进行格式化控制。

以利用BigDecimal对货币和百分比格式化为例。首先，创建BigDecimal对象，进行BigDecimal的算术运算后，分别建立对货币和百分比格式化的引用，最后利用BigDecimal对象作为format()方法的参数，输出其格式化的货币值和百分比。

```java
NumberFormat currency = NumberFormat.getCurrencyInstance(); //建立货币格式化引用 
NumberFormat percent = NumberFormat.getPercentInstance();  //建立百分比格式化引用 
percent.setMaximumFractionDigits(3); //百分比小数点最多3位 

BigDecimal loanAmount = new BigDecimal("15000.48"); //贷款金额
BigDecimal interestRate = new BigDecimal("0.008"); //利率   
BigDecimal interest = loanAmount.multiply(interestRate); //相乘

System.out.println("贷款金额:\t" + currency.format(loanAmount)); 
System.out.println("利率:\t" + percent.format(interestRate)); 
System.out.println("利息:\t" + currency.format(interest)); 
```

结果：

```
贷款金额: ￥15,000.48 利率: 0.8% 利息: ￥120.00
```

BigDecimal格式化保留2为小数，不足则补0：

```java
public class NumberFormat {
 
 public static void main(String[] s){
    System.out.println(formatToNumber(new BigDecimal("3.435")));
    System.out.println(formatToNumber(new BigDecimal(0)));
    System.out.println(formatToNumber(new BigDecimal("0.00")));
    System.out.println(formatToNumber(new BigDecimal("0.001")));
    System.out.println(formatToNumber(new BigDecimal("0.006")));
    System.out.println(formatToNumber(new BigDecimal("0.206")));
  }
    
 /**
  * @desc 1.0~1之间的BigDecimal小数，格式化后失去前面的0,则前面直接加上0。
  * 2.传入的参数等于0，则直接返回字符串"0.00"
  * 3.大于1的小数，直接格式化返回字符串
  * @param obj传入的小数
  * @return
  */
 public static String formatToNumber(BigDecimal obj) {
  DecimalFormat df = new DecimalFormat("#.00");
  if(obj.compareTo(BigDecimal.ZERO)==0) {
   return "0.00";
  }else if(obj.compareTo(BigDecimal.ZERO)>0&&obj.compareTo(new BigDecimal(1))<0){
   return "0"+df.format(obj).toString();
  }else {
   return df.format(obj).toString();
  }
 }
    
}
```

结果为：

```
3.44
0.00
0.00
0.00
0.01
0.21
```



## 六、BigDecimal常见异常

### 1、除法的时候出现异常

```
java.lang.ArithmeticException: Non-terminating decimal expansion; no exact representable decimal result
```

**原因分析：**

通过BigDecimal的divide方法进行除法时当不整除，出现无限循环小数时，就会抛异常：java.lang.ArithmeticException: Non-terminating decimal expansion; no exact representable decimal result.

**解决方法：**

divide方法设置精确的小数点，如：divide(xxxxx, 2)



## 七、StreamAPI处理BigDecimal的add

我们通常使用Java  Stream API  来处理数据集合。

一个不错的特性是支持对数字流的操作，比如*sum*操作。但是，**我们不能以这种方式处理所有数值类型**

接下来，我们将了解如何对诸如*BigDecimal*之类的数字流执行*sum*操作。



### 1、如何用流求和

Stream API 提供数字流 Numbers Stream，包括 **IntStream、DoubleStream、和 LongStream** 我们通过创建一个数字流来搞清楚它们是如何工作的。然后，我们用 *[IntStream#sum]* 计算它的总数:

```java
IntStream intNumbers = IntStream.range(0, 3);
assertEquals(3, intNumbers.sum());
```

我们可以从*Double*s的列表开始执行类似的操作。通过使用streams，我们可以使用 *mapToDouble* 将对象流转换为*Double stream*：

```
List<Double> doubleNumbers = Arrays.asList(23.48, 52.26, 13.5);
double result = doubleNumbers.stream()
.mapToDouble(Double::doubleValue)
.sum();
assertEquals(89.24, result, .1);
```

所以，如果我们能用同样的方法总结出一组 *BigDecimal* 数字，那就很有用了。

**不幸的是，没有BigDecimalStream。**所以，我们需要另一个解决方案。



### 2、使用Reduce添加BigDecimal数字

我们使用 **Stream.reduce** 来计算sum：

```java
Stream<Integer> intNumbers = Stream.of(5, 1, 100);
int result = intNumbers.reduce(0, Integer::sum);
assertEquals(106, result);
```

**这适用于任何可以逻辑相加的数据**，包括*BigDecimal*：

```java
Stream<BigDecimal> bigDecimalNumber = 
Stream.of(BigDecimal.ZERO, BigDecimal.ONE, BigDecimal.TEN);
BigDecimal result = bigDecimalNumber.reduce(BigDecimal.ZERO, BigDecimal::add);
assertEquals(11, result);
```

*reduce*方法有两个参数：

- *Identity* – 等于*0*–它是还原的起始值
- *Accumulator function* – 接受两个参数，目前为止的结果，以及流的下一个元素



## 八、BigDecimal总结

### 1、总结

1. 在需要精确的小数计算时再使用BigDecimal，BigDecimal的性能比double和float差，在处理庞大，复杂的运算时尤为明显。故一般精度的计算没必要使用BigDecimal。
2. 尽量使用参数类型为String的构造函数。
3. BigDecimal都是不可变的（immutable）的， 在进行每一次四则运算时，都会产生一个新的对象 ，所以在做加减乘除运算时要记得要保存操作后的值。



### 2、工具类推荐

在一般开发过程中，我们数据库中存储的数据都是 float 和 double 类型的。在进行拿来拿去运算的时候还需要不断的转化，这样十分的不方便。

所以这里我写了一个工具类，该工具类提供了 double 类型的基本的加减乘除运算，直接调用即可。

```java
import java.math.BigDecimal;

/**
 * 用于高精确处理常用的数学运算
 */
public class ArithmeticUtils {
    
    /**
     * 默认除法运算精度
     */
    private static final int DEF_DIV_SCALE = 10;

    /**
     * 提供精确的加法运算
     *
     * @param v1 被加数
     * @param v2 加数
     * @return 两个参数的和
     */
    public static double add(double v1, double v2) {
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.add(b2).doubleValue();
    }

    /**
     * 提供精确的加法运算
     *
     * @param v1 被加数
     * @param v2 加数
     * @return 两个参数的和
     */
    public static BigDecimal add(String v1, String v2) {
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.add(b2);
    }

    /**
     * 提供精确的加法运算
     *
     * @param v1    被加数
     * @param v2    加数
     * @param scale 保留scale 位小数
     * @return 两个参数的和
     */
    public static String add(String v1, String v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.add(b2).setScale(scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 提供精确的减法运算
     *
     * @param v1 被减数
     * @param v2 减数
     * @return 两个参数的差
     */
    public static double sub(double v1, double v2) {
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.subtract(b2).doubleValue();
    }

    /**
     * 提供精确的减法运算。
     *
     * @param v1 被减数
     * @param v2 减数
     * @return 两个参数的差
     */
    public static BigDecimal sub(String v1, String v2) {
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.subtract(b2);
    }

    /**
     * 提供精确的减法运算
     *
     * @param v1    被减数
     * @param v2    减数
     * @param scale 保留scale 位小数
     * @return 两个参数的差
     */
    public static String sub(String v1, String v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.subtract(b2).setScale(scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 提供精确的乘法运算
     *
     * @param v1 被乘数
     * @param v2 乘数
     * @return 两个参数的积
     */
    public static double mul(double v1, double v2) {
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.multiply(b2).doubleValue();
    }

    /**
     * 提供精确的乘法运算
     *
     * @param v1 被乘数
     * @param v2 乘数
     * @return 两个参数的积
     */
    public static BigDecimal mul(String v1, String v2) {
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.multiply(b2);
    }

    /**
     * 提供精确的乘法运算
     *
     * @param v1    被乘数
     * @param v2    乘数
     * @param scale 保留scale 位小数
     * @return 两个参数的积
     */
    public static double mul(double v1, double v2, int scale) {
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return round(b1.multiply(b2).doubleValue(), scale);
    }

    /**
     * 提供精确的乘法运算
     *
     * @param v1    被乘数
     * @param v2    乘数
     * @param scale 保留scale 位小数
     * @return 两个参数的积
     */
    public static String mul(String v1, String v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.multiply(b2).setScale(scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 提供（相对）精确的除法运算，当发生除不尽的情况时，精确到
     * 小数点以后10位，以后的数字四舍五入
     *
     * @param v1 被除数
     * @param v2 除数
     * @return 两个参数的商
     */

    public static double div(double v1, double v2) {
        return div(v1, v2, DEF_DIV_SCALE);
    }

    /**
     * 提供（相对）精确的除法运算。当发生除不尽的情况时，由scale参数指
     * 定精度，以后的数字四舍五入
     *
     * @param v1    被除数
     * @param v2    除数
     * @param scale 表示表示需要精确到小数点以后几位。
     * @return 两个参数的商
     */
    public static double div(double v1, double v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException("The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.divide(b2, scale, BigDecimal.ROUND_HALF_UP).doubleValue();
    }

    /**
     * 提供（相对）精确的除法运算。当发生除不尽的情况时，由scale参数指
     * 定精度，以后的数字四舍五入
     *
     * @param v1    被除数
     * @param v2    除数
     * @param scale 表示需要精确到小数点以后几位
     * @return 两个参数的商
     */
    public static String div(String v1, String v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException("The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v1);
        return b1.divide(b2, scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 提供精确的小数位四舍五入处理
     *
     * @param v     需要四舍五入的数字
     * @param scale 小数点后保留几位
     * @return 四舍五入后的结果
     */
    public static double round(double v, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException("The scale must be a positive integer or zero");
        }
        BigDecimal b = new BigDecimal(Double.toString(v));
        return b.setScale(scale, BigDecimal.ROUND_HALF_UP).doubleValue();
    }

    /**
     * 提供精确的小数位四舍五入处理
     *
     * @param v     需要四舍五入的数字
     * @param scale 小数点后保留几位
     * @return 四舍五入后的结果
     */
    public static String round(String v, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        BigDecimal b = new BigDecimal(v);
        return b.setScale(scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 取余数
     *
     * @param v1    被除数
     * @param v2    除数
     * @param scale 小数点后保留几位
     * @return 余数
     */
    public static String remainder(String v1, String v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        return b1.remainder(b2).setScale(scale, BigDecimal.ROUND_HALF_UP).toString();
    }

    /**
     * 取余数  BigDecimal
     *
     * @param v1    被除数
     * @param v2    除数
     * @param scale 小数点后保留几位
     * @return 余数
     */
    public static BigDecimal remainder(BigDecimal v1, BigDecimal v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException(
                    "The scale must be a positive integer or zero");
        }
        return v1.remainder(v2).setScale(scale, BigDecimal.ROUND_HALF_UP);
    }

    /**
     * 比较大小
     *
     * @param v1 被比较数
     * @param v2 比较数
     * @return 如果v1 大于v2 则 返回true 否则false
     */
    public static boolean compare(String v1, String v2) {
        BigDecimal b1 = new BigDecimal(v1);
        BigDecimal b2 = new BigDecimal(v2);
        int bj = b1.compareTo(b2);
        boolean res;
        if (bj > 0)
            res = true;
        else
            res = false;
        return res;
    }
}
```