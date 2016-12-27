import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';
import App from './components/App';
import Tweets from './components/Tweets';
import Single from './components/Single';

import css from './styles/style.styl';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Tweets} />
				<Route path="/view/:tweetId" component={Single} />
			</Route>
		</Router>
	</Provider>
);

render(router, document.getElementById('root'));