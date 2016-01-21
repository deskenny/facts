Template.server.helpers({
  isEditingServer: function(){
    return Session.get('editedServerId') === this._id;
  }
});

Template.server.events({
  "click a.edit": function(e, tpl){
    e.preventDefault();
    Session.set('editedServerId', this._id);
  },
 
  "submit form.form-edit": function(e, tpl){
    e.preventDefault();
 
    var serverName = tpl.$('input[name=name]').val();
    var self = this;

    if(serverName.length){
      Meteor.call("serverUpdate", this._id, serverName, function(error){
        if(error){
          alert(error.reason);
          Session.set('editedServerId', self._id);
          Tracker.afterFlush(function(){
            tpl.$('input[name=name]').val(serverName);
            tpl.$('input[name=name]').focus();
          });
        }
      });

      Session.set('editedServerId', null);
    }
  },
 
  "click a.cancel": function(e, tpl){
    e.preventDefault();
    Session.set('editedServerId', null);
  },
 
  'click a.remove': function(e, tpl){
    e.preventDefault();
    Servers.remove(this._id);
  }
});

