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
					<div className="button">
						<span className="count">{tweet.retweet_count}</span>
						<span className="fa fa-retweet clickable" onClick={this.props.incrementRetweets.bind(null, index)} />
					</div>

					<div className="button">
						<span className="count">{tweet.favorite_count}</span>
						<span className="fa fa-heart clickable" onClick={this.props.incrementLikes.bind(null, index)} />
					</div>

					<div className="button">
						<Link to={`/view/${tweet.id}`}>
							<span className="fa fa-reply clickable" />
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Tweet;