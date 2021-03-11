import axios from "axios";

export default {
  // Gets all posts
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Saves new user to db
  saveUser: function(postData) {
    return axios.post("/api/users", postData);
  }
};

// // Gets all posts
// getPosts: function() {
//     return axios.get("/api/users");
//   },
//   // Gets the post with the given id
//   getPost: function(id) {
//     return axios.get("/api/users/" + id);
//   },
//   // Deletes the post with the given id
//   deletePost: function(id) {
//     return axios.delete("/api/users/" + id);
//   },
//   // Saves a post to the database
//   saveUser: function(postData) {
//     return axios.post("/api/users", postData);
//   }