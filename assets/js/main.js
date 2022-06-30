//햄버거 버튼 누르고 nav 등장
$('.menu_btn').click(function(){
  $(this).toggleClass('open');
  
  if($(this).hasClass('open')){
      $('.menu_bg').animate({left:0},500);
  } else {
      $('.menu_bg').animate({left:'-100%'},500);
  }
  
});

// 슬라이드 작동

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      type: "fraction",
  },

  // Navigation arrows
  navigation: {
      nextEl: '.next_btn',
      prevEl: '.prve_btn',
  },
});

//클릭하면 클릭한 ㅍㅔ이지로 이동
$('.gnb li').click(function(){
  swiper.slideTo($(this).index() + 1);
  $('.menu_bg').animate({left:'-100%'},200);
  $('.menu_btn').removeClass('open');
});


//로고(h1) 클릭시 메인페이지로 이동
$('h1').click(function(){
  swiper.slideTo(index);
});