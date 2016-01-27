Accounts.Meteor.onCreateUser(function(options, user){
  Profiles.insert({
    belongsTo: user._id,
    bio: "New to RPLY!",
    location: "Somewhere Unknown"
  });

  if(options.profile)
    user.profile = options.profile;

  return user;
});
