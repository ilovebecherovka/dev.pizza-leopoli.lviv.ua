jQuery.noConflict();
jQuery( document ).ready(function(){

    //Zoom Plugin
    jQuery('.zoom').zoom();

    //Count inc dec
    jQuery('.count span').click(function(){
        var input = jQuery(this).parent().find('input');
        var dec = jQuery(this).parent().find('.dec');
        var inputVal = input.val();
        if(jQuery(this).hasClass('inc')) {
           inputVal++;
           dec.removeClass('no-Active');
        }
        if(jQuery(this).hasClass('dec')) {
            inputVal--;
            if(inputVal < 2) {
                dec.addClass('no-Active');
                inputVal = 1;
            }
        }
        input.val(inputVal);
    });
});	
  