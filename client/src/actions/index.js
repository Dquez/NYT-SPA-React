import axios from "axios";
// action creators always have to return an action, and actions always have to have a type property
const ROOT_URL = "/api";

// variables to be imported and used in our reducers switch statement, instead of hard coding a string
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_NYT_ARTICLES = 'FETCH_NYT_ARTICLES';
export const SAVE_ARTICLE = 'SAVE_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';

// Gets all articles
export function getArticles () {
    const request = axios.get("/api/articles");
    return {
        type: FETCH_ARTICLES,
        payload: request
    }
}

// make a request to the NYT api
export function getArticlesFromNYT (searchObj) {
    const request = axios.post(`${ROOT_URL}/nyt`, searchObj);
    return {
        type: FETCH_NYT_ARTICLES,
        payload: request
    }
}
// Saves an article to the database
export function saveArticle (articleData) {
    const request = axios.post(`${ROOT_URL}/articles`, articleData);
    return {
        type: SAVE_ARTICLE,
        payload: request
    }
}

// Deletes the article by the given id
export function deleteArticle (id, callback) {
    axios.delete(`${ROOT_URL}/articles/${id}`)
    // .then(()=>{
        // callback invoked once data is deleted from backend
        // callback();
    // })
    return {
        type: DELETE_ARTICLE,
        payload: id
    }
}