import axios from "axios";

export default {
  // Gets all posts
  getUsers: function () {
    // console.log("Axios getUsers hit");
    return axios.get("/api/users");
  },
  // Saves new user to db
  saveUser: function (postData) {
    // console.log("saveuser");
    return axios.post("/api/users", postData);
  },

  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },

  imgur: function () {
    return axios.get("/api/imgur");
  },

  getMakers: function () {
    // console.log("getmakers hit baby");
    return axios.get("/api/makers");
  },

  getAdvertisers: function () {
    // console.log("getAdvert hit");
    return axios.get("/api/advertisers");
  },

  getCandidates: function () {
    return axios.get("/api/candidates");
  },

  getUserByName: function (name) {
    // console.log("getUserByName hit with", name);
    return axios.get("/api/users/name/" + name);
  },

  getAdmin: function () {
    // console.log("getAdmin hit baby");

    return axios.get("/api/admin");
  },

  editUser: function (userData) {
    // console.log('editing user', userData);
    return axios.put("/api/users/" + userData.userId, userData);
  },

  subscribe: function (userData) {
    // console.log("subscribe hit");
    return axios.post("/api/subscribe", userData);
  },

  getNewsletter: function () {
    console.log("issue hit");
    return axios.get("/api/newsletters");
  }
};

// // Gets all posts
// getPosts: function() {
//     return axios.get("/api/users");
//   },
//   // Gets the post with the given id
//   getUser: function(id) {
//     return axios.get("/api/users/" + id);
//   },
