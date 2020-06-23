# 使用MapStruct完成对象之间的转换

> 在工作中，我们经常要进行各种对象之间的转换。
>
> **PO**  ： persistent object 持久对象，对应数据库中的一条记录
> **VO**  ： view object 表现层对象，最终返回给前端的对象
> **DTO**： data transfer object数据传输对象，如dubbo服务之间传输的对象
>
> 如果这些对象的属性名相同还好，可以用如下工具类赋值
>
> **Spring BeanUtils、 Cglib BeanCopier 。不建议使用Apache BeanUtils，性能较差。**
>
> 如果属性名不同呢？如果是将多个PO对象合并成一个VO对象呢？
>
> 好在有 [MapStruct](https://mapstruct.org/) 神器，可以帮助我们快速转换。



## 添加依赖

第一步当然是引入依赖，目前1.4版本还是beta版，所以我们这里选择引入1.3版本。使用IDEA的小伙伴推荐去插件商店搜索MapStruct，下载插件可以获得更好的体验。

```xml
<properties>
    <org.mapstruct.version>1.3.1.Final</org.mapstruct.version>
    <java.version>1.8</java.version>
</properties>


<dependencies>
    
    <dependency>
        <groupId>org.mapstruct</groupId>
        <artifactId>mapstruct</artifactId>
        <version>${org.mapstruct.version}</version>
    </dependency>    
    
</dependencies>


<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>

        <!--mapstruct-->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.6.0</version> <!-- or newer version -->
            <configuration>
                <source>${java.version}</source> <!-- depending on your project -->
                <target>${java.version}</target> <!-- depending on your project -->
                <annotationProcessorPaths>
                    <path>
                        <groupId>org.mapstruct</groupId>
                        <artifactId>mapstruct-processor</artifactId>
                        <version>${org.mapstruct.version}</version>
                    </path>
                    <path>
                        <groupId>org.projectlombok</groupId>
                        <artifactId>lombok</artifactId>
                        <version>${lombok.version}</version>
                    </path>
                    <!-- other annotation processors -->
                </annotationProcessorPaths>
            </configuration>
        </plugin>
    </plugins>
</build>
```





## 基本用法

### 对象之间的转换



**PO对象**

```java
/**
 * Description: 学生 实体类
 */
@Data
@Builder
public class Student {
    /** ID */
    private Integer id;
    /** 姓名 */
    private String name;
    /** 年龄 */
    private Integer age;
    /** 班级名 */
    private String className;
}
```



**VO对象**

```java
/**
 * Description: 学生 VO
 */
@Data
public class StudentVO {

    private Integer id;
    private String studentName;
    private Integer studentAge;
    private String schoolName;

}
```



**Mapper转换接口**

```java
/**
 * Description: Student Mapper类
 */
@Mapper
public interface StudentMapper {
    StudentMapper INSTANCE = Mappers.getMapper(StudentMapper.class);

    /**
     * PO转VO
     *
     * @param student 学生PO
     * @return
     */
    @Mappings({
            @Mapping(source = "name", target = "studentName"),
            @Mapping(source = "age", target = "studentAge")
    })
    StudentVO po2Vo(Student student);

}
```

操作步骤：

1. 新建一个Mapper接口，上面加上`@Mapper`注解
2. 新建一个成员变量INSTANCE
3. 用 `@Mapping` 注解指定映射关系，名字相同的就不用再指定了，会自动映射



**单元测试**

```java
@Test
public void po2VoTest() {
    Student student = Student.builder()
        .id(10)
        .name("张三")
        .age(14)
        .className("八二班")
        .build();
    StudentVO studentVO = StudentMapper.INSTANCE.po2Vo(student);
    //StudentVO(id=10, studentName=张三, studentAge=14, schoolName=null)
    System.out.println(studentVO);
}
```





### 列表List中对象的转换

在Mapper接口中添加方法定义

```java
/**
 * Description: Student Mapper类
 */
@Mapper
public interface StudentMapper {
    StudentMapper INSTANCE = Mappers.getMapper(StudentMapper.class);

    
    /**
     * List互转
     *
     * @param student 学生PO
     * @return
     */
    List<StudentVO> poList2VoList(List<Student> student);

    
}
```

List类型互转的映射规则会用单个对象的映射规则，接下来我们单元测试一下，查看效果。

```java
@Test
public void poList2VoListTest() {
    List<Student> studentList = new ArrayList<>();
    for (int i = 1; i <= 2; i++) {
        Student student = Student.builder().id(i).name(String.valueOf(i)).age(i).build();
        studentList.add(student);
    }
    List<StudentVO> studentVOList = StudentMapper.INSTANCE.poList2VoList(studentList);
    // [StudentVO(id=1, studentName=1, studentAge=1, schoolName=null),
    // StudentVO(id=2, studentName=2, studentAge=2, schoolName=null)]
    System.out.println(studentVOList);
}
```



### 多个对象映射一个对象



我们用School和Student来映射SchoolStudentVO

```java
/**
 * Description: 学校 实体类
 */
@Data
@Builder
public class School {

    /** 名称 */
    private String name;

    /** 位置 */
    private String location;

}
```



```java
/**
 * Description: 学生 实体类
 */
@Data
@Builder
public class Student {
    /** ID */
    private Integer id;
    /** 姓名 */
    private String name;
    /** 年龄 */
    private Integer age;
    /** 班级名 */
    private String className;
}
```



```java
/**
 * Description: 学校学生VO
 */
@Data
public class SchoolStudentVO {

    private String schoolName;
    private String studentName;

}
```



在Mapper接口中添加方法定义

```java
/**
 * Description: Student Mapper类
 */
@Mapper
public interface StudentMapper {
    StudentMapper INSTANCE = Mappers.getMapper(StudentMapper.class);  

    /**
     * 多个对象映射一个对象
     *
     * @param school  学校PO
     * @param student 学生PO
     * @return
     */
    @Mappings({
            @Mapping(source = "schoolPO.name", target = "schoolName"),
            @Mapping(source = "studentPO.name", target = "studentName")
    })
    SchoolStudentVO mergeVo(School school, Student student);
}
```



除了以上我们所举出的基本用法之外，还有其他的一些操作，这里就简单介绍一些比较实用的技巧，有兴趣的可以看官方的example

https://github.com/mapstruct/mapstruct-examples



## 结合lombok使用时需要注意的坑

从上面的示例中可以看出，代码中使用了Lombok。但是这里也是有坑的，需要特别注意一下。

这里maven插件要使用3.6.0版本以上、lombok使用1.16.16版本以上，不然会遇到感人的报错。

```
Error:(12, 5) java: No property named "name" exists in source parameter(s). Did you mean "null"?
```

除此之外没有写 getters, setters也会出现这个报错。

需要我们在pom.xml中配置如下(特别注意下`annotationProcessorPaths`中的配置)：

```xml
<plugins>
    <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.6.0</version> <!-- or newer version -->
        <configuration>
            <source>${java.version}</source> <!-- depending on your project -->
            <target>${java.version}</target> <!-- depending on your project -->
            <annotationProcessorPaths>
                <path>
                    <groupId>org.mapstruct</groupId>
                    <artifactId>mapstruct-processor</artifactId>
                    <version>${org.mapstruct.version}</version>
                </path>
                <path>
                    <groupId>org.projectlombok</groupId>
                    <artifactId>lombok</artifactId>
                    <version>${lombok.version}</version>
                </path>
                <!-- other annotation processors -->
            </annotationProcessorPaths>
        </configuration>
    </plugin>
</plugins>
```



## 实现原理

MapStruct帮你对接口生成了一个实现类，下面就是生成的实现类，从class文件夹中可以看到

```java
public class StudentMapperImpl implements StudentMapper {
    public StudentMapperImpl() {
    }

    public StudentVO po2Vo(Student studentPO) {
        if (studentPO == null) {
            return null;
        } else {
            StudentVO studentVO = new StudentVO();
            studentVO.setStudentAge(studentPO.getAge());
            studentVO.setStudentName(studentPO.getName());
            studentVO.setId(studentPO.getId());
            return studentVO;
        }
    }

    public List<StudentVO> poList2VoList(List<Student> studentPO) {
        if (studentPO == null) {
            return null;
        } else {
            List<StudentVO> list = new ArrayList(studentPO.size());
            Iterator var3 = studentPO.iterator();

            while(var3.hasNext()) {
                Student studentPO1 = (StudentPO)var3.next();
                list.add(this.po2Vo(studentPO1));
            }

            return list;
        }
    }

    public SchoolStudentVO mergeVo(School schoolPO, Student studentPO) {
        if (schoolPO == null && studentPO == null) {
            return null;
        } else {
            SchoolStudentVO schoolStudentVO = new SchoolStudentVO();
            if (schoolPO != null) {
                schoolStudentVO.setSchoolName(schoolPO.getName());
            }

            if (studentPO != null) {
                schoolStudentVO.setStudentName(studentPO.getName());
            }

            return schoolStudentVO;
        }
    }
}
```





