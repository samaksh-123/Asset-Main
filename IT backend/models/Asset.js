const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
  type: String,
  name: String,
  manufacturer: String,
  configuration: String,
  serialNumber: String,
  invoiceNumber: String,
  location: String,
  status: String,
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  warranty: String,
  price: Number,
  partyName: String,
  issued: {
    type: Boolean,
    default: false
  },
    invoiceFile: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model("Asset", assetSchema);
