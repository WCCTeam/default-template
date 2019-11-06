var func = (function () {
    var $close = $('.close'),
        $rule = $('#rule'),
        $ruleTc = $('#ruleTc');

    var init = function () {
        $close.on("click", function (e) {
            e.preventDefault();
            $(this).closest(".pop").removeClass("show");
        });

        $rule.on("click", function (e) {
            e.preventDefault();
            $ruleTc.addClass("show");
        });

        // methods.swiper();
        // methods.nicescroll();
        methods.tabChange('#tabBtn', '.m1-2-m', '.m');
        methods.tabChange('#tab', '.main', '.main-content');
    };

    var methods = {
        tabChange: function (tab, tabCont, tabCell) {
            $(tab).on('click', 'a', function (e) {
                e.preventDefault();
                var index = $(this).index();
                $(this).addClass('focus').siblings().removeClass('focus');
                $(tabCont).find(tabCell).eq(index).addClass('show').siblings().removeClass('show');
                $(tabCont).find(tabCell).hide().eq(index).show();
            });
        },
        swiper: function () {
            var mySwiper = new Swiper('.swiper1', {
                loop: true,//可选选项，开启循环
            });

            $('.l-btn').on('click', function () {
                mySwiper.swipePrev();
            });
            $('.r-btn').on('click', function () {
                mySwiper.swipeNext();
            });
        },
        nicescroll: function () {
            $(document).ready(
                $(".nice-scroll").niceScroll({
                    cursorcolor: "#f3cc7f",
                    cursorborder: "0px solid #fff",
                    cursorborderradius: "4px",
                    cursorwidth: "8px",
                    railpadding: {top: 0, right: 10, left: 0, bottom: 0}
                })
            );
        }
    };


    return {
        init: init
    }
}());


func.init();
