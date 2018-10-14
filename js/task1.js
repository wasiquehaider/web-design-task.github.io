$(function() {
  $("#email_error_message").hide();
  $("#password_error_message").hide();

  var error_email = false;
  var error_password = false;

  $("#email").focusout(function() {
    check_email();
  });
  $("#password").focusout(function() {
    check_password();
  });

  function check_email() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#email").val();
    if (pattern.test(email) && email === "test@test.com") {
      $("#email_error_message").hide();
      $("#email").css("border-bottom", "2px solid #34f458");
    } else {
      $("#email_error_message").html("Invalid Email");
      $("#email_error_message").show();
      $("#email").css("border-bottom", "2px solid #F90A0A");
      error_email = true;
    }
  }
  function check_password() {
    var password_entered = $("#password").val();
    if (password_entered != "admin") {
      $("#password_error_message").html("Wrong Password");
      $("#password_error_message").show();
      $("#passord").css("border-bottom", "2px solid #F90A0A");
    } else {
      $("#password_error_message").hide();
      $("#passord").css("border-bottom", "2px solid #34f458");
    }
  }
});
