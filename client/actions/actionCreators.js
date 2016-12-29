// tweets

// retweet count up by 1
export function incrementRetweets(index) {
	return {
		type: 'INCREMENT_RETWEETS',
		index,
	}
}
// increment likes
export function incrementLikes(index) {
	return {
		type: 'INCREMENT_LIKES',
		index,
	}
}



// comments

// add reply to tweet
export function addReply(id, comment) {
	return {
		type: 'ADD_REPLY',
		id,
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
