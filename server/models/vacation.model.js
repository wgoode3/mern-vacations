const mongoose = require("mongoose");


const VacationSchema = new mongoose.Schema({
  start: Date,
  end: Date,
  location: String,
  activities: []
}, {timestamps: true});
  
module.exports = mongoose.model("Vacation", VacationSchema);