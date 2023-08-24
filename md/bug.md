
# bug

## bug列表
- [x] 导航条设置选中效果后，宽度发生变化
- [x] input框自动聚焦会有边框颜色
- [x] 前后端分离项目，服务器明明返回了cookie，为什么我在浏览器端的application中找不到cookie信息，请求也不自动携带cookie
- [x] 导航目录点击目录选中样式显示在上一个目录
- [ ] 在文章内容页面刷新程序崩溃
- [x] 查看文章内容后返回导航列表，仍存在文章导航
- [x] 路由时不回滚到最上方
- [ ] 页面刷新时，顶部路由导航列表直接隐藏
- [ ] 查看文章内容后返回导航列表，大标题仍然显示笔记内容标题，而不是在笔记nav路由应该显示的标题
- [ ] 一些字段验证没有添加
- [x] 使用:style动态绑定样式background-url失败
- [ ] 标签数据出错,变成了一个一个字母
- [ ] 再reactive对象里使用组件报错
- [x] 笔记图片显示错误，全是显示的默认图片
- [x] 请求服务器数据了，但渲染数据显示undefined
- [x] 服务器图片路径错误
- [ ] 标签类别没有为空判断
- [ ] 登录后没有跳转

---
## bug修复
### 导航条设置选中效果后，宽度发生变化
***错误代码：***
```css
.nav-item {
  display: block;
  padding: 0 12px;
  
}

.route-active {
  font-weight: 700;
  border-bottom: solid;
}
```
***Reason:***
由于nav-item设置了padding，选中后设置的weight使文字变粗（变大）影响到了宽度高度的

***Resolve：***
所以将weight去掉即可

```css
.route-active {
  /* font-weight: 700; */
  border-bottom: solid;
}
```

### input框自动聚焦会有边框颜色

***Reason***
是由css的outline属性形成的
***Resolve：***
用伪类聚焦是将outline设为none或其他颜色就行
```css
input:focus {
    outline:none
}
```


### 前后端分离项目，服务器明明返回了cookie，为什么我在浏览器端的application中找不到cookie信息，请求也不自动携带cookie

***reason***
是由于浏览器的跨域方案影响，如果跨域，后端设置了响应头cookie，浏览器也无法保存，即使自定义设置cookie，由于跨域，请求也不能自动携带cookie

***resolve***
**第一种:** 使用反向代理，及配置个同域的服务作为代理服务器，向后端服务请求数据，(因为跨域是浏览器独有的事，服务器之间又没跨域影响)
***vite配置代理服务器:***
```js
server:{
    proxy:{
      // 检测以/proxy开头的请求
      '/proxy': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: true,
        // 将/proxy替换为空字符串
        rewrite: (path) => path.replace(/^\/proxy/, ''),
      },
    }
  }
// 请求数据可以不携带域，
axios.post('/proxy/api/user/login', {
        username:user.username,
        password:user.password
    }, 

```

**第二种:** 需要前后端协同解决，传统的后端直接配置允许源已经无用，因为新版v8需要后端设置cookie的sat...什么字段，然后什么true，还需要是https服务才行，我放弃了



### 导航目录点击目录选中样式显示在上一个目录

***reason***
由于监听滚动索引时，使用offsetTop获取的dom距离顶端的距离存在小数不准确，window.scrollY同样不准确，导致出现的比较有误差
***resolve:***
将不准确的数据进行整数转化，使用math.ceil向上取整

### 查看文章内容后返回导航列表，仍存在文章导航

Reason:
这是由于进入笔记内容路由时，在仓库设置了有关当前笔记的状态，而文章导航和笔记内容路由在同级路由(此时文章导航是通过组件设置的不是同级路由)，只要有数据文章导航就会获取仓库的数据从而展示，所以返回笔记导航列表时，还存在数据，文章导航仍存在
Resolve:
使用嵌套命名路由，让笔记内容显示时文章导航显示，笔记内容消失时文章导航也消失，此时虽然还存在数据，但组件已经不存在了

### 路由时不回滚最上方
Reason:
这是由于路由如果不设置滚动，那点击另一个路由，仍在滚动条的高度
Resolve:
配置路由时添加路由配置滚动回上方

### 使用:style动态绑定样式background-url失败

Reason:
这是由于vue不支持在css外使用url图片路径
Resolve:
需要通过import导入图片，但需要注意，require导入vue不支持

###  标签数据出错,变成了一个一个字母

Reason:
这是由于向服务器传递数据时出错，传成了note[key],formData.append不能直接传入一个数组，
Resolve:
需要把数组转为json,然后后端再将json转为对象再操作

###  再reactive对象里使用组件报错
Reason:
这是由于如果将组件设为响应式会影响性能所以vue发出警告
Resolve:
1. 将该组件设为非响应式即可,使用markRaw等
2. 做一个映射，未知原因动态组件设置:is会将字符串解析为小写而且不会成功将组件引入，那么做一个非响应式即可
```js
const componentReflect = {
    IconBook,
    IconWrite,
    IconSet,
    IconFold,
    IconUnfold
}
```


### 笔记图片显示错误，全是显示的默认图片
Reason:
这是由于使用使用图片是否存在比较时，没有正确的.到属性，而且用来显示图片的style表达式，没有使用响应式数据
Resolve:
.到正确的属性，使用响应式自定义style表达式
 ```js
const stylePic = reactive({
    backgroundImage: `url("${defaultImgSrc}")`
})

if (note.img.isHasImg) {
    stylePic.backgroundImage = `url("${note.img.imgUrl}")`
}
```

### 请求服务器数据了，但渲染数据显示undefined
Reason:
这是由于获取数据更新在渲染后
Resolve:
需要获得是否得到数据的状态，根据状态在模板中使用v-if决定是否渲染

###  服务器图片路径错误
Reason:
这是由于将项目部署到服务器后，返回给前端的图片路径没有使用域名(公网id)
Resolve:
在cofig配置里配置公网域名，用户请求数据时将本地图片路径解析为公网图片资源路径








