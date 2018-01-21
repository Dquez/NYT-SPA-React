// const axios = require("axios");
// module.exports = app => {
//     app.post("/api/nyt", (req, res) => {
//         const {topic} = req.body;
//         console.log(topic);
//     // searchURL = searchURL + "&begin_date=" + startYear + "0101";
//     // searchURL = searchURL + "&end_date=" + endYear + "0101";
//         const key = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
//         const queryURLBase = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}&q=${topic}`;
//         return axios.get(queryURLBase);
//         // .then(function (response) {
//         //   console.log(response.data.response.docs)
//         //   return response;
//         //   })
//         //   .catch(function (error) {
//         //     console.log("JERE");
//         //     console.log(error);
//         //   });
//     });
// }

// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
//   'q': "Donald trump",
//   'begin_date': "20081220",
//   'end_date': "20180104"
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });