function zoom(width,id) {
    var ratio; //缩放比例
    c_width = document.documentElement.clientWidth;
    ratio = c_width / width;
    if(id){
    	document.getElementById(id).style.cssText = "zoom:" + ratio;
    }else{
    	document.body.style.cssText = "zoom:" + ratio;
    }
}
window.addEventListener("resize", function() {
    zoom(750);
}, false);
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        window.scrollTo(0, 1);
    }, 100);
}, false);