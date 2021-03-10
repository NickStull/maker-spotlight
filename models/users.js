const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  firstName: { 
      type: String, 
      required: true 
    },

  lastName: { 
      type: String, 
      required: true 
    },

  email: { 
      type: String, 
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"], 
      required: true 
    }
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
