import React from 'react';

class Compose extends React.Component {
	render() {
		return (
			<div className="compose">
				<form className="reply-form">
					<input type="text" placeholder="Reply..."/>
				</form>
			</div>
		)
	}
}

export default Compose;