import React from 'react';
import Tweet from './Tweet';

class Tweets extends React.Component {
	render() {
		return(
			<div className="wrap">
				<div className="tweets">
					{this.props.tweets.map((tweet, index) => <Tweet {...this.props} key={index} index={index} />) }
				</div>
			</div>
		)
	}
}

export default Tweets;