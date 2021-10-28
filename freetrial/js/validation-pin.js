$(function() {
  $.validator.setDefaults({
    errorClass: 'help-block',
    highlight: function(element) {
      $(element)
        .closest('.field')
        .addClass('has-error');
    },
    unhighlight: function(element) {
      $(element)
        .closest('.field')
        .removeClass('has-error');
    },
    errorPlacement: function (error, element) {
      // if (element.prop('type') === 'checkbox') {
      //   error.insertAfter(element.parent());
      // } else {
      //   error.insertAfter(element);
      // }
        error.appendTo("div .errors");
    }
  });


  $("#pin-form").validate({
    rules: {
      "pin": {
		  required: true,
		  minlength: 4,
          number: true
	  },
	  "confirm_pin": {
		  required: true,
          minlength: 4,
          equalTo: "#pin"
	  }
	},
      "messages": {
          "pin": {
              required: "Please enter a 4-DIGIT PIN",
              minlength: "Please enter a 4-DIGIT PIN",
              number: "Please enter a 4-DIGIT PIN"
          },
          "confirm_pin": {
              equalTo: "Confirm PIN doesn’t match"
          }
      }
  });
});


$(function(){
  $('.hide-show').show();
  $('.hide-show #checkbox').addClass('show')
  
  $('.hide-show #checkbox').click(function(){
    if( $(this).hasClass('show') ) {
      $(this).text('Show PIN');
      $('input[name="pin"]').attr('type','text');
	  $('input[name="confirm_pin"]').attr('type','text');
      $(this).removeClass('show');
    } else {
       $(this).text('Show PIN');
       $('input[name="pin"]').attr('type','password');
	   $('input[name="confirm_pin"]').attr('type','password');
       $(this).addClass('show');
    }
  });
	
	$('form button[type="submit"]').on('click', function(){
		$('.hide-show span').text('Show PIN').addClass('show');
		$('.hide-show').parent().find('input[name="pin"]','input[name="confirm_pin"]').attr('type','password');
	}); 
});