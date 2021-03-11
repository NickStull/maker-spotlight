// const db = require("../models");
const axios = require("axios");

module.exports = {
  imgur: function () {
    console.log("imgur hit baby!");
    axios
      .get("https://api.imgur.com/3/image/W1DJ2DE", {
        headers: {
          Authorization: `Client-ID 667bcb070bc5aa9`,
        },
      })
      .then((results) => {
        console.log("imgur", results);
        res.json(results.data);
      })
      .catch((err) => console.log("error fo sho", err));
  },
};
