# API 文档

## 1. 认证接口

### 1.1 登录接口

- **URL**：`/api/auth/login`
- **方法**：POST
- **参数**：
  - `email`：用户邮箱
  - `password`：用户密码
- **返回**：
  - `token`：JWT令牌
  - `user`：用户信息

### 1.2 注册接口

- **URL**：`/api/auth/register`
- **方法**：POST
- **参数**：
  - `name`：用户名
  - `email`：用户邮箱
  - `password`：用户密码
- **返回**：
  - `id`：用户ID
  - `name`：用户名
  - `email`：用户邮箱

## 2. 用户接口

### 2.1 获取用户信息

- **URL**：`/api/users/me`
- **方法**：GET
- **Headers**：
  - `Authorization`：Bearer <token>
- **返回**：用户信息

### 2.2 更新用户信息

- **URL**：`/api/users/me`
- **方法**：PUT
- **Headers**：
  - `Authorization`：Bearer <token>
- **参数**：
  - `name`：用户名
  - `email`：用户邮箱
- **返回**：更新后的用户信息

## 3. 其他接口

- **URL**：`/api/health`
- **方法**：GET
- **返回**：健康状态
