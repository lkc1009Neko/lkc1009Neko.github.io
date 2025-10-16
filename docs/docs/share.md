# Neko Share Project Information

本篇文档为[Neko Share]的介绍说明

## [Neko Share]技术选型

### WEB客户端

- [Vue-ts](https://cn.vuejs.org/guide/introduction.html)
- [Vite 7](https://cn.vite.dev/guide/)
- [Naive-UI](https://www.naiveui.com/zh-CN/os-theme/docs/introduction)

### WEB服务端

- [SpringBoot 3](https://spring.io/projects/spring-boot)
- [Sa-token](https://sa-token.cc/doc.html#/)
- [Smart-doc](https://smart-doc-group.github.io/zh/guide/getting-started)
- [Mybatis-plus](https://baomidou.com/introduce/)
- [Redis](https://redis.io/docs/latest/operate/oss_and_stack/install/install-stack/)
- [PostgreSQL](https://www.postgresql.org/docs/18/index.html)
- [Protocol Buffers](https://protobuf.dev/)
- [RabbitMQ](https://www.rabbitmq.com/docs)

### 服务器

- [Tencent Cloud Ubuntu](https://cloud.tencent.com/)
- [Docker](https://docs.docker.com/)
- [Nginx](https://nginx.org/en/docs/)

### CI

- [Github Action](https://docs.github.com/zh/actions)

### 测试

- [Github Issus](https://docs.github.com/zh/issues)
- [IShell](https://ishell.cc/zh-CN)
- [Reqable](https://reqable.com/zh-CN/)
- [Jmeter](https://jmeter.apache.org/)

### 跨平台

- [Flutter](https://docs.flutter.cn/get-started/quick)

## [Neko Share]主要功能

### 个人中心

- 用户注册（默认邮箱注册，需要验证邮箱，注册后可绑定手机号）
- 用户个人资料
  - 头像（格式支持jpg/png/webp，文件限制1mb，尺寸裁剪256*256）
  - 名称（默认邮箱前缀，可修改，需要验证敏感词，限制6-16位长度，支持字母数字以及下划线）
- 密码修改（需要验证邮箱/手机号，优先度手机号>邮箱，限制6-16位长度）
- 个人信箱（接收点赞/爱心/关注/评论通知）
- 邮箱通知（接收Neko Share的网站通知，默认关闭）

### 文章发布

### 文件分享

### Live2D

### RSS订阅

## [Neko Share]数据结构

### 用户数据

```sql

s
s
s
s

```

## [Neko Share]Api

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
