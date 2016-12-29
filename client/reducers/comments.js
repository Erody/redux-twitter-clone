function comments(state = [], action) {
	if(typeof action.id !== 'undefined') {
		return {
			...state,
			[action.id]: postComments(state[action.id], action)
		}
	}
	return state;
}


function postComments(state = [], action) {
	switch(action.type) {
		case 'ADD_REPLY':
			return [
				...state,
				{
					name: 'Anonymous',
					text: action.comment,
				}
			];
		default:
			return state;
	}
}

export default comments;