const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsLetterSchema = new Schema({
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

  photos: [
    {
      id: String,
      link: String,
      description: String
    }
  ]

});

const Users = mongoose.model("Users", NewsLetterSchema);

module.exports = Users;
