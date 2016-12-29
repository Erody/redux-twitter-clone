function tweets(state = [], action) {
	const i = action.index;
	switch(action.type) {
		case 'INCREMENT_LIKES':
			return [
				...state.slice(0, i),
				{...state[i], favorite_count: state[i].favorite_count + 1},
				...state.slice(i + 1),
			];
		case 'INCREMENT_RETWEETS':
			return [
				...state.slice(0, i),
				{...state[i], retweet_count: state[i].retweet_count + 1},
				...state.slice(i + 1),
			];
		default:
			return state;
	}
}

export default tweets;