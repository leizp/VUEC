## 家谱类树形递归组件

> 实例图

![Image text](./demo.jpg)

* 特别说明，调用此组件，需要 vue-bus插件支持


> props： nodeData ，如：
```bash
  {
    child: [
      {
        id: 0,
        sex: 1, # 性别
        name: '父亲', # 姓名
        portrait: '', # 头像
        title: 1,
        child: [
          {
            id: 2,
            sex: 1, # 性别
            name: '儿子', # 姓名
            portrait: '', # 头像
            title: 2,
            child: [
              {
                id: 4,
                sex: 1, # 性别
                name: '孙子', # 姓名
                portrait: '', # 头像
                title: 3,
                child: [],
                spouse: []
              }, {
                id: 5,
                sex: 2, # 性别
                name: '孙女', # 姓名
                portrait: '', # 头像
                title: 3,
                child: [],
                spouse: []
              }
            ],
            spouse: []
          }, {
            id: 3,
            sex: 2, # 性别
            name: '女儿', # 姓名
            portrait: '', # 头像
            title: 2,
            child: [],
            spouse: []
          }
        ],
        spouse: [{
          id: 2,
          sex: 2, # 性别
          name: '母亲', # 姓名
          portrait: '', # 头像
          title: 1
        }]
      }
    ]
  }
```

>scss 变量说明

```bash
$titleBakColor: #b1b1b1; # 标题背景色
$treeNodeBorder: solid 1px seagreen; # 父元素边框
$treeBorderColor: seagreen; # 连线边框
$itemBackgroundColor: #fff; # 节点基础背景色
$spouseBorder: solid 1px pink; # 母系边框背景色

```

>events: tap-father(e),tap-mather(e)

```bash
  @tap-father(e) #点击男性节点出发事件，参数返回此节点信息
  @tap-mather(e) #点击女性节点出发事件，参数返回此节点信息
```
