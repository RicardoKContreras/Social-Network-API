const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionSchema = new Schema(
  {
     // set custom id to avoid confusion with parent thought _id
     reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength:280,
      trim: true
    },
    username: {
      type: String,
      required: true,
      trim: true
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
    type: String,
    required: true,
    minLength:1,
    maxLength:280,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  },
  username: {
    type: String,
    required: true,
    trim: true
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
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;