import React from 'react';

export default function messages(props) {
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
						<div className="media-body message">
							<h5 className="mt-0 mb-1">List-based media object</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
							scelerisque ante sollicitudin. Cras purus odio, vestibulum in
							vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
							nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
