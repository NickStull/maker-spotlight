import axios from "axios";
// import FormData from "form-data";
// var data = new FormData();

// var config = {
//   method: "get",
//   url: "https://api.imgur.com/3/image/W1DJ2DE",
//   headers: {
//     Authorization: "Client-ID 667bcb070bc5aa9",
//     // ...data.getHeaders(),
//   },
//   data: data,
// };

export default {
  // Gets all posts
  // getUsers: function () {
  //   return
  //   });
  // },

  imgur: function () {
    return axios.get("/test/imgur");
  },

  // .then((res) => {
  //   console.log("deedly dee", res.data);
  // })
  // .catch((error) => {
  //   console.error("error for sure", error);
  // });
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
//   savePost: function(postData) {
//     return axios.post("/api/users", postData);
//   }
