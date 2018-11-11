import React, { Component } from 'react';
import logoWhite from '../../styling/images/logo-grey.png';

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="container footer-home">
					<div className="row">
						<div className="col-12">
							<img src={logoWhite} alt="logo" />
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
