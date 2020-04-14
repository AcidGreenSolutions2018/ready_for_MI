const mongoose = require("mongoose");

const condoSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    maxlength: 100,
  },
  address: {
    streetnumber: {
      required: true,
      type: Number,
    },
    street: {
      required: true,
      type: String,
      maxlength: 100,
    },
    city: {
      required: true,
      type: String,
    },
    region: {
      required: true,
      type: String,
    },
  },
  floorarea: {
    required: true,
    type: Number,
  },
  bedrooms: {
    required: false,
    type: Number,
  },
  toiletsandbaths: {
    required: true,
    type: Number,
  },
  furnished: {
    required: false,
    type: Boolean,
  },
  hoa: {
    required: true,
    type: Number,
  },
  parking: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
    maxlength: 200,
  },
});

const Condominium = mongoose.model("Condominium", condoSchema);

module.exports = { Condominium };
