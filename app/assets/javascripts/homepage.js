$( document ).ready(function()
{
  var slideup = false;
  $('body').on('click', '.home-title p', function(evt)
    {
      evt.stopPropagation();
      console.log(this);
        if (!slideup)
        {
            $(this).animate({up : '50px'}, {duration : 4000});
            slideup = true;
        }
        else
        {
           $(this).animate({down : '300px'}, {duration: 4000});
            slideup = false;
        }
    });
  return false;
 });