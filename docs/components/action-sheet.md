---
title: action-sheet
isCategories: true
---

# action-sheet 上拉列表

::: warning
如果 title 为空, 将默认不展示标题. 不支持多选
:::

## 代码演示

用法

```html
<wo-action-sheet title="诗人" active-color="red" overlay></wo-action-sheet>
```

```js
// 查找元素节点
let actionEle = document.querySelector("wo-action-sheet");
// 设置 展示列表 并 将第一项设置为默认选中项,
// 如果有多个 selected 为true,则最后一个选中项为默认选中项, 并重置其它项
actionEle.lists = [
  {
    name: "李白",
    selected: true
  },
  {
    name: "杜甫",
    selected: false
  }
];
```

## Properties 属性

| 属性名      | 说明           | 类型          | 默认值   |
| ----------- | -------------- | ------------- | -------- |
| title       | 标题           | `string`      | -        |
| titleSize   | 标题字体大小   | `string`      | -        |
| overlay     | 支持遮罩层关闭 | `boolean`     | `true`   |
| activeColor | 激活项文字颜色 | `string`      | `normal` |
| lists       | 列表数据       | `Array<item>` | `[ ]`      |
| - item      | 列表项         | `object`      | -        |
| -- name     | item 属性项    | `string`      | -        |
| -- selected | item 属性项    | `boolean`     | -        |
| -- ...      | item 属性项    | \*            | -        |

## Events

| 事件名   | 说明                       | 参数                    |
| -------- | -------------------------- | ----------------------- |
| `change` | 对外提供数据变化的事件响应 | `current`,`index`,`all` |
