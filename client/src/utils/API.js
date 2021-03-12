import axios from "axios";

export default {
  // Gets all posts
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Saves new user to db
  saveUser: function (postData) {
    return axios.post("/api/users", postData);
  },

  getUser: function (id) {
    console.log("Axios getUser hit with ", id);
    return axios.get("/api/users/" + id);
  },

  imgur: function () {
    return axios.get("/api/imgur");
  },

  getMakers: function () {
    console.log("getmakers hit baby");
    return axios.get("/api/makers");
  },

  getAdvertisers: function () {
    console.log("getAdvert hit");
  },
};

// // Gets all posts
// getPosts: function() {
//     return axios.get("/api/users");
//   },
//   // Gets the post with the given id
//   getUser: function(id) {
//     return axios.get("/api/users/" + id);
//   },
