// var BodyInit = (function ($) {



//     //Scroll to top.
//     jQuery('.back-to-top').on('click', function () {
//         $('html,body').animate({
//             scrollTop: 0
//         }, 1200);
//         return false;
//     });






//     return {
//         toggleSideBar: toggleSideBar
//     };


// })();

//Global var to avoid any conflicts
var CRUMINA = {};

var BodyInit = (function () {

    // USE STRICT
    "use strict";

    //----------------------------------------------------/
    // Predefined Variables
    //----------------------------------------------------/
    var $window = $(window),
        $document = $(document),
        $body = $('body'),
        $sidebar = $('.fixed-sidebar');


    //Scroll to top.
    jQuery('.back-to-top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1200);
        return false;
    });

	/* -----------------------------
	 Custom input type="number"
	 https://bootsnipp.com/snippets/featured/bootstrap-number-spinner-on-click-hold
	 * ---------------------------*/

    $(function () {
        var action;
        $(document).on("touchstart mousedown", ".number-spinner button", function () {
            var btn = $(this);
            var input = btn.closest('.number-spinner').find('input');
            btn.closest('.number-spinner').find('button').prop("disabled", false);

            if (btn.attr('data-dir') == 'up') {
                action = setInterval(function () {
                    if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                        input.val(parseInt(input.val()) + 1);
                    } else {
                        btn.prop("disabled", true);
                        clearInterval(action);
                    }
                }, 50);
            } else {
                action = setInterval(function () {
                    if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                        input.val(parseInt(input.val()) - 1);
                    } else {
                        btn.prop("disabled", true);
                        clearInterval(action);
                    }
                }, 50);
            }
        });
        $(document).on("touchend mouseup", ".number-spinner button", function () {
            clearInterval(action);
        });
    });


    // Toggle aside panels
    var toggleSideBar = function () {
        $('.fixed-sidebar').toggleClass('open');
        return false;
    }

    function init() {
        toggleSideBar();
    }

    // On Dom Ready Function
    $document.ready(function () {
        $('.mCustomScrollbar').perfectScrollbar({ wheelPropagation: false });
    });
    return {
        init: init
    };


}(jQuery));