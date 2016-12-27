import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tweets from './tweets';
import comments from './comments';

const rootReducer = combineReducers({tweets, comments, routing: routerReducer});

export default rootReducer;