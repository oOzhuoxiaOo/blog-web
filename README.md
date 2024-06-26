## 功能模块
1. 公共模块
    - [x] 顶部导航路由
      - [x] 下拉显示隐藏路由导航
      - [x] 路由配置
    - [x] 页脚
    - [ ] 标题配置
2. 首页
    - [ ] 下拉功能
    - [ ] 动画交互 
3. 笔记
    - [x] 笔记
      - [x] 笔记导航
        - [ ] 笔记图片展示
      - [ ] 文章内容展示
        - [x] 日期
        - [x] 标签
        - [x] 分类
        - [x] 文章内容
      - [x] 文章目录
    - [ ] 个人信息卡片
        - [ ] 头像
        - [ ] 笔记总览
    - [ ] 分类
      - [ ] 所有标签
      - [ ] 所有分类
      - [ ] 展示对应笔记数据
4. 后台管理
    - [x] 登录注册
    - [x] 发布笔记
        - [x] 添加标签
        - [x] 添加md笔记内容
        - [x] 添加类别
        - [x] 添加标题
        - [x] 添加笔记描述
        - [x] 添加笔记图片

        - [ ] 提交数据  
    - [ ] 查看笔记
    - [ ] 更新笔记
    - [ ] 删除笔记
    - [ ] 友情链接
    - [ ] 评论管理
5. 拓展
    - [ ] 响应式布局
    - [ ] 黑夜模式
    - [ ] 优化窗口滚动减少性能损耗
    - [x] 滚动条配置
    - [ ] 自定义主题配置
6. 优化
    - [ ] 优化发布时间
    - [ ] 优化更新时间
    - [ ] 优化md代码
    - [ ] 登录权限认证
    - [x] 路由懒加载
    - [x] 图片懒加载
    - [x] 滚动事件节流优化
    - [ ] 移动端适配
    - [ ] 登录跳转
    - [x] 使用less管理css
    - [x] 翻页功能优化
      - [ ] 回到顶部
      - [ ] 按需展示上一页下一页
      - [ ] 根据文章数量显示几页
    -  [ ] 动画效果添加
      - [ ] 下拉到位置触发动画
    - [ ] 友情链接页面
    - [ ] 搜索笔记功能
    - [ ] 关于
    - [ ] 归档优化
    - [ ] 加载资源时动画
    - [ ] 优化消息提示
      - [ ] 使用elementUi
- [ ] Bug
  - [ ] 笔记悬浮动画失效

  
---
## 功能实现


### 选择笔记页和选择下一页功能实现
前端：
1. 配置选择页导航结构
2. 给页item添加事件
    事件：请求选择页数据
3. 给下一页添加事件
    事件：请求选择页数据
后端：
根据请求笔记的query参数，读取数据进行条件约束，根据选择页数例如跳转数据数，根据一页数据数截取对应数据


### 文章导航实现
实现大致流程
- 数据集中管理
  - 使用pinia管理共享数据，
- 目录结构获取渲染
  - 使用ref获取到文章dom，将dom进行数组转化和加工生新的自定义数组渲染对象，数组项包含标题内容和标题等级，有了渲染数组后在模板使用v-for遍历生成目录结构
- 给绑定目录项绑定导航事件
  - 给每个目录项绑定导航事件，点击时导航到对应目录内容，过程：根据点击索引项确定对应目录内容dom，获取dom使用scrollIntoView方法平滑到对应视口
- 目标目录样式激活
  - 给window绑定滚动监听事件，反向数组遍历domlist，当滚动距离大于dom距顶端高度时，退出循环并且更新目录索引，使用pinia管理当前目录索引，根据索引在目录dom使用:class 设置激活目录





## 优化