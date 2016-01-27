Router.route('/', function() {
  if(Meteor.userId()) {
    this.render('dashboard');
  } else {
    this.render('splash');
  }
});
