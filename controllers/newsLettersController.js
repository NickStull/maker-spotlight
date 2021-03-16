const db = require("../models");

// Defining methods for the postsController
module.exports = {
  // findAll: function (req, res) {
  //   db.Newsletters.find(req.query)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // Get the information fro the latest issue
  getNewsletter: function (req, res) {
    // db.Newsletters.findOne({ issueNumber: { $gt: 0 } }).sort({ issueNumber: -1 })
    db.Newsletters.findOne(req.query).sort({ issueNumber: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  create: function (req, res) {
    db.Newsletters.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Find by newsletter id
  findById: function (req, res) {
    db.Newsletters.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByFirebaseId: function (req, res) {
    db.Newsletters.findOne({ userId: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Newsletters.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Newsletters.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
