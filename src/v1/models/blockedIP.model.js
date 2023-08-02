const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    ip: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    // To not avoid empty object when creating the document
    minimize: false,
    // To automatically write creation/update timestamps
    // Note: the update timestamp will be updated automatically
    timestamps: true,
  }
);

const BlockedIP = model("BlockedIP", schema);

module.exports = BlockedIP;
