import axios from "axios";

export default {
  // Gets all articles
  getArticles: function () {
    return axios.get("/api/articles");
  },
  // make a request to the NYT api
  getArticlesFromNYT: function (searchObj) {
    return axios.post("/api/nyt", searchObj)
  },
  // Deletes the article by the given id
  deleteArticle: function (id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function (articleData) {
    return axios.post("/api/articles", articleData);
  }
};
