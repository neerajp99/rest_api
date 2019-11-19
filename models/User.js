const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoos.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
});
module.exports = User = mongoose.model("users", UserSchema);
