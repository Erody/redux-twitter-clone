import React from 'react';

class Reply extends React.Component {
	render() {
		const { name, text } = this.props.reply;
		return (
			<div className="tweet reply" >
				<blockquote>
					<p className="name">{name}</p>
					<p className="text">{text}</p>
				</blockquote>
			</div>
		)
	}
}

export default Reply;