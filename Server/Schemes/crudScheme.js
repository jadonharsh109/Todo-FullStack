const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const crudScheme = new Schema({
  taskname: {
    type: String,
    required: [true, 'Name of the Task is Required']
  },
  createdat: {
    type: Date,
    default: Date.now
  },
  taskStatus: {
    type: String,
    default: "pending",
    required: [true, 'Name of the Task is Required']
  },
});

module.exports = mongoose.model("crudScheme", crudScheme);