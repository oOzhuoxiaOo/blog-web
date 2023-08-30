export const useBackTop = function(behavior = 'auto'){
    window.scrollTo({
        top:0,
        behavior,
    })
}