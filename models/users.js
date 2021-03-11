const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  userId: { 
    type: String,
    trim: true, 
    required: true
  },

  firstName: { 
      type: String,
      trim: true, 
      required: [true, "Please enter a first name!"]
       
  },

  lastName: { 
      type: String, 
      trim: true, 
      required: [true, "Please enter a last name!"] 
  },

  email: { 
      type: String,
      trim: true,  
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"], 
      required: [true, "Please enter a valid email address!"]
  },

  admin: {
    type: Boolean,
    default: false
  },

  voted: {
    type: String,
    trim: true,
    default: ""
  },

  wantTo: {
    type: Boolean,
    default: false
  },

  candidate: {
    type: Boolean,
    default: false
  },

  currentVotes: {
    type: Number,
    default: 0
  },

  totalVotes: {
    type: Number,
    default: 0
  },

  businessName: {
    type: String,
    trim: true,
    default: ""
  },

  phoneNumber: {
    type: String,
    trim: true,
    default: ""
  },

  website: {
    type: String,
    trim: true,
    default: ""
  },

  bioText: {
    type: String,
    trim: true,
    default: ""
  }

});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
