Template.dashboard.events({
  'click #navLogout': function(e, t) {
    Meteor.logout(function(err){
      console.log("Successfully logged out!");
    });
  }
});
