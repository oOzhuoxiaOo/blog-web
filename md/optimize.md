## 优化
- [x] 优化仓库md代码结构















### 优化仓库md代码结构
将数据统一放入state中，然后返回出时拓展出来
源代码
```js

```
优化后
```js
export const useMdStore = defineStore('markdown',()=>{
    const state = {
        title : ref(''), //当前标题
        chapterDomArr : ref(''), //目录DOM元素nodedlist
        chapterArr : ref([]), //目录加工nodeList得到的数组包含自定义对象
        chapterIdx : ref(''), //当前激活的目录idx索引
        currentPage : ref(1), //当前页数
        notesData : ref([]),
        isHideFoot : ref(false),
        meInfo : ref({}),
        meInfoLoaded : ref(false),
    }
    // 请求笔记相关信息
    function getNotes(_query = {pageWhich:1,pageNum:10}){
        //省略...
    }
    // 请求个人相关信息
    async function getMeInfo(){
        //省略...
    }
    return {
        ...state,
        getNotes,
        getMeInfo,
        
    }
})
```