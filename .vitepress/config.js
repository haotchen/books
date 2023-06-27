import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web开发",
  description: "Learning front-end development",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // 多个按钮添加多个
      { text: 'Home', link: '/' },
    ],

    // 侧边栏展示内容和跳转路径
    sidebar: [
      {
        text: 'VitePress搭建',
        collapsible: true,
        collapsed: true,
        items: [

          { text: 'VitePress搭建和使用', link: '/docs/VitePress搭建和使用' }
        ]
      },
      {
        text: 'JavaScript',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'JavaScript Core', link: '/docs/JavaScript核心'}

        ]
      },
      {
        text: 'Ajax网络编程',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Ajax网络编程', link: '/docs/Ajax网络编程' }
        ]
      },

      {
        text: 'Node.js',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Node.js', link: '/docs/Node-js' }
        ]
      },
    ],

    socialLinks: [
      // 多个链接地址添加多个
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
