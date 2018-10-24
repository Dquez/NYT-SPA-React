import {DELETE_ARTICLE, FETCH_ARTICLES} from "../actions";
import _ from "lodash";
// state argument is not application state, only the state this reduce is responsible for
export default function (state = {}, action) {
    switch(action.type){
        case FETCH_ARTICLES:
            return action.payload.data;
        case DELETE_ARTICLE:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}
