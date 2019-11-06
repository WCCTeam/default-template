/************************************
 Use for:         lol.99/m
 Version:         1.0
 Date:            2019-10-23
 Author:          php
 Employee number: 206742
 Update:
 *************************************/
var demo = (function() {
    var $tip = $(".tip");
    var init = function() {
            tipFn('horizontal');
        },
        /*手机横竖屏提示
         *@direction：横屏提示or竖屏提示 'horizontal'|'vertical'
         */
        tipFn = function(direction) {
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            var orientationChange = function() {
                if (isAndroid) {
                    if (window.screen.width < window.screen.height) {
                        direction == 'horizontal' ? $tip.addClass("hide") : $tip.removeClass("hide");
                    }
                    if (window.screen.width > window.screen.height) {
                        direction == 'horizontal' ? $tip.removeClass("hide") : $tip.addClass("hide");
                    }
                } else if (isIOS) {
                    if (window.orientation == 90 || window.orientation == -90) {
                        //横屏
                        direction == 'horizontal' ? $tip.removeClass("hide") : $tip.addClass("hide");
                    } else {
                        //竖屏
                        direction == 'horizontal' ? $tip.addClass("hide") : $tip.removeClass("hide");
                    }
                }
            };
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orientationChange, false);
            orientationChange();
        };
    return {
        init: init
    }
})();
