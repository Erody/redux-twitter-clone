import React from 'react';
import { Link } from 'react-router';

class Tweet extends React.Component {
	render() {
		const {tweets, index} = this.props;
		const tweet = tweets[index];
		return(
			<div className="tweet" key={index}>
				<blockquote>
					<img src={tweet.imageUrl} className="imageUrl" />
					<p className="name">{tweet.name}</p>
					<p className="text">{tweet.text}</p>
				</blockquote>
				<div className="buttons">
					<a href="/">Retweet</a>
					<Link to={`/view/${tweet.id}`}>Reply</Link>
				</div>
			</div>
		)
	}
}

export default Tweet;