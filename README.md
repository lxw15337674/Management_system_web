# 仓库管理系统

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

###  启动前端数据接口（前后端分离）at localhost:8090/api/
npm run mock

### Run your unit tests
```
npm run test:unit
```


## 项目组织架构
>├─ index.html  
>├─ package.json // 配置文件  
>├─ README.md // 说明文件  
>├─ build // mock配置文件  
>├─ mock  // mock前后端分离实现的数据接口  
>├─ vue.config.js // webpack打包配置文件  
>├─ public // 静态不打包文件夹 
>├─ src   
>│　　├─ main.js // webpack入口/项目启动入口  
>│　　├─ rest-api // 存放api接口文件，服务层   
>│　　├─ assets // 存放私有系统的公共样式、脚本、图片  
>│　　├─ router  // 存放vue-router路由   
>│　　├─ views // 视图  
>│　　├─ vuex // vuex

