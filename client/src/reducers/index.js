import { combineReducers } from 'redux';
import ArticlesReducer from './reducer_articles';
// import {reducer as formReducer} from 'redux-form';

// link all reducers to a single root reducer, to create the redux store
const rootReducer = combineReducers({
  articles: ArticlesReducer
//   form: formReducer
});

export default rootReducer;