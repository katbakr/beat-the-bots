const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const botSchema = new Schema({
  botName: {
    type: String,
    required: true,
  },
  isLocked: {
    type: Boolean,
    required: true,
  },
  isDefeated: {
    type: Boolean,
    required: true,
  },
  rounds: [
    {
      botChoice: {
        type: String,
        required: true,
      },
      humanChoice: {
        type: String,
        required: true,
      },
      humanWin: {
        type: Boolean,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    }
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

const Bot = model('Bot', botSchema);

module.exports = Bot;
