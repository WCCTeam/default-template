/************************************
 Use for:         yhkd.99/m
 Version:         1.0
 Date:            2019-07-16
 Author:          php
 Employee number: 206742
 Update:
 *************************************/
var demo = (function() {
    var $tip = $('.tip');
    var init = function() {
            tipFn('horizontal');
        },
        //魔窗判断
        mLinkFn = function() {
            //只有1个按钮的时候，传按钮id或者数组中只有一个按钮id两种方式都可以
            deepLink.init('downloadBtn1', '', '');
            deepLink.init(['downloadBtn1'], '', '');
            //超过1个按钮需要点击唤起客户端的时候，第1个参数必须以数组的形式
            deepLink.init(['downloadBtn1', 'downloadBtn2'], '', '');
        },
        /*
         * 下载按钮布点监控
         **/
        trackDownloadFn = function($id, des, event, sec1, sec2, sec3, sec4) {
            if (ua.weChat) {
                $id.on('touchend', function() {
                    if (ua.ios) {
                        _hmt.push(['_trackEvent', des, event, sec1]);
                    } else {
                        _hmt.push(['_trackEvent', des, event, sec2]);
                    }
                });
            } else {
                if (ua.android) {
                    $id.onclick = function() {
                        _hmt.push(['_trackEvent', des, event, sec3]);
                    };
                } else {
                    $id.onclick = function() {
                        _hmt.push(['_trackEvent', des, event, sec4]);
                    };
                }
            }
        },
        /*
         * 普通按钮布点监控
         **/
        trackSecFn = function($id, des, event, sec) {
            $id.on('touchend', function() {
                _hmt.push(['_trackEvent', des, event, sec]);
            });
        },
        //百度布点监控调用
        trackEventFn = function() {
            trackDownloadFn(
                $('.btn-1'),
                'XXX页面-XX下载按钮',
                '点击',
                '下载按钮(iOS-微信)',
                '下载按钮(Android-微信)',
                '下载按钮(Android)',
                '下载按钮(iOS)'
            );
            trackDownloadFn(
                $('.btn-2'),
                'XXX页面-XX下载按钮',
                '点击',
                '下载按钮(iOS-微信)',
                '下载按钮(Android-微信)',
                '下载按钮(Android)',
                '下载按钮(iOS)'
            );
            trackSecFn($('.btn-3'), 'XXX页面-XX按钮', '点击', 'XX按钮');
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
                        direction == 'horizontal'
                            ? $tip.addClass('hide')
                            : $tip.removeClass('hide');
                    }
                    if (window.screen.width > window.screen.height) {
                        direction == 'horizontal'
                            ? $tip.removeClass('hide')
                            : $tip.addClass('hide');
                    }
                } else if (isIOS) {
                    if (window.orientation == 90 || window.orientation == -90) {
                        //横屏
                        direction == 'horizontal'
                            ? $tip.removeClass('hide')
                            : $tip.addClass('hide');
                    } else {
                        //竖屏
                        direction == 'horizontal'
                            ? $tip.addClass('hide')
                            : $tip.removeClass('hide');
                    }
                }
            };
            window.addEventListener('resize', orientationChange, false);
            orientationChange();
        };
    return {
        init: init
    };
})();
