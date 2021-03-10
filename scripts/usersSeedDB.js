const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/makerspotlight");

const usersSeed = [
  {
    firstName: "Nick",
    lastName: "Stull",
    email: "nick@gmail.com"
  },
  {
    firstName: "Derek",
    lastName: "Bardini",
    email: "derek@gmail.com"
  },
  {
    firstName: "Tim",
    lastName: "Martin",
    email: "tim@gmail.com"
  },
  {
    firstName: "Hector",
    lastName: "Fernandez",
    email: "hector@gmail.com"
  }
];

db.Users.remove({})
  .then(() => db.Users.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });