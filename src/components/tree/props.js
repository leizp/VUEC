export default [
  {
    child: [
      {
        id: 0,
        sex: 1, // 性别
        name: '父亲', // 姓名
        portrait: '', // 头像
        title: 1,
        child: [
          {
            id: 2,
            sex: 1, // 性别
            name: '儿子', // 姓名
            portrait: '', // 头像
            title: 2,
            child: [
              {
                id: 4,
                sex: 1, // 性别
                name: '孙子', // 姓名
                portrait: '', // 头像
                title: 3,
                child: [
                  {
                    id: 4,
                    sex: 1, // 性别
                    name: '孙子1', // 姓名
                    portrait: '', // 头像
                    title: 3,
                    child: [],
                    spouse: []
                  }, {
                    id: 5,
                    sex: 2, // 性别
                    name: '孙女1', // 姓名
                    portrait: '', // 头像
                    title: 3,
                    child: [],
                    spouse: []
                  }
                ],
                spouse: []
              }, {
                id: 5,
                sex: 2, // 性别
                name: '孙女2', // 姓名
                portrait: '', // 头像
                title: 3,
                child: [
                  {
                    id: 4,
                    sex: 1, // 性别
                    name: '孙子3', // 姓名
                    portrait: '', // 头像
                    title: 3,
                    child: [],
                    spouse: []
                  }, {
                    id: 5,
                    sex: 2, // 性别
                    name: '孙女', // 姓名
                    portrait: '', // 头像
                    title: 3,
                    child: [],
                    spouse: []
                  }
                ],
                spouse: []
              }
            ],
            spouse: []
          }, {
            id: 3,
            sex: 2, // 性别
            name: '女儿', // 姓名
            portrait: '', // 头像
            title: 2,
            child: [],
            spouse: []
          }
        ],
        spouse: [{
          id: 2,
          sex: 2, // 性别
          name: '母亲', // 姓名
          portrait: '', // 头像
          title: 1
        }]
      }
    ]
  }
]
