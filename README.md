# vue-app-opt-version Demo

## 项目说明

- utils/api.js 自定义axios请求封装
- utils/commom-url.js 请求api地址管理
- utils/rem.js 移动端适配js
- utils/vuex-loading.js 自定义状态管理
- 路由切换动画 + keep alive 动态管理缓存组件
- better-scroll的vue优化
- vue.config.js   vue配置
- postcss.config.js   移动端适配方案配置
- babel.config.js ES6语法兼容处理
- .editorconfig eslint 检验语法配置
- /stores 目录
  - /global 全局状态管理模块
  - /list list页面状态模块 
    
    
## 如何使用

### 克隆或下载项目包
```
git clone git@github.com:lance-yi/vue-app-opt-version.git
```

### 安装依赖 
```
yarn install
```

### 启动项目
```
yarn run serve
```

### 构建项目
```
yarn run build
```

### ESlint 语法规范检测
```
yarn run lint
```

## 鸣谢

> 感谢掘金`@xiaotianyi` 大牛的文档分享参考; 原文地址： [vue 在移动端体验上的优化解决方案](https://juejin.im/post/5cdd2457f265da034e7eb2f9)

项目还带继续优化，目前只是结合文章的一个小demo，后续再逐步整理出一个可用于实际开发的显示初始架构包。

最后提交时间：
- `v1.0`  2019年5月21日17:57:23


