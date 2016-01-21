Meteor.publish('servers', function(){
  return Servers.find({ownerId: this.userId});
});

Meteor.publish('facts', function(){
  return Facts.find({ownerId: this.userId});
});
