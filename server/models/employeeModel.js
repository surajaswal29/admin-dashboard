const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeName: {
      type: String,
      required: [true, "Please enter employee name"],
    },
    address: {
      type: String,
      required: [true, "Please enter employee Address"],
    },
    age: {
      type: Number,
      required: [true, "Please enter employee age"],
    },
    department: {
      type: String,
      required: [true, "please enter employee department"],
    },
    employeeStatus: {
      type: String,
      required: [true, "please enter employee department"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});
  
module.exports = mongoose.model("Employee", employeeSchema, "Employee");