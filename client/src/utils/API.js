import axios from "axios";

export default {
  // Gets all books
  getArticles: function () {
    return axios.get("/api/articles");
  },
  getArticlesFromNYT: function (searchObj) {
    return axios.post("/api/nyt", searchObj)
    // .then(data => {
    //     console.log(data);
    // }).catch(function (error) {
    //   console.log(error);
    // });
  },
  // // Deletes the book with the given id
  // deleteBook: function (id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  // saveBook: function (articleData) {
  //   return axios.post("/api/articles", articleData);
  // },
  // // Gets the book with the given id
  // getBook: function (id) {
  //   return axios.get("/api/books/" + id);
  // },
};
