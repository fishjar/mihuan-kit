# mihuan-kit

通用、易用、强大的可视化
`模型管理`、`文档生成`、`接口代理`、`数据库创建`、`后端代码自动生成`
开发工具包

## 项目目标

- 通用，普遍适用各种开发项目
- 易用，精简配置及依赖，开箱即用
- 强大，包含整套的模型管理、文档生成、接口代理、数据库创建、后端代码自动生成等众多功能
- 可视化，良好的UI操作界面

## 主要功能及模块

- 可视化的操作界面
  - ~~考虑使用`nodejs`+`Electron`/`nw.js`+`react`~~
  - ~~考虑到团队合作的问题，还是做H5（`React`）部署到(局域网)服务器方便，权限问题暂不考虑~~
  - 使用`nodejs`+`Electron`+`react`
  - UI框架优先考虑`Material Design`，或者`Ant Design`
- 项目(网关)管理
  - 依据微服务的划分，每个微服务一个项目，每个网关也是一个项目
- 模型管理
  - 轻易创建修改模型数据，文件存储，不依赖数据库
    - `nedb`
    - `lowdb`
    - 参考`sequelize`数据类型及定义方式
  - 提供部分通用的模型模板，快速修改构建
- 接口管理
  - 自动生成每个模型的增删该查接口，并可以修改
  - 手动添加其他业务接口
  - 接口数据字段可连接至模型的字段
- 文档生成
  - 通过模型配置，及接口配置，自动生成开发文档
  - 提供文档自动部署功能
- 数据库创建
  - 依据模型自动生成数据库表
    - 利用`sequelize`库
  - 可利用mock工具插入模拟数据
- 接口代理
  - 暂未找到合适第三方框架，考虑自己用KOA实现一个(或许也可以利用`webpack`的代理功能)
  - 代理数据来源分：
    - 基于文档，可配置mock数据
    - 基于远程接口，纯代理模式
    - 基于数据库数据，直接对接数据库
      - `sequelize-restful`已停止维护
      - `xmysql`
  - 依据模型自动生成模型的增删改查接口
  - 可自定义接口，可调用其他接口，对数据处理并重包装
- 模拟数据自动生成
  - 整合`mock.js`
- 后端代码自动生成
  - 依据模型自动生成合乎规范的后端增删改查代码
    - `java`生成`Spring boot`代码
    - `python`生成`flask`或`django`代码
    - `nodejs`生成`express`、`koa`或`eggjs`代码
  - 接口自动测试
