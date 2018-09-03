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

    // $('.skills-item').each(function () {
    //   $('.skills-item').appear({
    //     force_process: true
    //   });
    //   $('.skills-item').on('appear', function () {
    //     var current_bar = $(this);
    //     if (!current_bar.data('inited')) {
    //       current_bar.find('.skills-item-meter-active').fadeTo(300, 1).addClass('skills-animate');
    //       current_bar.data('inited', true);
    //     }
    //   });
    // });
    $('.fixed-sidebar').toggleClass('open');
    // return false;
  }

  // Toggle aside panels
  var clsSideBar = function () {

    $('.fixed-sidebar').removeClass('open');
    // return false;
  }

  function init() {
    toggleSideBar();
  }

  function closeSideBar() {
    clsSideBar();
  }

  /* -----------------------
   * Progress bars Animation
   * --------------------- */

  $(document).ready(function () {
    var $progress_bar = $('.skills-item');

    $progress_bar.each(function () {
      $progress_bar.appear({
        force_process: true
      });
      $progress_bar.on('appear', function () {
        var current_bar = $(this);
        if (!current_bar.data('inited')) {
          current_bar.find('.skills-item-meter-active').fadeTo(300, 1).addClass('skills-animate');
          current_bar.data('inited', true);
        }
      });
    });
  });

  // On Dom Ready Function
  $document.ready(function () {
    $('.mCustomScrollbar').perfectScrollbar({
      wheelPropagation: false
    });
  });
  return {
    init: init,
    closeSideBar: closeSideBar
  };


}(jQuery));


CRUMINA.Bootstrap = function () {
  //  Activate the Tooltips
  $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

  // And Popovers
  $('[data-toggle="popover"]').popover();

  /* -----------------------------
   * Replace select tags with bootstrap dropdowns
   * Script file: theme-plugins.js
   * Documentation about used plugin:
   * https://silviomoreto.github.io/bootstrap-select/
   * ---------------------------*/
  $('.selectpicker').selectpicker();

  /* -----------------------------
   * Date time picker input field
   * Script file: daterangepicker.min.js, moment.min.js
   * Documentation about used plugin:
   * https://v4-alpha.getbootstrap.com/getting-started/introduction/
   * ---------------------------*/
  var date_select_field = $('input[name="datetimepicker"]');
  if (date_select_field.length) {
    var start = moment().subtract(29, 'days');

    date_select_field.daterangepicker({
      startDate: start,
      autoUpdateInput: false,
      singleDatePicker: true,
      showDropdowns: true,
      locale: {
        format: 'DD/MM/YYYY'
      }
    });
    date_select_field.on('focus', function () {
      $(this).closest('.form-group').addClass('is-focused');
    });
    date_select_field.on('apply.daterangepicker', function (ev, picker) {
      $(this).val(picker.startDate.format('DD/MM/YYYY'));
      $(this).closest('.form-group').addClass('is-focused');
    });
    date_select_field.on('hide.daterangepicker', function () {
      if ('' === $(this).val()) {
        $(this).closest('.form-group').removeClass('is-focused');
      }
    });

  }
};

$(document).ready(function () {
  CRUMINA.Bootstrap();
});
