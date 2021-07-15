// we make a schema

const mongoose = require("mongoose");


const projectschema = new mongoose.Schema({
  id: {
    type: "Number",
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
    minlength: 5,
  },

  quantityperUnit: {
    type: Number,
    required: true,
  },

  ProductUnitPrice: {
    type: Number,
    required: true,
  },
  unitinStock: {
    type: Boolean,
    required: true,
  },

  discontinued: {
    type: Boolean,
  },

  Categoryid: {
    type: Number,
    required: true,
    unique: true,
  },
});

// we will create a new collection

const Project = new mongoose.model("Project", projectschema);

module.exports = Project;
