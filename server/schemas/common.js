Profiles = new Meteor.Collection('profiles');
Posts = new Meteor.Collection('posts');
Messages = new Meteor.Collection('messages');

var Schemas = {};

Schemas.Profile = new SimpleSchema({
  belongsTo: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  location: {
    type: String,
    max: 64
  },
  profilePhoto: {
    type: String,
    max: 128,
    min: 8
  },
  bio: {
    type: String,
    max: 512,
    min: 16
  },
});
Profiles.attachSchema(Schemas.Profile);
