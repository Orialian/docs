---
title: color-choose
isCategories: true
---

# color-choose 颜色选择

## 代码演示

用法

```html
<wo-color-choose size="14px" active-color="red"></wo-color-choose>
```

```js
// 查找元素节点
let colorEle = document.querySelector("wo-color-choose");
// 设置 属性值
colorEle.lists = [
  {
    name: "黄色",
    color: "yellow",
    selected: true
  },
  {
    name: "红色",
    color: "red",
    selected: false
  },
  {
    name: "绿色",
    color: "green",
    selected: false
  },
  {
    name: "蓝色",
    color: "#09f",
    selected: false
  }
];
```

## Properties 属性

| 属性名      | 说明             | 类型          | 默认值 |
| ----------- | ---------------- | ------------- | ------ |
| activeColor | 激活时的光环颜色 | `string`      | `#09f` |
| size        | 尺寸             | `string`      | `12px` |
| lists       | 颜色数组         | `Array<item>` | `[ ]`  |
| item        | 颜色数组项       | `object`      | -      |
| --name      | 当前颜色的标识   | `string`      | -      |
| --color     | 背景颜色         | `string`      | -      |
| --selected  | 是否被选中       | `boolean`     | -      |
| -- ...      | item 属性项      | \*            | -      |

## Events

| 事件名   | 说明                         | 参数                    |
| -------- | ---------------------------- | ----------------------- |
| `change` | 对外提供激活项改变的事件响应 | `current`,`index`,`all` |
