$(document).ready(function(){
  if($('.axom_block').length){
    $('body').addClass('axom_available');
    axom_block_onscroll();
    $(window).scroll(function(){
      axom_block_onscroll();
    })
  }

})

$(document).on('click', '.axom_block_v', function(){
  $('.axom_video').show();
  $('.axom_video video')[0].play();
})

$(document).on('click', '.axom_video_close, .axom_video_closebg', function(){
  $('.axom_video').hide();
  $('.axom_video video')[0].pause();
})

function axom_block_onscroll(){
  var ot = $(window).scrollTop();
  var p = $('.axom_block').height();

  $('body').toggleClass('axom_past', p < ot);

}
