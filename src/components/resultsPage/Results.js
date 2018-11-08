import React from 'react';
import { Link } from 'react-router-dom';

export default function Results(props) {
	return (
		<div>
			<table class="table table-striped">
				<thead>
					<tr>
						<th scope="col" />
						<th scope="col">Name</th>
						<th scope="col">Role</th>
						<th scope="col">Level</th>
						<th scope="col">Age</th>
						<th scope="col">Gender</th>
						<th scope="col">Height</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">
							<img
								src="images/dummy.jpg"
								alt=""
								width="100"
								style={{ borderRadius: '50%' }}
							/>
						</th>
						<td>Mark</td>
						<td>Leader</td>
						<td>Professional</td>
						<td>37</td>
						<td>Male</td>
						<td>184</td>
					</tr>
					<tr>
						<th scope="row">
							<img
								src="images/dummy.jpg"
								alt=""
								width="100"
								style={{ borderRadius: '50%' }}
							/>
						</th>
						<td>Mark</td>
						<td>Leader</td>
						<td>Professional</td>
						<td>37</td>
						<td>Male</td>
						<td>184</td>
					</tr>
					<tr>
						<th scope="row">
							<img
								src="images/dummy.jpg"
								alt=""
								width="100"
								style={{ borderRadius: '50%' }}
							/>
						</th>
						<td>Mark</td>
						<td>Leader</td>
						<td>Professional</td>
						<td>37</td>
						<td>Male</td>
						<td>184</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

{
	/* <ul>
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
</ul> */
}
