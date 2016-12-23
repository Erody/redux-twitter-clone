import React from 'react';
import tweets from '../../../get_tweets/tweets';

class Tweets extends React.Component {
	render() {
		return(
			<div className="tweets">
				{tweets.map(tweet => {
					return (
						<div className="tweet">
							<p className="name">{tweet.name}</p>
							<p className="text">{tweet.text}</p>
							<p className="imageUrl">{tweet.imageUrl}</p>
						</div>
					)
				})}
			</div>
		)
	}
}

export default Tweets;