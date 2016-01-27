// Switch between sign-up and login forms.
Template.splashUserForm.events({
  'click #signUpLink': function(e, t) {
    // Indicate which form is active
    $('#loginLink').removeClass('activeForm');
    $('#signUpLink').addClass('activeForm');

    // Animation chain for switch between forms.
    $('#login').fadeOut(100, function() {
      $('.splashBox').animate({
        height: '369px'
      }, 200, function() {
        $('#register').fadeIn(100);
      });
    });
  },
  'click #loginLink': function(e, t) {
    // Indicate which form is active.
    $('#signUpLink').removeClass('activeForm');
    $('#loginLink').addClass('activeForm');

    // Animation chain for switch between forms.
    $('#register').fadeOut(100, function () {
      $('.splashBox').animate({
        height: '265px'
      }, 200, function() {
        $('#login').fadeIn(100);
      });
    });
  }
});

// Register submit method.
Template.userRegistrationForm.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var email = t.find('#email').value;
    var password = t.find('#password').value;
    var confirmPassword = t.find('#confirm_password').value;

     // Make sure passwords match.
     if(password !== confirmPassword)
     {
       throw new Meteor.Error('Passwords did not match');
       return;
     }

     // Create a new user.
     // TODO ADD USERNAME AS FIELD TO ACCOUNT
     Accounts.createUser({email: email, password: password}, function(error) {
       if(error) {
         // TODO Display and handle errors.
         console.log(error);
       } else {
         Router.go('/');
       }
     });

     return false;
  }
});

//Login submit method.
Template.userLoginForm.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var email = t.find('form #email').value;
    var password = t.find('form #password').value;

    Meteor.loginWithPassword(email, password, function(error) {
      if(error) {
        // TODO Display and handle errors.
        console.log(error);
      } else {
        Router.go('/');
      }
    });
  }
});
