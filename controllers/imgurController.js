// const db = require("../models");
const axios = require("axios");

module.exports = {
  imgur: function (req, res) {
    axios
      .get("https://api.imgur.com/3/image/W1DJ2DE", {
        headers: {
          Authorization: `Client-ID 667bcb070bc5aa9`,
        },
      })
      .then((results) => {
        console.log("imgur", results.data.data.link);
        res.json(results.data.data.link);
      })
      .catch((err) => console.log("error fo sho", err));
  },
};
