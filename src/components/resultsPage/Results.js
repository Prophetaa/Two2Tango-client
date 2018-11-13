import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../styling/ResultsPage.css';

export default function Results(props) {
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
						<Fragment key={result.id}>
							<tr>
								<th scope="row">
									<Link to={`/profiles/${result.id}`}>
										<img
											className="results-profile-img"
											src={result.photoUrl}
											alt="profile"
										/>
									</Link>
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
				</tbody>
			</table>
			{!props.results.length && (
				<div className="text-center mt-5">
					There are currently no dancers that match your criteria. Change your
					preferences or come back soon!
				</div>
			)}
		</div>
	);
}
