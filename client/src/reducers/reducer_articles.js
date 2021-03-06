import {FETCH_NYT_ARTICLES, SAVE_ARTICLE} from "../actions";
import _ from "lodash";
// state argument is not application state, only the state this reduce is responsible for
export default function (state = {}, action) {
    switch(action.type){
        case FETCH_NYT_ARTICLES:
            // set up an object of objects, in which the keys("id") correspond to each "article" object
            return NYTCleanup(action.payload);
        case SAVE_ARTICLE:
            return {...state, [action.payload.data._id]: action.payload.data};
        default:
            return state;
    }
}


function NYTCleanup (dataObj) {
    if (_.size(dataObj) > 0 && dataObj.constructor === Object) {
        const articles = dataObj.data.map(article => {
          return {
            _id: article._id,
            byline: article.byline.original || "",
            headline: article.headline.main,
            web_url: article.web_url,
            date: article.pub_date.split("T")[0],
            isSaved: false
          }
        })
        return _.mapKeys(articles, "_id");
    }
    return {};  
}