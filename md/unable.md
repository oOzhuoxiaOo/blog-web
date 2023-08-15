## 查漏补缺

### 为什么ref状态作为reactive状态的属性时，访问、修改可以不用加.value
***解决方案***：
是由vue添加的特性，当ref状态作为reactive状态的属性时，访问该属性会自动解包，就像在插值语法中一样
```js
const count = ref(1)
const state = reactive({
  count
})
// 访问
state.count

```
***tip：***
在pinia中，定义了ref状态，在组件中使用时pinia时，返回的是组合式函数，使用时，返回的是一个封装后的reactive实例，定义的ref状态可以 实例.count 访问，而无需加value


### 无法按需导入模块
***错误代码:*** 
```js
// 导出
export default {
    useCheckUserName,
    useCheckPwd,
    useCheckConfirmPwd
}

// 导入
import { useCheckUserName ,useCheckPwd } from "../hooks/useCheck.js";
```
***解决方案:***

- 默认导出需要导入接收全部，使用分别导出即可
```js
export function useCheckUserName(_username){
    return _username
}
export function useCheckPwd(_password){
  return  _password.length >= 6 && _password.length <= 20
}
export function useCheckConfirmPwd(_password,_confirmPwd){
    return _password == _confirmPwd
}

```


### es6和es5模块化区别理解
- 导入导出方式不同
- 静态和动态导入
  - es5：动态导入，运行时加载
  - es6：静态导入，编译时就会被加载
- 导入和导出的性能
  - es5，更耗性能
  - es6
- 模块化支持的环境
  - es5，nodejs后端
  - es6，前端后端都支持

### 为什么导出的响应式对象，可以共享数据
- 因为导出的是一个对象，变量存储的为实际数据的引用，也就是说不同组件导入的store对象，指向的是同一个堆中的数据

### css如何实现裁剪区域
***解决方案：***
使用clip-path样式，polygon函数绘制图像
```css
 clip-path: polygon(0 0,90% 0,100% 100%,0 100%);
```




### js的数据类型
基本类型
引用(对象类型)


### date日期对象为什么能进行大小比较
由于隐式转换原则，date日期对象进行比较时,会通过valueOf转换为毫秒进行比较


### div宽度如何根据内容调整大小
display:inline-block

### 鼠标悬浮如何令background放大
需要设置background-size属性，而且属性值类型要为同类型，比如100% 120%可以，而cover 120%不可以

### svg图标如何设置颜色
1. 通过file属性在标签里直接设置
2. 通过类名设置，给svg或者svg上级元素类名添加属性file(注意svg此时不能有内联file属性，如果想要继承颜色则组件不能设置组件样式隔离)


### 向服务器传递数据时，传递的为proxy类型数组，后端body-parse解析失败，解析为了tags[]:[]等
传递数据时将数据转为JSON格式,使用JSON.stringify

### json格式数据无法使用.map方法
转为对象使用
JSON.parse()

### []和{}在判断语句中
判断语句中为true

### 如何判断一个对象是否拥有一个属性
1. obj.hasOwnProperty('<属性名>')
2. Object.hasOwn(<对象>,'对象名')
3. if(obj.<属性名> !== undefined)


### 动态渲染组件的方式
使用<component :is='<组件或者组件名>' />

### 禁用文本选中
css
```css
p {
  user-select:none;
}
```


### a标签颜色之类继承方案
```css
a {
  color:inherit
}
```