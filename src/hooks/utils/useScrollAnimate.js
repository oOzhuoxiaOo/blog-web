import { onMounted, watch, nextTick } from "vue";

export const useScrollAnimate = function () {

    // 监视的数组变化
    /**
     * 
     * @description: 传入监视对象和约束配置，开启动画功能
     * @param {Array} watchArr 监视的数组
     * @param {Object} ops 配置 
     * @return {void} 
     */
    function start(watchArr, ops) {
        if (!ops) {
            ops = {
                // 添加激活动画类名数组
                activeClass: [],
                threshold: 0.5
            }
        }

        // 回调
        let obsCallBack = (entries) => {
            entries.forEach((item) => {
                // 判断是否交叉false
                if (!item.isIntersecting) {
                    console.log("没有交叉，直接返回");
                    return; //如果没有到交叉，直接返回
                }
                console.log("给我执行啊");
                // 处理样式（添加童话类名
                item.target.classList.add(...ops['activeClass']);
                item.target.style.visibility = "visible";
                // 后卸载侦听
                obs.unobserve(item.target);
            });
        };

        // 配置
        let obsOptions = {
            //交叉比率 （每次超出或者小于时触发回调）
            // 翻译:门槛
            threshold:ops.threshold,
            // 窗口下方拓展,
        };

        // 交叉实例
        let obs = new IntersectionObserver(
            // 交叉回调
            obsCallBack,
            obsOptions
        );


        watch(
            watchArr,
            async (newVal, oldVal) => {
                // 等待dom更新
                await nextTick();
                // 隐藏所有元素先
                newVal.forEach((el) => {
                    el.style.visibility = "hidden";
                    el.classList.remove(...ops['activeClass']);
                });
                newVal.forEach((el) => {
                    obs.observe(el);
                });
            },
            {
                immediate: true,
                deep: true,
            }
        );
    }

    return {
        start
    }
};
