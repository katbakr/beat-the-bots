const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
  joinCode: {
    type: String,
    required: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  ],
  bots: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Bot',
    },
  ],
});

const Game = model('Game', gameSchema);

module.exports = Game;
