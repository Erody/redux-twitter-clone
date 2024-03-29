import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import tweets from '../../get_tweets/tweets';
import comments from '../../get_tweets/replies';

// create an object for the default data

const defaultState = {
	tweets,
	comments,
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;