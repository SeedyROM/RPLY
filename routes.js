Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  if(Meteor.userId()) {
    this.render('dashboard');
  } else {
    this.render('splash');
  }
});

Router.route('/profile', function() {
  if(Meteor.userId()) {
    var profile = Profiles.findOne({belongsTo: Meteor.userId()});
    this.render('profile', {data: profile});
  } else {
    this.render('splash');
  }
});
