function headerbg() {
  var scrollTop = $(window).scrollTop();
  if(scrollTop >= 80){
    $('header').addClass('header-new');
    $('.logo-section').addClass('logo-sectionmin');
    $('.logoimg').addClass('logmin');
  } else {
    $('header').removeClass('header-new');
    $('.logo-section').removeClass('logo-sectionmin');
    $('.logoimg').removeClass('logmin');
  }
}
$(window).scroll(function(){
  headerbg();
});

$(document).on('click', '.mobmenu', function(){
  $('.header-menu').toggleClass('show-menubox');
});

$('.header-menu ul li a').on('click', function(){
  $('.header-menu').removeClass('show-menubox');
});

$('.mobileicon').on('click', function(){
  $(this).next().slideToggle("fast");
  $(this).children('.minus-plus').toggleClass('fa-minus fa-plus');
});

$('[data-scrollmenu]').click(function(){
  var scrollval = $(this).data('scrollmenu');
  $('html, body').animate({ scrollTop: $('#'+scrollval).offset().top - 80 }, 2000);
  return false;
});

$('#videoModal').on('hidden.bs.modal', function () {
  $('video').trigger('pause');
});


