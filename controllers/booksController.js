const path = require("path");
const router = require("express").Router();
const db = require("../models");
const axios = require("axios");
const articleFunctions = {
  findAll: function (req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}

router.get("/api/articles", articleFunctions.findAll)

router.post("/api/nyt", (req, res) => {
  let {topic, startYear, endYear} = req.body;
  if(topic.includes(" ")){
    topic = topic.split(" ").join("");
  }
  const key = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
  const queryURLBase = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}&q=${topic}&begin_date=${startYear}&begin_date=${endYear}`;
  axios.get(queryURLBase)
  .then(function (response) {
    res.json(response.data.response.docs);
    })
    .catch(function (error) {
      console.log(error);
    });
});
router.post("/api/articles", articleFunctions.create)

router.delete("/api/books/:id", articleFunctions.remove)

// router.get("/api/books/:id", articleFunctions.findById)

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
