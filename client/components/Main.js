import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
	render() {
		return (
			<div>
				<div className="logo">
					<h1>
						<Link className="logoLink" to="/">Redux-Twitter</Link>
					</h1>
				</div>
				<div>
					{React.cloneElement(this.props.children, this.props)}
				</div>
			</div>
		)
	}
}

export default Main;