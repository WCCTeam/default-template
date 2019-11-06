/************************************
 Use for:         yhkd.99.com/m/
 Version:         1.0
 Date:            2018-05-24
 Author:          php
 Employee number: 206742
 Update:
 *************************************/
var heroSkin = (function() {
    var $closeBtn = $(".close-btn");
    var vid = '520挚爱皮肤甜蜜上线';  //每个页面vid不一样，按标题取吧！！
    var shareData = {   //分享文案
        imgurl: "https://img4.99.com/yhkd/image/m/act/2018/520/icon-share.png",
        title: '520挚爱皮肤甜蜜上线',
        url: 'https://yhkd.99.com/m/act/2018/520/share.shtml?t=',  //分享落地页地址或者竖版
        content: '参与分享即可获得积分礼包，还有丘比特眼位特效限时送等更多甜蜜活动来袭！'
    };
    var init = function() {
        //调用客户端分享弹窗
        share.init(vid, shareData);
        //关闭btn
        $closeBtn.on("touchend", function(e) {
            e.preventDefault();
            var $this = $(this);
            $this.closest(".pop-box").removeClass("show");
        });
        //视频点击统计
        $(".video-btn").on("touchend", function(e) {
            e.preventDefault();
            //share.videoStatisticsFn(vid, alltype, type);
            //@alltype: 全部视频目前支持10个（XX|XX|XX|XX|XX）
            //@type:视频类型 类型（具体点击的视频名称）
            share.videoStatisticsFn(vid, '大逃杀|宙斯|金甲神王|龙舟少年|端午节击杀特效','宙斯');
        });
    };
    return {
        init: init
    }
})();
heroSkin.init();