Template.nameVal.helpers({
	 isEditingNameVal: function(){
    return Session.get('editedNameValId') === this.servername + "-" + this.name;
  }
});
 
Template.nameVal.events({
  "click a.edit": function(e, tpl){
    e.preventDefault();
    Session.set('editedNameValId', this.servername + "-" + this.name);
  },
 
  "submit form.update-nameval": function(e, tpl){
    e.preventDefault();
 	  var servername = tpl.$('input[name=servername]').val();
    var nameValName = tpl.$('input[name=name]').val();
    var newValue = tpl.$('input[name=newVal]').val();
    var self = this;

    if(nameValName.length){
      Meteor.call("nameValUpdate", servername, nameValName, newValue, function(error){
        if(error){
          alert(error.reason);
          Session.set('editedNameValId', this.servername + "-" + this.name);
          Tracker.afterFlush(function(){
            tpl.$('input[name=name]').val(nameValName);
            tpl.$('input[name=name]').focus();
          });
        }
      });

      Session.set('editedNameValId', null);
    }
  },
 
  "click a.cancel": function(e, tpl){
    e.preventDefault();
    Session.set('editedNameValId', null);
  },
 
   'click a.remove': function(e, tpl){
      e.preventDefault();
      var self = this;
      var servername = tpl.data.servername;
      var nameValName = tpl.data.name;

      if(nameValName.length){
        Meteor.call("nameValRemove", servername, nameValName, function(error){
          if(error){
            alert(error.reason);
          }
        });
      }
   }

});