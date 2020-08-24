import {createStore, combineReducers} from 'redux';
import {postReducer} from 'src/reducers/postReducer';

const rootReducer = combineReducers({
  post: postReducer,
});

export default createStore(rootReducer);
