function zoom(width) {
    var ratio; //缩放比例
    c_width = document.documentElement.clientWidth;
    ratio = c_width / width;
    document.body.style.cssText = "zoom:" + ratio;
}
window.addEventListener("resize", function() {
    zoom(1280);
}, false);
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        window.scrollTo(0, 1);
    }, 100);
}, false);