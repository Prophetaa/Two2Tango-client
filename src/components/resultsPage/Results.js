import React from 'react';
import { Link } from 'react-router-dom';

export default function Results() {
	return (
		<div>
			<ul>
				<li>
					<div className="result-item">
						<div className="card-body">
							<h5 className="card-title">Dummy person</h5>
							<img
								src="images/dummy.jpg"
								alt=""
								width="100"
								style={{ borderRadius: '50%' }}
							/>
							<p className="card-text">
								With supporting text below as a natural lead-in to additional
								content.
							</p>
							<Link to="" className="btn btn-primary">
								Show profile
							</Link>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}
