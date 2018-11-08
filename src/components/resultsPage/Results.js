import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom';

export default function Results(props) {
	console.log(props.results);
	return (
		<div>
			<h1 className="text-center p-3 ">Your future tango partners</h1>
			<table className="table table-striped">
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
					{props.results.map(result => (
						<Fragment key={result}>
							<tr>
								<th scope="row">
									<img
										className="results-profile-img"
										src={result.photoUrl}
										alt="profile"
									/>
								</th>
								<td className="align-middle">
									{result.firstName} {result.lastName}
								</td>
								<td className="align-middle">{result.role}</td>
								<td className="align-middle">{result.level}</td>
								<td className="align-middle">{result.age}</td>
								<td className="align-middle">{result.gender}</td>
								<td className="align-middle">{result.height}</td>
							</tr>
						</Fragment>
					))}

					<tr>
						<th scope="row">
							<img
								className="results-profile-img"
								src="images/dummy.jpg"
								alt=""
							/>
						</th>
						<td className="align-middle">Mark</td>
						<td className="align-middle">Leader</td>
						<td className="align-middle">Professional</td>
						<td className="align-middle">37</td>
						<td className="align-middle">Male</td>
						<td className="align-middle">184</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
