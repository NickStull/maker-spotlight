const db = require("../models");
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "be516ac0aef805319df4bc6ab45220d6-us1",
  server: "us1",
});

// async function run() {
//   const response = await mailchimp.ping.get();
//   console.log(response);
// }

const run = async () => {
  const response = await mailchimp.lists.addListMember("cfb63d742d", {
    email_address: "Stull.nicholas@gmail.com",
    status: "pending",
  });
  console.log(response);
};

// const mailchimp = require("@mailchimp/mailchimp_marketing");
// const client = require("mailchimp-marketing");

// mailchimp.setConfig({
//   apiKey: "be516ac0aef805319df4bc6ab45220d6-us1",
//   server: "us1",
// });

// client.setConfig({
//   apiKey: "be516ac0aef805319df4bc6ab45220d6-us1",
//   server: "us1",
// });

// const run = async () => {
//   const response = await client.authorizedApps.get("app_id");
//   console.log(response);
// };

// run();

// async function callPing() {
//   const response = await mailchimp.ping.get();
//   console.log("response: ", response);
// }

// const event = {
//   name: "JS Developers Meetupzz",
// };

// const footerContactInfo = {
//   company: "Maker Spotlight",
//   address1: "675 Ponce de Leon Ave NE",
//   address2: "Suite 5000",
//   city: "Atlanta",
//   state: "GA",
//   zip: "30308",
//   country: "US",
// };

// const campaignDefaults = {
//   from_name: "Gettin' Together",
//   from_email: "derekbardini@gmail.com",
//   subject: "JS Developers Meetupzz",
//   language: "EN_US",
// };

// async function run() {
//   const response = await mailchimp.lists
//     .createList({
//       name: event.name,
//       contact: footerContactInfo,
//       permission_reminder: "permission_reminder",
//       email_type_option: true,
//       campaign_defaults: campaignDefaults,
//     })
//     .then((response) => {
//       console.log(response);
//       console.log(
//         `Successfully created an audience. The audience id is ${response.id}.`
//       );
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
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
    // callPing();
    console.log("admin hit");
    db.Users.find({ admin: true })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findMakers: function (req, res) {
    run();
    console.log("A backend maker");
    db.Users.find({ wantTo: true })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
