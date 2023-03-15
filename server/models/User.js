const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const levelSchema = require('./Level.js')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  levels: [levelSchema],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const levelData = [
  {
    levelId: 1,
    levelName: "Level1",
    isLocked: false,
    isDefeated: false,
    roundHistory: []
  },
  {
    levelId: 2,
    levelName: "Level2",
    isLocked: true,
    isDefeated: false,
    roundHistory: []
  },
  {
    levelId: 3,
    levelName: "Level3",
    isLocked: true,
    isDefeated: false,
    roundHistory: []
  },
  {
    levelId: 4,
    levelName: "Level4",
    isLocked: true,
    isDefeated: false,
    roundHistory: []
  },
  {
    levelId: 5,
    levelName: "Level5",
    isLocked: true,
    isDefeated: false,
    roundHistory: []
  },
]

const User = model('User', userSchema);

User.create({ username: "Frodo", password: "password", levels: levelData }, (err, data) => {
  if (err) {
    console.log("this is the error", err);
  } else {
    console.log("this is the data", data);
  }
})

module.exports = User;
