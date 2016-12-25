import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './components/Main';
import Tweets from './components/Tweets';
import Single from './components/Single';
import css from './styles/style.styl';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Tweets} />
			<Route path="/view/:tweetId" component={Single} />
		</Route>
	</Router>
);

render(router, document.getElementById('root'));