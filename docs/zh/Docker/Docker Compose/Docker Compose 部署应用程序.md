# Docker Compose 部署应用程序

## 部署 Tomcat

```yaml
version: '3.1'
services:
  tomcat:
    restart: always
    image: tomcat
    container_name: tomcat
    ports:
      - 8080:8080
    volumes:
      - ./webapps:/usr/local/tomcat/webapps
    environment:
      TZ: Asia/Shanghai
```

## 部署 MySQL

```yaml
version: '3.1'
services:
  db:
    # 目前 latest 版本为 MySQL8.x
    image: mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 123456
    command:
      --default-authentication-plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
      --lower_case_table_names=1
    ports:
      - 3306:3306
    volumes:
      - ./data:/var/lib/mysql
  # MySQL 的 Web 客户端
  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080
```

## 部署应用程序

请参考本节视频