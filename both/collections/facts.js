Facts = new Meteor.Collection('facts');

Facts.allow({
  insert: function (userId, doc) {
    return (userId && doc.ownerId === userId);
  },
  update: function (userId, doc, fields, modifier) {
    return doc.ownerId === userId;
  },
  remove: function (userId, doc) {
    return doc.ownerId === userId;
  },
  fetch: ['ownerId']
});


Meteor.methods({
  factsInsert: function(serverOneId, serverTwoId){
    check(Meteor.userId(), String);
    check(serverOneId, String);
    check(serverTwoId, String);

    var serverOne = Servers.findOne({_id: serverOneId, ownerId: Meteor.userId()});
    var serverTwo = Servers.findOne({_id: serverTwoId, ownerId: Meteor.userId()});
 
    if(!serverOne || !serverTwo){
      throw new Meteor.Error("invalid-parameters", "One of the servers doesn't exist in the database");
    }

    var serverOneData = {
      _id: serverOne._id,
      name: serverOne.name,
      score: 0
    };

    var serverTwoData = {
      _id: serverTwo._id,
      name: serverTwo.name,
      score: 0
    };
 
    var fact = {
      ownerId: Meteor.userId(),
      servers: [serverOneData, serverTwoData],
      completed: false
    };
 
    var factId = Facts.insert(fact);
 
    // Update each server's cached array of fact ids
    Servers.update({_id: serverOneData._id}, {$addToSet: { factIds: factId}});
    Servers.update({_id: serverTwoData._id}, {$addToSet: { factIds: factId}});
 
    // Copy Meteor.insert(), which just returns the _id
    return factId;
  }
});
