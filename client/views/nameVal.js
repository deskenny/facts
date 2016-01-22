Template.nameVal.helpers({
	 isEditingNameVal: function(){
    return Session.get('editedNameValId') === this._id;
  }
});
 
Template.nameVal.events({
  "click a.edit": function(e, tpl){
    e.preventDefault();
    Session.set('editedNameValId', this._id);
  },
 
  "submit form.form-edit": function(e, tpl){
    e.preventDefault();
 
    var nameValName = tpl.$('input[name=name]').val();
    var self = this;

    if(nameValName.length){
      Meteor.call("nameValUpdate", this._id, nameValName, function(error){
        if(error){
          alert(error.reason);
          Session.set('editedNameValId', self._id);
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
 
  // 'click a.remove': function(e, tpl){
  //   e.preventDefault();
  //   NameVals.remove(this._id);
  // }

});