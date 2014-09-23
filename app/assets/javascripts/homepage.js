$( document ).ready(function()
{
var toggled = false;
$(function() {
  $(".home-title").click(
    function(e) {
      if (toggled) {
        $(this).animate( {'margin-top' : '+250px'} );
        $('#first-sentence').fadeOut();
        $('#second-sentence').fadeOut();
        $(".hover-text").fadeOut();
        toggled = false;
        e.preventDefault();
      } else {
        $(this).animate( {'margin-top' : '-20px'} );
        $('#first-sentence').fadeIn();
        $('#second-sentence').fadeIn();
        $(".hover-text").fadeIn();
        toggled = true;
      }
    });
  });
});