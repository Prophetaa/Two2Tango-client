import React from 'react';
import '../../styling/MessagesPage.css';

export default function messages(props) {
	console.log(props);
	return (
		<div className="container">
			<ul className="list-unstyled">
				{props.messages.map(message => (
					<li key={message.id} className="media">
						<img
							className="mr-3"
							src="https://mbtskoudsalg.com/images/vector-envelope-silhouette-1.png"
							alt=""
							width="50"
						/>
						<div className="media-body message">{message.content}</div>
					</li>
				))}
			</ul>
		</div>
	);
}
