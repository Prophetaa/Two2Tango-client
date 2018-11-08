import React from 'react';
import { Link } from 'react-router-dom';

export default function Results(props) {
	return (
		<div>
			<h1 className="text-center p-3 ">Your future tango partners</h1>
			<table class="table table-striped">
				<thead>
					<tr>
						<th scope="col" />
						<th scope="col" className="text-uppercase">
							Name
						</th>
						<th scope="col" className="text-uppercase">
							Role
						</th>
						<th scope="col" className="text-uppercase">
							Level
						</th>
						<th scope="col" className="text-uppercase">
							Age
						</th>
						<th scope="col" className="text-uppercase">
							Gender
						</th>
						<th scope="col" className="text-uppercase">
							Height
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">
							<img
								className="results-profile-img"
								src="images/dummy.jpg"
								alt=""
							/>
						</th>
						<td className="align-middle">Mark</td>
						<td>Leader</td>
						<td>Professional</td>
						<td>37</td>
						<td>Male</td>
						<td>184</td>
					</tr>
					<tr>
						<th scope="row">
							<img
								className="results-profile-img"
								src="images/dummy.jpg"
								alt=""
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
								className="results-profile-img"
								src="images/dummy.jpg"
								alt=""
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
