const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  _id: {type: Schema.ObjectId},
  headline: { type: String, required: true },
  byline: { type: String, required: true },
  web_url: {type: String, required: true},
  date: { type: Date, default: Date.now },
  isSaved: {type: Boolean, default: false}
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;