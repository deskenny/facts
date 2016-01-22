Template.nameVals.helpers({
  log: function () {
    console.log(this);
  },
  propsFound: function(){

	propsFound = [];	
	for(var propName in this) {
		if(typeof(this[propName]) != "undefined") {
			var prop = Object();
			prop._id = this._id;
			prop.name = propName;
			prop.value = this[propName];
			prop.servername = Template.parentData(1).name;
			propsFound.push(prop);
		}
	}
    return propsFound;
  }

}); 