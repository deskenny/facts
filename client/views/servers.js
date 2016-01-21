Template.servers.helpers({
  isCreatingServer: function(){
    return Session.get('isCreatingServer');
  },

  servers: function(){
    return Servers.find();
  } 
});

Template.servers.events({
  'click a.create': function(e, tpl){
    e.preventDefault();
    Session.set('isCreatingServer', true);
  },

  'click a.cancel': function(e, tpl){
    e.preventDefault();
    Session.set('isCreatingServer', false);
  },

  'submit form.create-server': function(e, tpl){
    e.preventDefault();

    var server = {
      name: tpl.$('input[name=name]').val(),
      ownerId: Meteor.userId()
    };

    Servers.insert(server, function(error, _id){
      if(error){
        alert(error);
        Session.set('isCreatingServer', true);
        Tracker.afterFlush(function(){
          tpl.$('input[name=name]').val(server.name);
        });
      }
    });

    Session.set('isCreatingServer', false);
  }
});
