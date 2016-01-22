Template.nameVals.helpers({
  propsFound: function(){
	propsFound = [];
	for(var propName in this) {
		if(typeof(this[propName]) != "undefined") {
			var prop = Object();
			prop._id = this._id;
			prop.name = propName;
			prop.value = this[propName];
			propsFound.push(prop);
		}
	}
    return propsFound;
  }

}); 