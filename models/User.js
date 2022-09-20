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
    thoughts: {
        type: String
      },
    friends: {
      type: String,
      default: 'Large'
    }
  });

  // create the Pizza model using the PizzaSchema
const User = model('User', UserSchema);

// export the Pizza model
module.exports = User;
