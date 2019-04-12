module.exports = {
  title: "wo-ui 窝窝平台的配套组件",
  description: "wo ui 的使用介绍",
  base: "/",
  theme: "reco",
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    author: "Orialian",
    nav: [
      {
        text: "主页",
        link: "/"
      },
      {
        text: "开始",
        link: "/get-start/"
      },
      {
        text: "组件",
        link: "/components/"
      }
    ],
    sidebar: [
      
      {
        title: "开始",
        collapsable: false,
        children: [
          ["/get-start/", '开始']
        ]
      },
      {
        title: "组件",
        text: '123',
        collapsable: false,
        children: [
          ['/components/main', '主显示区'],
          ['/components/cell-group', '列表组'],
          ['/components/cell', '列表单元'],
          ['/components/button', '按钮'],
          ['/components/action-sheet', '上拉列表'],
          ['/components/color-choose', '颜色选择'],
          ['/components/count', '计数器'],
          ['/components/mode-control', '模式选择'],
          ['/components/progress', '进度条'],
          ['/components/switch', '开关'],
        ]
      }
    ],
    sidebarDepth: 0, // 侧边栏显示2级
    activeHeaderLinks: false, 
  }
};
