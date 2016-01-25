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

  nameValUpdate: function(serverName, nameValName, newValue){
    check(Meteor.userId(), String);
    check(serverName, String);
    check(nameValName, String);
    check(newValue, String);
    console.log("in name val update");
    var server = Servers.findOne({name: serverName});
    var serverId = server._id;
    console.log("server :" + server + " serverName :" + serverName + " nameValName :" + nameValName + " newValue :" + newValue);
    if(server){
      // db.getCollection('servers').update({name:"test-web1-19"}, {$set: { "nameVals.0.ETC_DIR":"/etcd"}});
      var serverById = Servers.findOne({_id: serverId});
      if (serverById) {
        console.log(" serverId:" + serverId);    

        var updateOP = Servers.update(serverId, {$set: { "nameVals.0.ETC_DIR" : newValue }}, function(error){
          console.log("error:" + error + " updateOP:" + updateOP);
          if(!error){
            console.log("no error ");
            return newValue;
          }
        });
      } else {
        throw new Meteor.Error("nameval-does-not-exist", "Cannot find the server by Id");
      }  
    } else {
      throw new Meteor.Error("nameval-does-not-exist", "This Name Value pair does not exist in the database");
    };
  },

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
