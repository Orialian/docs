---
title: 开始
---

::: tip
这是一套基于 WebComponent 的组件, 可以在 html 文件中直接引入使用.
:::

资源引入

```html
// 引入 css
<link rel="stylesheet" href="http://tobefree.top/wowo/wowo.css" />
// 引入 js
<script src="http://tobefree.top/wowo/wowo.js"></script>
```

事件监听
```js
Element.addEventListener('EventName', function(e) {
    let data = e.detail // 获取事件的返回参数对象
    /**
    * your code
    */
})
```