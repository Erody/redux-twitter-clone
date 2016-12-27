import React from 'react';

class Reply extends React.Component {
	render() {
		const { name, text } = this.props.reply;
		return (
			<div className="reply">
				<h3>
					{name}
				</h3>
				<p>
					{text}
				</p>
			</div>
		)
	}
}

export default Reply;