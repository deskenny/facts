Template.fact.events({
  "click a.finish-fact": function(e, tpl){
    e.preventDefault();
    Facts.update({_id: this._id}, {$set: {completed: true}});
  },
 
  "click a.delete-fact": function(e, tpl){
    e.preventDefault();
    var factId  = this._id;
    var serverIdA = this.servers[0]._id;
    var serverIdB = this.servers[1]._id;

    Facts.remove(factId, function (error) {
      if (!error) {
        Servers.update({_id: serverIdA}, {$pull: {factIds: factId}});
        Servers.update({_id: serverIdB}, {$pull: {factIds: factId}});
      }
    });
  },
 
  "click a.score": function(e, tpl){
    e.preventDefault();
    var data = $(e.currentTarget).data();
    var update = {$inc: {}};
    var selector = "servers." + data.index + ".score";
    update.$inc[selector] = data.inc;
    Facts.update({_id: this._id}, update);
  }
});
