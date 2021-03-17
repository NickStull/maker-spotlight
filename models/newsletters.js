const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsLettersSchema = new Schema({
  issueNumber: {
    type: Number,
    default: 0
  },
  
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

  address: {
    type: String,
    trim: true,
    default: ""
  },

  address2: {
    type: String,
    trim: true,
    default: ""
  },

  city: {
    type: String,
    trim: true,
    default: ""
  },

  state: {
    type: String,
    trim: true,
    default: ""
  },

  zipCode: {
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

  bioPicture: {
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
      id: {
        type: String,
        trim: true
      },
      link: {
        type: String,
        trim: true
      },
      description: {
        type: String,
        trim: true
      }
    }  
  ],

  date: {
    type: String,
    default: Date
  } 

});

const NewsLetters = mongoose.model("NewsLetters", NewsLettersSchema);

module.exports = NewsLetters;
