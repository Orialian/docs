---
title: button
isCategories: true
---

# button 按钮

## 代码演示

基础用法

```html
<wo-button>相见时难别亦难</wo-button>
```

设置按钮类型

```html
<wo-button type="primary">东风无力百花残</wo-button>
```

设置为幽灵按钮

```html
<wo-button plain>春蚕到死丝方尽</wo-button>
```

设置按钮形状

```html
<wo-button shape="round">蜡炬成灰泪始干</wo-button>
```

## Properties 属性

| 属性名      | 说明                                                 | 类型      | 默认值    |
| ----------- | ---------------------------------------------------- | --------- | --------- |
| type        | 类型, 可选值: `primary`, `info`, `danger`, `warning` | `string`  | `default` |
| plain       | 幽灵按钮                                             | `boolean` | `false`   |
| size        | 按钮尺寸, 可选值: `small`, `large`                   | `string`  | `normal`  |
| disabled    | 是否禁用                                             | `boolean` | `false`   |
| shape       | 按钮形状, 可选值: `square`, `round`                  | `string`  | -         |
| color       | 文字颜色                                             | `string`  | -         |
| background  | 按钮背景                                             | `string`  | -         |
| borderColor | 边框颜色                                             | `string`  | -         |

## Events

| 事件名    | 说明                           | 参数                 |
| --------- | ------------------------------ | -------------------- |
| `clicked` | 对外提供 click 的事件响应      | `disabled`,`clicked` |
| `touched` | 对外提供 touchStart 的事件响应 | `disabled`,`touched` |
