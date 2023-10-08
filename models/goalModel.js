const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	target: { type: Number, required: true },
	deadline: { type: Date, required: true },
	type: { type: String, required: true },
});
const Goal = mongoose.model("Goal", goalSchema);
module.exports = Goal;
