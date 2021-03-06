var factServerSchema = new SimpleSchema({
  _id: {
    type: String
  },

  name: {
    type: String
  },

  score: {
    type: Number
  }
});

Facts.attachSchema(new SimpleSchema({
  completed: {
    type: Boolean
  },
 
  ownerId: {
    type: String
  },
  
  servers: {
    type: [factServerSchema]
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
