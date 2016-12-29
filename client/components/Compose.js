import React from 'react';

class Compose extends React.Component {
	constructor() {
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		const id = this.props.params.tweetId;
		const comment = this.refs.comment.value;
		this.props.addReply(id, comment);
		this.refs.commentForm.reset();
	}
	render() {
		return (
			<div className="compose">
				<form className="reply-form" ref="commentForm" onSubmit={this.handleSubmit}>
					<input type="text" ref="comment" placeholder="Reply..."/>
					<input type="submit" hidden/>
				</form>
			</div>
		)
	}
}

export default Compose;