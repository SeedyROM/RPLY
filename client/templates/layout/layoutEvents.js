Template.layout.events({
  'click li#navLogout': function(e, t) {
    Meteor.logout(function(err){
      console.log("Successfully logged out!");
    });
  },
  'click li#profile': function(e, t) {
    Router.go('/profile');
  }
});
