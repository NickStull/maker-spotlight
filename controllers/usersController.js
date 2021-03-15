const db = require("../models");
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "be516ac0aef805319df4bc6ab45220d6-us1",
  server: "us1",
});

async function callPing() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

// Defining methods for the postsController
module.exports = {
  findAll: function (req, res) {
    db.Users.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    console.log("-------------------Posting-------------------------");
    db.Users.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  // findById: function (req, res) {
  //   console.log('CONTROLLER HIT WITH ', req.params.id);
  //   db.Users.findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  findByFirebaseId: function (req, res) {
    console.log("ID route hit herere");
    db.Users.findOne({ userId: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Users.findOneAndUpdate({ userId: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Users.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  getUserByName: function (req, res) {
    console.log(
      "yes the route is hit!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    );
    db.Users.findOne({ firstName: req.params.name })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findAdmin: function (req, res) {
    console.log("I'll give you admin access to my backend baby");
    db.Users.find({ admin: true })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findMakers: function (req, res) {
    console.log("A backend maker");
    callPing();
    db.Users.find({ wantTo: true })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
