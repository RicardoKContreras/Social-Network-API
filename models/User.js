const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please fill a valid email address']
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
      return this.friends.length;
});

  // create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;
