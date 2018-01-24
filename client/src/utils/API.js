import axios from "axios";

export default {
  // Gets all books
  getArticles: function () {
    return axios.get("/api/articles");
  },
  getArticlesFromNYT: function (searchObj) {
    return axios.post("/api/nyt", searchObj)
  },
  // Deletes the book with the given id
  deleteArticle: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveArticle: function (articleData) {
    return axios.post("/api/articles", articleData);
  }
};
