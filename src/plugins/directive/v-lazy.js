// 导出插件对象
export default {
    // 安装插件
    install: (app, options) => {
        // 给app实例添加自定义指令
        // el:绑定的dom，binding
        app.directive('lazy', {
            // 在绑定元素的父组件
            // 及他自己的所有子节点都挂载完成后调用
            mounted(el, binding) {
                console.log(el, binding)
                //  创建交叉实例
                const obs = new IntersectionObserver(
                    // 交叉回调
                    (entries) => {
                        entries.forEach((item) => {
                            // 判断是否交叉false
                            if (!item.isIntersecting) {
                                console.log('没有交叉，直接返回')
                                return; //如果没有到交叉，直接返回
                            }
                            // 为img标签时赋值src
                            if (item.target.tagName === 'IMG') {
                                console.log(item)
                                console.log('交叉成功,src赋值')
                                // 交叉为true，执行图片src处理
                                // 将图片标签自定义属性的src赋值给src
                                item.target.src = item.target.dataset.src
                            } else {
                                // 为其他标签时赋值bgi
                                item.target.style.backgroundImage = `url(${item.target.dataset.src})`

                            }
                            // 加载图后卸载侦听
                            obs.unobserve(item.target)
                        })
                    }, {
                    //交叉比率 （每次超出或者小于时触发回调）
                    // 翻译:门槛
                    threshold: 0,
                    // 窗口下方拓展200px
                    rootMargin: '0px 0px 200px 0px'
                }
                )
                //  侦听元素
                obs.observe(el)
            }
        })
    }
}