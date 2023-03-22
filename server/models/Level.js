const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const levelSchema = new Schema({
	levelId: {
		type: Number,
		required: true,
	},
	levelName: {
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
	roundHistory: [String],
});

module.exports = levelSchema;
