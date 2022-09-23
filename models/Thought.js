const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionSchema = new Schema(
  {
     // set custom id to avoid confusion with parent comment _id
     reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    replyBody: {
      type: String
    },
    reactionBody: {
      type: String
    },
    username: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true,
    }
  
  }
);

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  },
  username: {
    type: String
  },
  reactions: [ReactionSchema]
},

{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
}

);

ThoughtSchema.virtual('reactionCount').get(function() {
   return this.reactions.length;
  // console.log(this.friends);
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;