# Service 单元测试



## 定义User实体

```java
@Data
public class User {
    private Long id;
    private String name;
    private Integer age;
}
```



## 定义Service测试类

```java
import com.devclub.crays.domain.Book;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Test
    public void save() {
        User user = new User();
        user.setName("张三");        
        user.setAge(20);
        int count = userService.save(book);
        Assert.assertTrue(count > 0);
    }

    @Test
    public void findById(){
        User user = userService.getById(1);
        Assert.assertEquals("张三", user.getName());
    }

}
```

