# VitePress搭建和使用

> 1. 安装vitepress
> 2. 初始化项目
> 3. 启动项目校验项目是否成功
> 4. 项目目录结构

## 安装vitepress

```cmd
npm install -D vitepress
```

## 初始化项目

> 进入指定文件夹下(最好新建一个文件夹)
>
> 执行: `npx vitepress init`
>
> 按照提示进行初始化项目(这里需要注意一点,选择的时候记得typescript那个选项no),如下图
>
> ![vitepress 初始化屏幕截图](https://vitepress.dev/assets/vitepress-init.dfe5638e.png)

## 启动项目

```
mkdir docs	# 后续所有我们自己写的MD文章都放到这个文件夹中
npm run docs:dev
```

执行完成后会看到如下图内容,当然文字内容不一致,是因为我改过了.只要页面没报错就是成功了

![image-20230626215330539](..\imgs\image-20230626215330539.png)

## 项目目录结构

这是官方给出的目录结构不太准确,大致意思就是config.js用于配置

```

├─ .vitepress
│  └─ config.js
├─ api-examples.md
├─ markdown-examples.md
├─ docs  	# 这里新创建一个docs目录用于后续的md文件存放在统一这里
└─ index.md
package.json
```

### 解释.vitepress/config.js内容及作用

1. 首页顶部内容配置

![image-20230626221102365](..\imgs\image-20230626221102365.png)

2. 内容页侧边栏展示配置

![image-20230626222225115](..\imgs\image-20230626222225115.png)

### 解释 index.md 内容

![image-20230626222513701](..\imgs\image-20230626222513701.png)

### 解释 package.json 内容

如果你了解前端相关知识,就会知道文件内容中仅仅定义了如何运行启动项目

![image-20230626222737939](..\imgs\image-20230626222737939.png)

### 其他MD文件示例文档内容看一下就好,这里就不过多赘述了

### 侧边栏分类及展开

```javascript
 // 侧边栏展示内容和跳转路径
    sidebar: [
      {
        text: '1',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'JavaScript Core', link: '/docs/JavaScript-core'},
          { text: 'VitePress 搭建', link: '/docs/VitePress搭建和使用' }
        ]
      },
      {
        text: '2',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'JavaScript Core', link: '/docs/JavaScript-core'},
          { text: 'VitePress 搭建', link: '/docs/VitePress搭建和使用' }
        ]
      },
    ],
```





