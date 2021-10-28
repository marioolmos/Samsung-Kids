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
                error.appendTo("div .errors");
            // } else {
            //     error.insertAfter(element);
            // }
        }
    });

    var currentYear = new Date().getFullYear().toString().substr(-2);

    $("#payment-form").validate({
        rules: {
            "card-number": {
                required: true,
                number: true
            },
            "expiration-month": {
                required: true,
                min: 1,
                max: 12,
                number: true

            },
            "expiration-year": {
                required: true,
                maxlength: 2,
                min: currentYear,
                number: true
            },
            "zip": {
                required: true,
                zipcodeUS: true
            },
            "cvc": {
                required: true,
                maxlength: 4,
                number: true
            }

        },
        messages: {
            "card-number": {
                required: "Please enter a valid credit card number",
                number: "Please enter a valid credit card number",
                minlength: "Please enter a valid credit card number"
            },
            "expiration-month": {
                required: "Please enter a valid expiration month",
                min: "Please enter a valid expiration month",
                max: "Please enter a valid expiration month"

            },
            "expiration-year": {
                required: "Please enter a valid expiration year",
                maxlength: "Please enter a valid expiration year",
                min: "Please enter a valid expiration year"
            },
            "cvc": {
                required: "Please enter a valid CVC",
                maxlength: "Please enter a valid CVC",
                number: "Please enter a valid CVC"
            }

        }
    });
});

