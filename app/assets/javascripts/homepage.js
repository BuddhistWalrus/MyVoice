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
        $(".enter-site").fadeOut();
        $(".home-title").hide();
        toggled = false;
        e.preventDefault();
      } else {
        $(this).animate( {'margin-top' : '-20px'} );
        $('#first-sentence').fadeIn();
        $('#second-sentence').fadeIn();
        $(".home-enter-button").fadeIn();
        $(".home-title").hide();
        toggled = true;
      }
    });
  });
});