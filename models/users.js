const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
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

  password: {
    type: String,
    trim: true,
    required: [true, "Please enter a password!"]
  },

  maker: {
    type: Boolean,
    default: false
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

  featured: {
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
  },

  pictures: [
      {
        type: String,
        trim: true
      }
  ]
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
