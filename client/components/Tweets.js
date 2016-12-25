import React from 'react';
import { Link } from 'react-router';
import tweets from '../../../get_tweets/tweets';

class Tweets extends React.Component {
	render() {
		return(
			<div className="wrap">
				<div className="tweets">
					<div className="wrapper">
						{tweets.map((tweet, index) => {
							return (
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
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default Tweets;