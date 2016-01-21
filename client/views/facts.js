Template.facts.helpers({
  facts: function(){
    return Facts.find();
  },

  servers: function(){
    return Servers.find();
  },
  
  isCreatingFact: function(){
    return Session.get('isCreatingFact');
  }
});

 
Template.facts.events({
  "click a.create": function(e, tpl){
    e.preventDefault();
    Session.set('isCreatingFact', true);
  },
 
  "click a.cancel": function(e, tpl){
    e.preventDefault();
    Session.set('isCreatingFact', false);
  },
    
  "submit form.form-create": function(e, tpl){
    e.preventDefault();
    var serverOneId = tpl.$("select[name=serverOne]").val();
    var serverTwoId = tpl.$("select[name=serverTwo]").val();
 
    Meteor.call('factsInsert', serverOneId, serverTwoId, function(error, response){
      if(error){
        alert(error.reason);
        Session.set('isCreatingFact', true);
        Tracker.afterFlush(function(){
          tpl.$("select[name=serverOne]").val(serverOneId);
          tpl.$("select[name=serverTwo]").val(serverTwoId);
        });
      }
    });

    Session.set('isCreatingFact', false);
  }
});
