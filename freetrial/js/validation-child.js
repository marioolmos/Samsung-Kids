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
	
  $.validator.addMethod('strongPassword', function(value, element) {
    return this.optional(element) 
      || value.length >= 8;
  }, 'Password is too short')



  $("#child-form").validate({
    rules: {
      childname: {
        required: true,
        childname: true
	  },
      password: {
        required: true,
        strongPassword: true
      }
    },
    messages: {
      email: {
        required: 'Please enter an email address.',
        email: 'Please enter a <em>valid</em> email address.'
      }
    }
  });

});