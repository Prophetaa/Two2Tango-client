import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styling/Footer.css'
import logoWhite from '../../styling/images/logo.png';
import facebook from '../../styling/images/facebook.png';
import tweet from '../../styling/images/tweet.png';
import instagram from '../../styling/images/instagram.png';


export default class Footer extends Component {
	render() {
		return (
			<footer className="page-footer font-small blue pt-4">
    		<div className="container text-center text-md-left">
      		<div className="row">
						<div className="col mt-md-0 mt-3">
							<h5 className="text-uppercase">NewsLetter</h5>
          		<p>
							<form class="input-group">
            		<input type="text" class="form-control form-control-sm" placeholder="Your email" aria-label="Your email" aria-describedby="basic-addon2" />
            		<div class="input-group-append">
              		<button class="btn btn-sm btn-outline-white" type="button">Sign up</button>
            		</div>
          		</form>
							</p>
						</div>
						<hr className="clearfix w-100 d-md-none pb-3" />
        		<div className="col mb-md-0 mb-3">
            	<h6 className="text-uppercase">Contacts</h6>
            	<ul className="list-unstyled">
            		<li>
                	<Link className="link-footer" to="#!">Two2Tango@email.com</Link>
              	</li>
              	<li>
                	<Link className="link-footer" to="#!">admin@email.com</Link>
              	</li>
            	</ul>
          	</div>
          	<div className="col-md-3 mb-md-0 mb-3">
							<h6 className="text-uppercase">Social</h6>
							<ul className="list-unstyled">
								<li className="list-footer">
									<Link to="#!" className="link-footer">
										<img src={facebook} alt="fb"/>
									</Link>
								</li>
								<li className="list-footer">
									<Link to="#!" className="link-footer">
										<img src={tweet} alt="tw"/>
									</Link>
								</li>
								<li className="list-footer">
									<Link to="#!" className="link-footer">
										<img src={instagram} alt="ig"/>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="footer-copyright text-center py-3">© 2018 Copyright:
					<Link to="#!" className="link-footer"> Two2Tango.com</Link>
				</div>
			</footer>
		);
	}
}
