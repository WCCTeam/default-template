/*
 * Author: candy(930227)
 * Version: 0.1.0
 * Compile Date: 2018-01-23 15:49
*/ 
function zoom(width) {
    var ratio;//缩放比例
    var layoutWidth = document.documentElement.clientWidth;// layout viewport
    ratio = layoutWidth / width;
    document.body.style.cssText = "zoom:" + ratio;
    //计算target-densitydpi数值
    var phoneWidth = parseInt(window.screen.width);
    var dpi = width / phoneWidth * window.devicePixelRatio * 160;
    var viewportMeta = document.querySelector("meta[name='viewport']");
    viewportMeta.content = viewportMeta.content + ', target-densitydpi=' + dpi;
}