# Java8 日期处理



## 简介

Java三次引入处理时间的API，JDK1.0中包含了一个Date类，但大多数方法在java1.1引入Calendar类之后被弃用了。 它的实例都是可变的，而且它的API很难使用，比如月份是从0开始这种反人类的设置。Java 8 引入的java.time API 已经纠正了之前的问题。它已经完全实现了JSR310规范。



**在Java 8之前，所有关于时间和日期的API都存在各种使用方面的缺陷，主要体现在以下方面：**

1. `java1.0` 中，对日期时间的支持只能依赖 `java.util.Date `类。`java.util.Date` 设定为可变类型，这个类无法表示日期，只能以毫秒的精度表示时间。更糟糕的是它的易用性，比如：`年份的起始日期选择是1990年，月份的起始从0开始` 。
   
2. `java1.1`  中，Date类中的很多方法被废弃了，取而代之的是`java.util.Calendar`  类。Calendar类也有类似的和设计缺陷，导致使用这些方法写出的代码非常容易出错。比如`月份依旧是从0开始计算（拿掉了由1990年开始计算年份这一设计）`。更糟的是，有的特性只在某一个类有提供，比如用于语言无关方式格式化和解析日期或时间的DateFormat方法就只在Date类有。
   
3. java.util.Date和java.util.Calendar类易用性差，不支持时区，且线程不安全的，开发者难以调试这些api的并发问题，需要编写额外的代码来处理线程安全。`Java 8中引入的新的Date和Time API是不可变的和线程安全的`，使得这些痛点得以解决。
   
4. 用于格式化日期的类java.text.DateFormat是一个抽象类，需要实例化一个SimpleDateFormat对象来处理日期格式化，并且DateFormat是`非线程安全`，在多线程程序中调用同一个DateFormat对象，会得到意想不到的结果。
   
5. 对日期的计算方式繁琐，而且容易出错，因为月份是从0开始的，从Calendar中获取的月份需要加一才能表示当前月份。

6. Java出现了一些第三方的日期处理框架解决以上问题，例如`Joda-Time， date4j,threetenbp,`   等开源项目。于是Java 8中引入了一套标准的用于处理时间和日期API。新的日期API是JSR-310规范的实现，`Joda-Time框架的作者正是JSR-310的规范的倡导者`，所以能从Java 8的日期API中看到很多Joda-Time的特性。


7. 新的时间API是以`ISO为中心`的，并遵循 date, time, duration 和 periods的一致域模型。提供了一些非常实用方法以支持最常见的操作。不再需要我们自己封装一些时间操作类。

   

8. ZonedDate和Time -在旧的时间api中开发人员必须编写额外的逻辑来处理旧API的时区逻辑，Java8 中加入了对时区的支持，带时区的时间为分别为：ZonedDate、ZonedTime、ZonedDateTime。其中每个时区都对应着 ID，地区ID都为 “{区域}/{城市}”的格式。



正是由于存在这么多的问题，所以Java 8 正式推出了一套全新的日期时间 API，新API基于ISO标准日历系统。新的日期时间API位于`java.time`包中，`java.time`包下的所有类都是不可变类型而且线程安全的。

下面是一些关键类

| 编号 | 类的名称                           | 描述                                                         |
| :--- | :--------------------------------- | :----------------------------------------------------------- |
| 1    | Instant                            | 它代表的是时间戳，用来获取时间线上的一个点（瞬时/时间戳）    |
| 2    | LocalDate                          | 表示没有时区，只含年月日的日期，比如2014-01-14。它可以用来存储生日，周年纪念日，入职日期等，是不可变且线程安全的。 |
| 3    | LocalTime                          | 它代表的是没有时区，只含时分秒的时间，是不可变且线程安全的，比如：23:12:10 |
| 4    | LocalDateTime                      | 它表示没有时区的，同时包含年月日时分秒的日期时间，是不可变且线程安全，比如：2018-02-05 23:14:21 |
| 5    | ZonedDateTime                      | 包含时区的完整的日期时间，偏移量是以UTC/格林威治时间为基准的。 |
| 6    | ZoneId                             | 时区ID，用来确定 `Instant 和 LocalDateTime`互相转换的规则    |
| 7    | ZoneOffset                         | 时区偏移量，比如：+8:00                                      |
| 8    | Clock                              | 用于访问当前时刻、日期、时间，用到时区                       |
| 9    | Duration                           | 用秒和纳秒表示时间的数量（长短），用于计算两个日期的“时间”间隔 |
| 10   | Period                             | 时间段，用于计算两个“日期”间隔                               |
| 11   | java.time.format.DateTimeFormatter | 时间格式化                                                   |

其中，LocalDate、LocalTime、LocalDateTime是新API里的基础对象。





在下面的教程中我们将通过一些简单的实例来学习新API是如何处理时间及日期的。



## LocalDate

1. LocalDate 类表示一个没有时区，只含年月日的日期。可以通过LocalDate的静态方法`of()`创建一个实例，LocalDate 也包含一些方法用来获取年份，月份，天，星期几等。
2. 它可以用来存储生日，周年纪念日，入职日期等，是不可变且线程安全的。

```java
@Test  
public void TestLocalDate() {  
//1.获取当前日期  
LocalDate now = LocalDate.now();
System.out.println("now=》" + now.getYear() + "-" + now.getMonthValue() + "-" + now.getDayOfMonth());
  
//2.设置指定日期
LocalDate localDate = LocalDate.of(2019, 11, 5);     // 初始化一个日期：2019-11-5  
int year = localDate.getDayOfYear();                     // 年份：2019  
Month month = localDate.getMonth();                 // 月份：DECEMBER  
int dayOfMonth = localDate.getDayOfMonth();         // 月份中的第几天：5  
DayOfWeek dayOfWeek = localDate.getDayOfWeek();     // 一周的第几天：THURSDAY  
int length = localDate.lengthOfMonth();             // 月份的天数：  
boolean leapYear = localDate.isLeapYear();          // 是否是闰年  
System.out.println(  
"dayOfYear=》" + year + "，month=》" + month  
+ "，dayOfMonth=》" + dayOfMonth+ "，dayOfWeek=》"  
+  dayOfWeek + "，lengthOfMonth=》" + length+ "，isLeapYear=》" + leapYear);  
  
//3.日期字符串转换LocalDate  
//LocalDate.parse(String dateStr) 默认格式为 DateTimeFormatter.ISO_LOCAL_DATE 即:2011-12-03  
LocalDate formatDate = LocalDate.parse("2011-12-03", DateTimeFormatter.ISO_LOCAL_DATE);  
System.out.println("formatDate=》"+formatDate);  
  
//4.日期相减  
  
//要使上面日期相减的代码正确编译，你需要使用静态导入TemporalAdjusters对象：  
// import static java.time.temporal.TemporalAdjusters.*;  
LocalDate minus1 = formatDate.minusDays(5); //当前日期减5天  
LocalDate minus2 = formatDate.minusDays(-1); //当前日期+1天  
System.out.println("formatDate=》" + formatDate + ", 减5 ：" + minus1 + ",加1 " + minus2);  
  
LocalDate currentLocalDate = LocalDate.of(2017,01,05);  
LocalDate date1 = currentLocalDate.withYear(2016);              // 修改为 2016-01-05  
LocalDate date2 = currentLocalDate.withMonth(2);                // 修改为 2017-02-05  
LocalDate date3 = currentLocalDate.withDayOfMonth(1);           // 修改为 2017-01-01  
LocalDate date4 = currentLocalDate.plusYears(1);                // 增加一年 2018-01-05  
LocalDate date5 = currentLocalDate.minusMonths(2);              // 减少两个月 2016-11-05  
LocalDate date6 = currentLocalDate.plus(5, ChronoUnit.DAYS);    // 增加5天 2017-01-10  
LocalDate date7 = currentLocalDate.with(TemporalAdjusters.nextOrSame(DayOfWeek.SUNDAY));      // 返回下一个距离当前时间最近的星期日  
LocalDate date9 = currentLocalDate.with(TemporalAdjusters.lastInMonth(DayOfWeek.SATURDAY));   // 返回本月最后一个星期六  
}  
```

要使上面`日期相减`的代码正确编译，你需要使用静态导入TemporalAdjusters对象：
`import static java.time.temporal.TemporalAdjusters.*;`

所有的日期类都实现类TemporalAdjusters类

| 方法名                      | 描述                                                        |
| :-------------------------- | :---------------------------------------------------------- |
| dayOfWeekInMonth            | 返回同一个月中每周的第几天                                  |
| firstDayOfMonth             | 返回当月的第一天                                            |
| firstDayOfNextMonth         | 返回下月的第一天                                            |
| firstDayOfNextYear          | 返回下一年的第一天                                          |
| firstDayOfYear              | 返回本年的第一天                                            |
| firstInMonth                | 返回同一个月中第一个星期几                                  |
| lastDayOfMonth              | 返回当月的最后一天                                          |
| lastDayOfNextMonth          | 返回下月的最后一天                                          |
| lastDayOfNextYear           | 返回下一年的最后一天                                        |
| lastDayOfYear               | 返回本年的最后一天                                          |
| lastInMonth                 | 返回同一个月中最后一个星期几                                |
| next / previous             | 返回后一个/前一个给定的星期几                               |
| nextOrSame / previousOrSame | 返回后一个/前一个给定的星期几，如果这个值满足条件，直接返回 |



## LocalTime

它代表的是没有时区,只含时分秒的时间 ,是不可变且线程安全的，用法和LocalDate差不多

```java
@Test
public void TestLocalTime() {
    //1.获取当前日期时间
    LocalTime now = LocalTime.now();
}
```



## LocalDateTime

1. LocalDateTime类是LocalDate和LocalTime的结合体，它表示没有时区的,同时包含年月日时分秒的日期时间，是不可变且线程安全，可以通过of()方法直接创建
2. 它同时表示了日期和时间，但不带有时区信息，可以直接创建，也可以通过合并日期和时间对象构造。
3. 调用LocalDate的atTime()方法或LocalTime的atDate()方法将LocalDate或LocalTime合并成一个LocalDateTime

```java
@Test
public void testLocalDateTime() {
//1.获取当前日期时间
LocalDateTime now = LocalDateTime.now();
System.out.println("now=》" + now.getYear() + "-" + now.getMonthValue() + "-"
+ now.getDayOfMonth() + " "+ now.getHour() + ":" + now.getMinute() + ":"
+ + now.getSecond());

//2.设置指定日期
LocalDateTime localDateTime = LocalDateTime.of(2019, 11, 5, 14, 29, 35);
int dayOfYear = localDateTime.getDayOfYear(); //一年第几天
System.out.println("dayOfYear=》" + dayOfYear);

// 3.将 LocalDate 和  LocalTime 组合成一个 LocalDateTime
LocalDate localDate = LocalDate.of(2019, 11, 12);
LocalTime localTime = LocalTime.of(13, 14, 15);
LocalDateTime newLocalDateTime = LocalDateTime.of(localDate, localTime);
System.out.println("newLocalDateTime=》" + newLocalDateTime);

//4.将LocalDateTime 分割成LocalDate和LocalTime
LocalDate toLocalDate = newLocalDateTime.toLocalDate();
LocalTime toLocalTime = newLocalDateTime.toLocalTime();
System.out.println("toLocalDate=》" + toLocalDate + "，toLocalTime=》" + toLocalTime);
}
```



## Instant

1. Instant用于表示一个时间戳，它与我们常使用的System.currentTimeMillis()有些类似，不过Instant可以精确到纳秒（Nano-Second），System.currentTimeMillis()方法只精确到毫秒（Milli-Second）。
2. 如果查看Instant源码，发现它的内部使用了两个常量，seconds表示从1970-01-01 00:00:00开始到现在的秒数，nanos表示纳秒部分（nanos的值不会超过999,999,999）。
3. Instant除了使用now()方法创建外，还可以通过ofEpochSecond方法创建

```java
@Test
public void testInstant() {
//1.获取当前毫秒数
Instant now = Instant.now();
System.out.println("now=>" + now);// instant实例
System.out.println("toEpochMilli()=>" + now.toEpochMilli());//获取毫秒数

Instant instant = Instant.ofEpochSecond(120, 100000);
// ofEpochSecond()方法的第一个参数为秒，第二个参数为纳秒，
// 上面的代码表示从1970-01-01 00:00:00开始后两分钟的10万纳秒的时刻，控制台上的输出为：
System.out.println("ofEpochSecond()=》" + instant);
System.out.println("toEpochMilli()=》" + instant.toEpochMilli());
}
```



## Clock

获取某个时区下当前的瞬时时间、日期，代替System.currentTimelnMillis()与TimeZone.getDefault()方法

```java
@Test
public void testClock() {
//1.获取系统默认的瞬时时间
System.out.println(Clock.systemDefaultZone().millis());

//2.获取UTC瞬时时间
Clock clock = Clock.systemUTC();
System.out.println(clock.millis());
}
```



## Duration

1. Duration:用于计算两个“时间”间隔
2. Duration的内部实现与Instant类似，也是包含两部分：seconds表示秒，nanos表示纳秒。
3. 两者的区别是Instant用于表示一个时间戳（或者说是一个时间点），而Duration表示一个时间段，所以Duration类中不包含now()静态方法。
4. 还可以可以通过Duration.between()方法创建一个指定范围的Duration对象



```java
@Test
public void testDuration() {
//1.计算两个时间段的总天数/小时数/分钟数/秒数/毫秒数/纳秒数 例如:计算2019-11-11 02:03:04 - 2019-11-11 05:03:04
LocalDateTime from = LocalDateTime.of(2019, 11, 11, 2, 3, 4);    // 2019-10-01 02:03:04
LocalDateTime to = LocalDateTime.of(2019, 11, 11, 5, 3, 4);     // 2019-11-11 05:03:04
Duration duration = Duration.between(from, to);     // 表示从 2017-01-05 10:07:00 到 2017-02-05 10:07:00 这段时间

long days = duration.toDays();              // 这段时间的总天数
long hours = duration.toHours();            // 这段时间的小时数
long minutes = duration.toMinutes();        // 这段时间的分钟数
long seconds = duration.getSeconds();       // 这段时间的秒数
long milliSeconds = duration.toMillis();    // 这段时间的毫秒数
long nanoSeconds = duration.toNanos();      // 这段时间的纳秒数

System.out.println("toDays()=》" + days + ",toHours()=》" + hours + ",toMinutes()=》" + minutes + ",toSeconds()=》" + seconds
+ ",toMillis()=》" + milliSeconds + ",toNanos()=》" + nanoSeconds);

//2. 创建时间段
// Duration对象还可以通过of()方法创建，该方法接受一个时间段长度，和一个时间单位作为参数：
Duration duration1 = Duration.of(5, ChronoUnit.DAYS); // 5天
Duration duration2 = Duration.of(1000, ChronoUnit.MILLIS); // 1000毫秒

Duration duration3 = duration2.minusMillis(500);//减少当前时间段毫秒数 duration2 - 500 毫秒 = 500
System.out.println("duration1=》" + duration1.getSeconds() + "，duration2=》" + duration2.toMillis());
System.out.println("duration3=》" + duration3.toMillis());
}
```



## Period

1. Period:用于计算两个“日期”间隔
2. Period在概念上和Duration类似，区别在于Period是以年月日来衡量一个时间段

```java
@Test
public void testPeriod() {
//1. 创建日期时间段 例如:比如2年3个月6天：
Period period = Period.of(2, 3, 6);
System.out.println("addTo()=》"+period.addTo(LocalDate.now()));// 当前时间新增 2年2个月6天
System.out.println("toTotalMonths()=》"+period.toTotalMonths());// 总月数
System.out.println("getYears()=》"+period.getYears());// 获取年
System.out.println("getMonths()=》"+period.getMonths());// 获取月
System.out.println("getDays()=》"+period.getDays());// 获取日

//2.计算日期段 例如:2019-10-01 到 2019-11-05 这段时间
Period betweenPeriod = Period.between(
LocalDate.of(2019, 10, 1),
LocalDate.of(2019, 11, 5));
System.out.println("\ngetYears()=》"+betweenPeriod.getYears());// 获取年
System.out.println("getMonths()=》"+betweenPeriod.getMonths());// 获取月
System.out.println("getDays()=》"+betweenPeriod.getDays());// 获取日
}
```



## 与日期(Date)和日历(Calendar)的兼容性

Java 8添加了toInstant()方法，该方法有助于将旧API中的Date和Calendar实例转换为新的Date Time API

```java
@Test
public void testDateAndCalendaCompatibilityr(){
//Date 转 LocalDateTime
LocalDateTime date =  LocalDateTime.ofInstant(new Date().toInstant(), ZoneId.systemDefault());
//Calendar 转 LocalDateTime
LocalDateTime calendar =  LocalDateTime.ofInstant(Calendar.getInstance().toInstant(), ZoneId.systemDefault());

//通过  Date().getTime() 创建 LocalDateTime /  System.currentTimeMillis()
LocalDateTime dateMillis = LocalDateTime.ofEpochSecond( System.currentTimeMillis(), 0, ZoneOffset.UTC);
//通过  Calendar.getInstance().getTimeInMillis( 创建 LocalDateTime
LocalDateTime calendarMillis = LocalDateTime.ofEpochSecond(Calendar.getInstance().getTimeInMillis(), 0, ZoneOffset.UTC);

System.out.println("date=》"+date+"，dateMillis=》"+dateMillis.toString());
System.out.println("calendar=》"+calendar+"，calendarMillis=》"+calendarMillis);
}
```



## DateTimeFormatter

日期时间格式化

1. 新的日期API中提供了一个DateTimeFormatter类用于处理日期格式化操作，它被包含在java.time.format包中
2. Java 8的日期类有一个format()方法用于将日期格式化为字符串，该方法接收一个DateTimeFormatter类型参数

```java
@Test
public void testDateTimeFormat(){
// 1.创建指定时间的LocalDateTime
LocalDateTime localDateTime = LocalDateTime.of(2019,11, 25, 6, 30);

// 传递ISO日期格式以格式化本地日期 结果是:2019-11-25
String isoDate= localDateTime.format(DateTimeFormatter.ISO_DATE);
System.out.println("ISO_DATE=》"+isoDate);

// 格式成 ISO_DATE_TIME 结果是:2019-11-25T06:30:00
String isoDateTime = localDateTime.format(DateTimeFormatter.ISO_DATE_TIME);
System.out.println("ISO_DATE_TIME=》"+isoDateTime);

//该DateTimeFormatter提供多种标准格式选项。也可以提供自定义模式来格式化方法，如下所示，它将返回LocalDate为2015/01/25：
String definedDateTime = localDateTime.format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
System.out.println("definedDateTime=》"+definedDateTime);

//我们可以将格式样式传递为SHORT(短)，LONG(长)或MEDIUM(中等)作为格式化选项的一部分。下面的代码示例输出2015年1月25日06:30:00  SHORT/LONG/MEDIUM
String shortDateTime = localDateTime.format( DateTimeFormatter.ofLocalizedDateTime(FormatStyle.SHORT));
String longDateTime = localDateTime.format( DateTimeFormatter.ofLocalizedDateTime(FormatStyle.LONG));
String mediuDateTime = localDateTime.format( DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM));
System.out.println("shortDateTime =》"+shortDateTime);
System.out.println("longDateTime=》"+longDateTime);
System.out.println("mediuDateTime=》"+mediuDateTime);
}
```



## ZoneId

1. Java 8中的时区操作被很大程度上简化了，新的时区类java.time.ZoneId是原有的java.util.TimeZone类的替代品。
2. ZoneId对象可以通过ZoneId.of()方法创建，也可以通过ZoneId.systemDefault()获取系统默认时区：

```java
@Test
public void testTimeZone(){
//1.获取默认时区
ZoneId systemZoneId = ZoneId.systemDefault();
System.out.println("systemZoneId=》"+systemZoneId);// 输出 systemZoneId=》Asia/Shanghai

//2.获取指定时区，of()方法接收一个“区域/城市”的字符串作为参数
ZoneId shanghaiZoneId = ZoneId.of("Asia/Shanghai");
System.out.println("shanghaiZoneId=》"+shanghaiZoneId);// 输出 shanghaiZoneId=》Asia/Shanghai

//3.通过getAvailableZoneIds()方法获取所有合法的“区域/城市”字符串：
Set<String> zoneIds = ZoneId.getAvailableZoneIds();
System.out.println("zoneIds=》"+zoneIds);// 输出 zoneIds=》[Asia/Aden, America/Cuiaba, Etc/GMT+9, Etc/GMT+8, Africa/Nairobi.......]

//4.老的时区类TimeZone转换为ZoneId，Java 8也提供了转化方法：
ZoneId oldToNewZoneId = TimeZone.getDefault().toZoneId();
System.out.println("oldToNewZoneId=》"+oldToNewZoneId);// 输出 oldToNewZoneId=》Asia/Shanghai

//5. 通过ZoneId，我们就可以将一个LocalDate、LocalTime或LocalDateTime对象转化为ZonedDateTime对象：
LocalDateTime localDateTime = LocalDateTime.now();
ZonedDateTime zonedDateTime = ZonedDateTime.of(localDateTime, shanghaiZoneId);
System.out.println("zonedDateTime=》"+zonedDateTime);

//6. ZonedDateTime对象由两部分构成，LocalDateTime和ZoneId，
// 其中2019-11-05T19:18:06.951部分为LocalDateTime，+08:00[Asia/Shanghai]部分为ZoneId。
//另一种表示时区的方式是使用ZoneOffset，它是以当前时间和世界标准时间（UTC）/格林威治时间（GMT）的偏差来计算，例如：
ZoneOffset zoneOffset = ZoneOffset.of("+09:00");
LocalDateTime newDateTime = LocalDateTime.now();
OffsetDateTime offsetDateTime = OffsetDateTime.of(newDateTime, zoneOffset);
System.out.println("offsetDateTime=》"+offsetDateTime);
}
```



## Java6/Java7对日期时间的处理

1. Java 7或Java 6这些老项目来说可以使用 Joda-Time/date4j/threetenbp
2. 事实上，Java 8 Date Time API由Joda-Time库（Stephen Colebourne）和Oracle共同领导。该库提供了Java 8 Date Time项目中支持的几乎所有功能



## 其他历法

1. Java中使用的历法是ISO 8601日历系统，它是世界民用历法，也就是我们所说的公历。平
   年有365天，闰年是366天。闰年的定义是：非世纪年，能被4整除；世纪年能被400整除。为了计算的一致性，公元1年的前一年被当做公元0年，以此类推。
2. 此外Java 8还提供了4套其他历法（很奇怪为什么没有汉族人使用的农历），每套历法都包含一个日期类，分别是：
   - ThaiBuddhistDate：泰国佛教历

   - MinguoDate：中华民国历
   - JapaneseDate：日本历
   - HijrahDate：伊斯兰历
3. 时区指的是地球上共享同一标准时间的地区。每个时区都有一个唯一标识符，同时还有一个地区/城市(Asia/Tokyo)的格式以及从格林威治时间开始的一个偏移时间。比如说，东京的偏移时间就是+09:00



## SpringBoot中如何处理LocalDateTime
**后台传LocalDateTime到前台**

1. 将LocalDateTime字段`以时间戳的方式返回给前端`, 添加日期转化类

```java
/**
* LocalDateTime Json数据转换器
*/
public class LocalDateTimeConverter extends JsonSerializer<LocalDateTime> {
    
@Override
public void serialize(LocalDateTime value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
gen.writeNumber(value.toInstant(ZoneOffset.of("+8")).toEpochMilli());

}
}
```

并在`LocalDateTime字段`上添加 `@JsonSerialize(using=LocalDateTimeConverter.class)` 注解，如下：

```java
@JsonSerialize(using=LocalDateTimeConverter.class)
protected LocalDateTime gmtModified;  
```

将

`LocalDateTime字段`以`指定格式化日期的方式返回给前端`在 LocalDateTime字段上添加 `@JsonFormat(shape=JsonFormat.Shape.STRING,pattern="yyyy-MM-dd HH:mm:ss")`注解即可，如下：

```java
@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss")  
protected LocalDateTime gmtModified;
```



**前台传LocalDateTime到后台**

1. 对前端传入的日期进行格式化 在`LocalDateTime字段`上添加`@DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")`注解即可，如下：

```java
@DateTimeFormat(pattern ="yyyy-MM-dd HH:mm:ss")  
protected LocalDateTime gmtModified;  
```






## 示例1:Java 8中获取今天的日期

Java 8 中的 LocalDate 用于表示当天日期。和java.util.Date不同，它只有日期，不包含时间。当你仅需要表示日期时就用这个类。

```java
package com.devclub.datedemo;

import java.time.LocalDate;

/**
 * Description: 获取今天的日期
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo01 {

    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        //运行结果: 今天的日期:2020-04-08
        System.out.println("今天的日期:"+today);
    }

}
```



## 示例2:Java 8中获取年、月、日信息

```java
package com.devclub.datedemo;

import java.time.LocalDate;

/**
 * Description: 获取年、月、日信息
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo02 {

    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        int year = today.getYear();
        int month = today.getMonthValue();
        int day = today.getDayOfMonth();

        System.out.println("year:"+year);
        System.out.println("month:"+month);
        System.out.println("day:"+day);
    }

}
```



## 示例3:Java 8中处理特定日期

我们通过静态工厂方法now()非常容易地创建了当天日期，你还可以调用另一个有用的工厂方法LocalDate.of()创建任意日期， 该方法需要传入年、月、日做参数，返回对应的LocalDate实例。这个方法的好处是没再犯老API的设计错误，比如年度起始于1900，月份是从0开 始等等。

```java
package com.devclub.datedemo;

import java.time.LocalDate;

/**
 * Description: 处理特定日期
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo03 {

    public static void main(String[] args) {
        LocalDate date = LocalDate.of(2018,2,6);
        System.out.println("自定义日期:"+date);
    }

}
```



## 示例4:Java 8中判断两个日期是否相等

```java
package com.devclub.datedemo;

import java.time.LocalDate;

/**
 * Description: 判断两个日期是否相等
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo04 {

    public static void main(String[] args) {
        LocalDate date1 = LocalDate.now();
        LocalDate date2 = LocalDate.of(2020,4,8);

        if(date1.equals(date2)){
            System.out.println("时间相等");
        }else{
            System.out.println("时间不等");
        }
    }

}
```



## 示例5:Java 8中检查像生日这种周期性事件

```java
package com.devclub.datedemo;;

import java.time.LocalDate;
import java.time.MonthDay;

/**
 * Description: 检查像生日这种周期性事件
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo05 {

    public static void main(String[] args) {
        LocalDate date1 = LocalDate.now();
        LocalDate date2 = LocalDate.of(2018,2,6);
        
        MonthDay birthday = MonthDay.of(date2.getMonth(),date2.getDayOfMonth());
        MonthDay currentMonthDay = MonthDay.from(date1);

        if(currentMonthDay.equals(birthday)){
            System.out.println("是你的生日");
        }else{
            System.out.println("你的生日还没有到");
        }
    }

}
```

> 只要当天的日期和生日匹配，无论是哪一年都会打印出祝贺信息。你可以把程序整合进系统时钟，看看生日时是否会收到提醒，或者写一个单元测试来检测代码是否运行正确。



## 示例6:Java 8中获取当前时间

```java
package com.devclub.datedemo;

import java.time.LocalTime;

/**
 * Description: 获取当前时间
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo06 {

    public static void main(String[] args) {
        LocalTime time = LocalTime.now();
        System.out.println("获取当前的时间,不含有日期:"+time);
    }

}
```

可以看到当前时间就只包含时间信息，没有日期。



## 示例7:Java 8中获取当前时间相加后的时间

通过增加小时、分、秒来计算将来的时间很常见。Java 8除了不变类型和线程安全的好处之外，还提供了更好的`plusHours()`方法替换 `add()`，并且是兼容的。注意，这些方法返回一个全新的LocalTime实例，由于其不可变性，返回后一定要用变量赋值。

```java
package com.devclub.datedemo;

import java.time.LocalTime;

/**
 * Description: 获取当前时间相加后的时间
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo07 {

    public static void main(String[] args) {
        LocalTime time = LocalTime.now();
        LocalTime newTime = time.plusHours(3);
        System.out.println("三个小时后的时间为:"+newTime);
    }

}
```



## 示例8:Java 8如何计算一周后的日期

和上个例子计算3小时以后的时间类似，这个例子会计算一周后的日期。LocalDate日期不包含时间信息，它的plus()方法用来增加天、周、月，ChronoUnit类声明了这些时间单位。由于LocalDate也是不变类型，返回后一定要用变量赋值。

```java
package com.devclub.datedemo;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

/**
 * Description: 计算一周后的日期
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo08 {

    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        System.out.println("今天的日期为:"+today);

        LocalDate nextWeek = today.plus(1, ChronoUnit.WEEKS);
        System.out.println("一周后的日期为:"+nextWeek);
    }

}
```

可以看到新日期离当天日期是7天，也就是一周。你可以用同样的方法增加1个月、1年、1小时、1分钟甚至一个世纪，更多选项可以查看Java 8 API中的`ChronoUnit`类。



## 示例9:Java 8计算一年前或一年后的日期

利用minus()方法计算一年前的日期

```java
package com.devclub.datedemo;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

/**
 * Description: 计算一年前或一年后的日期
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo09 {

    public static void main(String[] args) {
        LocalDate today = LocalDate.now();

        LocalDate previousYear = today.minus(1, ChronoUnit.YEARS);
        System.out.println("一年前的日期 : " + previousYear);

        LocalDate nextYear = today.plus(1, ChronoUnit.YEARS);
        System.out.println("一年后的日期:"+nextYear);
    }

}
```



## 示例10:Java 8的Clock时钟类

Java 8增加了一个Clock时钟类用于获取当时的时间戳，或当前时区下的日期时间信息。以前用到System.currentTimeInMillis()和TimeZone.getDefault()的地方都可用Clock替换。

```java
package com.devclub.datedemo;

import java.time.Clock;

/**
 * Description: Java 8的Clock时钟类
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo10 {

    public static void main(String[] args) {
        // Returns the current time based on your system clock and set to UTC.
        Clock clock = Clock.systemUTC();
        System.out.println("Clock : " + clock.millis());

        // Returns time based on system clock zone
        Clock defaultClock = Clock.systemDefaultZone();
        System.out.println("Clock : " + defaultClock.millis());
    }

}
```



## 示例11:如何用Java判断日期是早于还是晚于另一个日期

另一个工作中常见的操作就是如何判断给定的一个日期是大于某天还是小于某天？在Java 8中，LocalDate类有两类方法isBefore()和isAfter()用于比较日期。调用isBefore()方法时，如果给定日期小于当前日期则返回true。

```java
package com.devclub.datedemo;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

/**
 * Description: 判断日期是早于还是晚于另一个日期
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo11 {

    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        LocalDate yesterday = today.minus(1, ChronoUnit.DAYS);
        LocalDate tomorrow = LocalDate.of(2021, 2, 6);

        if (tomorrow.isAfter(today)) {
            System.out.println("之后的日期:" + tomorrow);
        }

        if (yesterday.isBefore(today)) {
            System.out.println("之前的日期:" + yesterday);
        }
    }

}
```



## 示例12:Java 8中处理时区

Java 8不仅分离了日期和时间，也把时区分离出来了。现在有一系列单独的类如ZoneId来处理特定时区，ZoneDateTime类来表示某时区下的时间。这在Java 8以前都是 GregorianCalendar类来做的。下面这个例子展示了如何把本时区的时间转换成另一个时区的时间。

```java
package com.devclub.datedemo;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

/**
 * Description: 处理时区
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo12 {

    public static void main(String[] args) {
        // Date and time with timezone in Java 8
        ZoneId america = ZoneId.of("America/New_York");
        LocalDateTime localDateAndTime = LocalDateTime.now();
        ZonedDateTime dateAndTimeInNewYork = ZonedDateTime.of(localDateAndTime, america);
        System.out.println("Current date and time in a particular timezone : " + dateAndTimeInNewYork);
    }

}
```



## 示例13:如何表示信用卡到期这类固定日期

与 `MonthDay` 检查重复事件的例子相似，`YearMonth` 是另一个组合类，用于表示信用卡到期日、FD到期日、期货期权到期日等。还可以用这个类得到 当月共有多少天，YearMonth实例的`lengthOfMonth()`方法可以返回当月的天数，在判断2月有28天还是29天时非常有用。

```java
package com.devclub.datedemo;

import java.time.Month;
import java.time.YearMonth;

/**
 * Description: 如何表示信用卡到期这类固定日期
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo13 {

    public static void main(String[] args) {
        YearMonth currentYearMonth = YearMonth.now();
        System.out.printf("当前年月为： %s，当月天数为: %d%n", currentYearMonth, currentYearMonth.lengthOfMonth());

        YearMonth creditCardExpiry = YearMonth.of(2019, Month.FEBRUARY);
        System.out.printf("你的信用卡到期日为： %s %n", creditCardExpiry);
    }

}
```



## 示例14:如何在Java 8中检查闰年

```java
package com.devclub.datedemo;

import java.time.LocalDate;

/**
 * Description: 如何在Java 8中检查闰年
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo14 {

    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        if(today.isLeapYear()){
            System.out.println("This year is Leap year");
        }else {
            System.out.println("This year is not a Leap year");
        }
    }

}
```



## 示例15:计算两个日期之间的天数和月数

有一个常见日期操作是计算两个日期之间的天数、周数或月数。在Java 8中可以用java.time.Period类来做计算。下面这个例子中，我们计算了当天和将来某一天之间的月数。

```java
package com.devclub.datedemo;

import java.time.LocalDate;
import java.time.Period;

/**
 * Description: 计算两个日期之间的天数和月数
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo15 {

    public static void main(String[] args) {
        LocalDate today = LocalDate.now();

        LocalDate java8Release = LocalDate.of(2018, 12, 14);

        Period periodToNextJavaRelease = Period.between(today, java8Release);
        System.out.println("Months left between today and Java 8 release : "
                + periodToNextJavaRelease.getYears() + " years and " + periodToNextJavaRelease.getMonths() + " months");
    }

}

```



## 示例16:在Java 8中获取当前的时间戳

Instant类有一个静态工厂方法now()会返回当前的时间戳，如下所示：

```java
package com.devclub.datedemo;

import java.time.Instant;

/**
 * Description: 在Java 8中获取当前的时间戳
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo16 {

    public static void main(String[] args) {
        Instant timestamp = Instant.now();
        System.out.println("What is value of this instant " + timestamp.toEpochMilli());
    }

}
```

时间戳信息里同时包含了日期和时间，这和`java.util.Date`很像。实际上Instant类确实等同于 Java 8之前的Date类，你可以使用Date类和Instant类各自的转换方法互相转换，例如：`Date.from(Instant)` 将Instant转换成`java.util.Date`，`Date.toInstant()`则是将Date类转换成Instant类。



## 示例17:Java 8中如何使用预定义的格式化工具去解析或格式化日期

```java
package com.devclub.datedemo;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

/**
 * Description: 如何使用预定义的格式化工具去解析或格式化日期
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo17 {

    public static void main(String[] args) {
        String dayAfterTomorrow = "20200409";
        LocalDate formatted = LocalDate.parse(dayAfterTomorrow, DateTimeFormatter.BASIC_ISO_DATE);
        System.out.println(dayAfterTomorrow+"  格式化后的日期为:  "+formatted);
    }

}
```



## 示例18:字符串互转日期类型

```java
package com.devclub.datedemo;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * Description: 字符串互转日期类型
 *
 * @author: RyuZheng
 * @date: 2020.04.08
 */
public class Demo18 {

    public static void main(String[] args) {
        LocalDateTime date = LocalDateTime.now();

        DateTimeFormatter format1 = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        //日期转字符串
        String str = date.format(format1);
        System.out.println("日期转换为字符串:"+str);


        DateTimeFormatter format2 = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        //字符串转日期
        LocalDate date2 = LocalDate.parse(str, format2);
        System.out.println("字符串转换为日期:"+date2);
    }

}
```