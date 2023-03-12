//Placeholder for commit
//DELETE UPON BUILD
const { Schema, model } = require('mongoose');

const placeholderSchema = new Schema({

});

const Placeholder = model('Placeholder', placeholderSchema);

module.exports = Placeholder;