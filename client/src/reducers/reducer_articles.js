// import {FETCH_ARTICLES, DELETE_ARTICLE, FETCH_NYT_ARTICLES, SAVE_ARTICLE} from "../actions";
// import _ from "lodash";
// state argument is not application state, only the state this reduce is responsible for
export default function (state = {}, action) {
    console.log(action.payload);
    return state;
}


// if (Object.keys(response).length > 0 && response.constructor === Object) {
//     const articles = response.data.map(article => {
//       return {
//         _id: article._id,
//         byline: article.byline.original,
//         headline: article.headline.main,
//         web_url: article.web_url,
//         date: article.pub_date.split("T")[0],
//         isSaved: false
//       }
//     })
//     self.setState({
//       articles
//     });
//   } 