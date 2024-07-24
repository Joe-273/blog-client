## Avatar

![image-20240723175835969](C:\Users\Qihao\AppData\Roaming\Typora\typora-user-images\image-20240723175835969.png)

头像组件

### 属性

| 属性名  | 含义               | 类型   | 必填 | 默认值 |
| ------- | ------------------ | ------ | ---- | ------ |
| imgUrl  | 组件的url地址      | String | 是   | 无     |
| imgSize | 图像的大小（宽高） | Number | 否   | 150    |

----------------------



## Icon

![image-20240725001313949](C:\Users\Qihao\AppData\Roaming\Typora\typora-user-images\image-20240725001313949.png)

图标组件  来自[ 阿里巴巴矢量库 ]

### 属性

| 属性名 | 含义     | 类型   | 必填 | 默认值 |
| ------ | -------- | ------ | ---- | ------ |
| type   | 图标类型 | String | 是   | 无     |

------------------------------------



## Pager

![image-20240723180028351](C:\Users\Qihao\AppData\Roaming\Typora\typora-user-images\image-20240723180028351.png)

分页组件

### 属性

| 属性名        | 含义             | 类型   | 必填 | 默认值 |
| ------------- | ---------------- | ------ | ---- | ------ |
| current       | 当前页码         | Number | 否   | 1      |
| total         | 总数据量         | Number | 否   | 0      |
| limit         | 每页包含的数据量 | Number | 否   | 10     |
| visibleNumber | 可见的页码数量   | Number | 否   | 10     |

### 事件

| 事件名      | 含义     | 事件参数          | 参数类型 |
| ----------- | -------- | ----------------- | -------- |
| pageChanged | 页码变化 | 新的页码(newPage) | Number   |

-----------------



## Empty

该组件在外层容器中横向纵向都居中

### 属性

| 属性名 | 含义       | 类型   | 必填 | 默认值   |
| ------ | ---------- | ------ | ---- | -------- |
| text   | 显示的文本 | String | 否   | "无数据" |

--------------------------



## ImageLoader

从开始时：![image-20240723180402529](C:\Users\Qihao\AppData\Roaming\Typora\typora-user-images\image-20240723180402529.png)

到过渡结束：![image-20240723180434972](C:\Users\Qihao\AppData\Roaming\Typora\typora-user-images\image-20240723180434972.png)

该组件实现一个渐进式图片的效果

### 属性

| 属性名      | 含义                                                 | 类型   | 必填 | 默认值 |
| ----------- | ---------------------------------------------------- | ------ | ---- | ------ |
| src         | 原始图片的路径                                       | String | 是   | 无     |
| placeholder | 原始图片加载完成前的占位图片                         | String | 是   | 无     |
| duration    | 原属图片加载完成后，切换到原始图片经过的时间（毫秒） | Number | 否   | 500    |

### 事件

| 事件名 | 含义                   | 事件参数 | 参数类型 |
| ------ | ---------------------- | -------- | -------- |
| loaded | 原始图片加载完成后触发 | 无       | 无       |

-----------------



## Contact

![image-20240724005925539](C:\Users\Qihao\AppData\Roaming\Typora\typora-user-images\image-20240724005925539.png)

![image-20240724005947489](C:\Users\Qihao\AppData\Roaming\Typora\typora-user-images\image-20240724005947489.png)

这个组件横向撑满容器，背景透明

### 数据描述

```js
{
	iconType: "Icon组件的类型",
    imgUrl: "鼠标悬停出现的图片的地址, 如果为空则不出现浮窗",
	href: "点击后跳转到的链接，如果为空则不跳转"
}
```



```js
 itemArray: [
        {
          iconType: "qq",
          imgUrl: "",
          href: "",
        },
        {
          iconType: "wechat",
          imgUrl: "",
          href: "",
        },
        {
          iconType: "github",
          imgUrl: "https://picsum.photos/161",
          href: "https://github.com/Joe-273?tab=repositories",
        },
        {
          iconType: "email",
          imgUrl: "https://picsum.photos/245",
          href: "mailto:Qihaowei.273@Outlook.com",
        },
      ],
```

-----------------------



## Menu

![image-20240724010549424](C:\Users\Qihao\AppData\Roaming\Typora\typora-user-images\image-20240724010549424.png)

这个组件横向撑满容器，背景透明

每个菜单的信息如下：

> **首页**
>
> 链接地址：/
>
> 选中条件：路径等于 /
>
> **文章**
>
> 链接地址：/blog
>
> 选中条件：路径以`/blog`开头
>
> **关于我**
>
> 链接地址：/about
>
> 选中条件：路径等于`/about`
>
> **项目&效果**
>
> 链接地址：/project
>
> 选中条件：路径等于`/project`
>
> **留言板**
>
> 链接地址：/message
>
> 选中条件：路径等于`/message`

-------------



## SiteAside

![image-20240724010453391](C:\Users\Qihao\AppData\Roaming\Typora\typora-user-images\image-20240724010453391.png)

网站侧边栏

宽高撑满外层容器

