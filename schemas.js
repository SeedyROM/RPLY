Profiles = new Mongo.Collection('profiles');
Posts = new Mongo.Collection('posts');
Messages = new Mongo.Collection('messages');

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
    min: 8,
    optional: true
  },
  bio: {
    type: String,
    max: 512
  },
});

Profiles.attachSchema(Schemas.Profile);
