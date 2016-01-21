Servers.attachSchema(new SimpleSchema({
  name: {
    type: String,
    index: true,
    unique: true,
    max: 30
  },
 
  ownerId: {
    type: String
  },
  
  factIds: {
    type: [String],
    optional: true
  },

  nameVals: {
    type: [Object],
    blackbox: true,
    optional: true
  },

  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    }
  },
  
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
}));
