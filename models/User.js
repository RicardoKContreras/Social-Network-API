const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
      type: String
    },
    email: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
    
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
  );

  // get total count of comments and replies on retrieval
  //Virtual to get the total amount of friends a user has
UserSchema.virtual('friendCount').get(function() {
  // return this.friends.length;
});

  // create the Pizza model using the PizzaSchema
const User = model('User', UserSchema);

// export the Pizza model
module.exports = User;
