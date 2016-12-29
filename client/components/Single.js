import React from 'react';
import replies from '../../../get_tweets/replies';
import Reply from './Reply';
import Tweet from './Tweet';
import Compose from './Compose';

class Single extends React.Component {
	constructor() {
		super();

		this.getTweetIndex = this.getTweetIndex.bind(this);
	}
	getTweetIndex() {
		return this.props.tweets.map(tweet => tweet.id).indexOf(parseInt(this.props.params.tweetId));
	}
	render() {
		return (
			<div className="tweets">
				<Tweet {...this.props} index={this.getTweetIndex()}/>
				<Compose/>
				<div className="replies">
					{this.props.comments[this.props.params.tweetId].map((reply, index) => <Reply {...this.props} index={index} key={index} reply={reply} />)}
				</div>
			</div>
		)
	}
}

export default Single;