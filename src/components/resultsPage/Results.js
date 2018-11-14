import React, { Fragment } from 'react';
import '../../styling/ResultsPage.css';
import history from '../../history'

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
						<th scope="col" className="ageRow text-uppercase">
							Age
						</th>
						<th scope="col" className="genderRow text-uppercase">
							Gender
						</th>
						<th scope="col" className="heightRow text-uppercase">
							Height
						</th>
					</tr>
				</thead>
				<tbody>
					{props.results.map(result => (
						<Fragment key={result.id}>
							<tr className="resultsRow" onClick={()=> history.replace(`/profiles/${result.id}`) }>
								<th scope="row">
										<img
											className="results-profile-img rounded-circle"
											src={result.photoUrl}
											alt="profile"
										/>
								</th>
								<td className="align-middle">
									{result.firstName} {result.lastName}
								</td>
								<td className="align-middle">{result.role}</td>
								<td className="align-middle">{result.level}</td>
								<td className="ageRow align-middle">{result.age}</td>
								<td className="genderRow align-middle">{result.gender}</td>
								<td className="heightRow align-middle">{result.height}</td>
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
