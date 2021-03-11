const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/makerspotlight");

const usersSeed = [
  {
    userId: "L2FxlNluqIZVeOA1t5dXU1och6C3",
    firstName: "Nick",
    lastName: "Stull",
    email: "nick@gmail.com"
  },
  {
    userId: "d28jGwxVdZXYOQGzS6NbxkB3ddP2",
    firstName: "Derek",
    lastName: "Bardini",
    email: "derekbardini@gmail.com"
  },
  {
    userId: "u5irgyagz7YT5m77Zsx8Mb51Ngs2",
    firstName: "Tim",
    lastName: "Martin",
    email: "timmartin13@gmail.com"
  },
  {
    userId: "x5YnUFqsuZdmBDhPuxUc4bziVoP2",
    firstName: "Hector",
    lastName: "Fernandez",
    email: "hector@email.com"
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