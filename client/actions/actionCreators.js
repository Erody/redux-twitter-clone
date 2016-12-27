// retweet count up by 1
export function incrementRetweetCoung(id) {
	return {
		type: 'INCREMENT_RETWEETS',
		id,
	}
}

// add reply to tweet
export function addReply(id, author, comment) {
	return {
		type: 'ADD_REPLY',
		id,
		author,
		comment,
	}
}

// remove reply to tweet
export function removeReply(id, index) {
	return {
		type: 'REMOVE_REPLY',
		id,
		index,
	}
}
