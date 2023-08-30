// 节流函数
export function throttle(fn,delay){
    let start = 0
    return function(...args){
        let now = new Date()
        if(now - start > delay){
            start = now
            return fn.apply(this,args)
        } else {
            // console.log('触发事件了也不给执行，触发那么块干嘛?')
        }
    }
}