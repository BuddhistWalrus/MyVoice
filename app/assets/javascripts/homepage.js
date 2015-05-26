$( document ).ready(function()
{
$(function() {
  var toggled = false;
  $(".home-title").click(
    function(e) {
      if (toggled) {
        $(this).animate( {'margin-top' : '+250px'} );
        $('.home-paragraph').fadeOut();
        $(".enter-site").fadeOut();
        $(".home-title").hide();
        toggled = false;
        e.preventDefault();
      } else {
        $(this).animate( {'margin-top' : '-20px'} );
        $('.home-paragraph').fadeIn();
        $(".home-enter-button").fadeIn();
        $(".home-title").hide();
        toggled = true;
      }
    });
  });
});