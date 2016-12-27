import React from 'react';
import replies from '../../../get_tweets/replies';
import Reply from './Reply';
import Tweet from './Tweet';

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
			<div className="test">
				<Tweet {...this.props} index={this.getTweetIndex()}/>
				<ul>
					{replies[this.props.params.tweetId].map((reply, index) => <Reply {...this.props} index={index} key={index} reply={reply} />)}
				</ul>
			</div>
		)
	}
}

export default Single;