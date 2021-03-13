// const db = require("../models");
const axios = require("axios");
let query = "W1DJ2DE";
module.exports = {
  imgur: function (req, res) {
    axios
      .get("https://api.imgur.com/3/image/" + query, {
        headers: {
          Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
        },
      })
      .then((results) => {
        console.log("imgur", results.data.data.link);
        res.json(results.data.data.link);
      })
      .catch((err) => console.log("error fo sho", err));
  },
};
