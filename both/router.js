Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {
  name: 'facts',
  waitOn: function(){
    return [Meteor.subscribe("facts"), Meteor.subscribe("servers")];
  }
});

Router.route('/servers', {
  waitOn: function(){return Meteor.subscribe('servers')}
});

var requireLogin = function(){
  if(!Meteor.user()){
    if(Meteor.loggingIn()){
      this.render("loading");
    } else {
      this.render("accessDenied");
    }
  } else {
    this.next();
  }
}
 
Router.onBeforeAction(requireLogin);
