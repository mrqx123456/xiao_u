


window.onload = function(){
    // 根据屏幕的宽度来动态的设置rem
var deviceWidth = document.documentElement.clientWidth;
//rem 不是固定单位 1rem等于html的字体大小16px(html的字体的大小 固定是16px)
// 主要做不同移动端的适配



// 750可以根据实际设计宽度进行修改
if (deviceWidth > 750) {
    deviceWidth = 750;
}
//假设设计稿的宽为750px,字体大小为100px ,未知的设备宽为 deviceWidth，求未知设备的字体大小
// 1rem =100px html的font-size
/**
 * deviceWidth  / document.documentElement.style.fonSize ==  750  /  100
 * 
 * 假设设备宽变大了，字体也跟着变大
 */

document.documentElement.style.fontSize = deviceWidth / 7.5  + 'px'
}