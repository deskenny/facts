Servers = new Meteor.Collection('servers');

Servers.allow({
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
  serverUpdate: function(serverId, newName){
    check(Meteor.userId(), String);
    check(serverId, String);
    check(newName, String);

    var server = Servers.findOne(serverId);
    if(server){
      Servers.update(serverId, {$set: {name: newName}}, function(error){
        if(!error){
          if(server.factIds){
            var facts = Facts.find({_id: {$in: server.factIds}});
       
            facts.fetch().forEach(function(fact){
              fact.servers.map(function(server){
                if(server._id == serverId){
                  server.name = newName;
                }

                Facts.update({_id: fact._id}, {$set: {servers: fact.servers}});
              })
            });
          }

          return serverId;
        }
      });
    } else {
      throw new Meteor.Error("server-does-not-exist", "This server doesn't exist in the database");
    };
  }
});
