## 九宫格组件

> props 说明

| name         | type   | value    |  explain    |
| --------     | -----: | :----:   | :----:      |
| gridItemData | Object |  {title/link/src/index} |  配置项  |
|  max          | Number | 5                     |  每行显示的个数 |

>gridItemData说明

| name         | type   | value    |  explain    |
| --------     | -----: | :----:   | :----:      |
| title        | String | 标题 |   标题  |
| link         | String | /path | 需要跳转页面的路径  |
| src          | String | ../images/  |   图标  |

> events

| name         | params | explain     |
| --------     | -----: | :----:      |
| 'on-click    | value  |   点击事件   |

> sass变量说明

| name               | default                  |   explain      |
| --------           |  -----:                  | :----:        |
|$grid-item-padding  | px2rem(10px) px2rem(5px) | 九宫格上下左右padding值 |
|$font-size           | px2rem(14px)            | 标题字体大小  |
|$grid-item-hover-background-color|  #f9f0a4  | 点击时的背景色  |
|$gird-item-img-width| px2rem(60px)  | 图标宽度  |

> code

```bash
    <gird >
      <girditem v-for="item in list" :key="item.index" :max="4" :gridItemData="item"></girditem>
    </gird>
```
