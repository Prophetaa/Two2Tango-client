import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styling/Footer.css';
import facebook from '../../styling/images/facebook.svg';
import tweet from '../../styling/images/twitter.svg';
import instagram from '../../styling/images/instagram.svg';

import { connect } from 'react-redux'
 class Footer extends Component {
	render() {
		if(this.props.chatId) return null
		return (
			<footer className="page-footer font-small pt-4">
				<div className="container text-center text-md-left">
					<div className="row">
						<div className="col mt-md-0 mt-3">
							<h5 className="text-uppercase">NewsLetter</h5>       		
							<form className="input-group">
            		<input type="text" className="form-control form-control-sm" placeholder="Your email" aria-label="Your email" aria-describedby="basic-addon2" />
            		<div className="input-group-append">
              		<button className="btn btn-sm btn-outline-white" type="button">Sign up</button>
            		</div>
          		</form>
						</div>
						<hr className="clearfix w-100 d-md-none pb-3" />
        		<div className="col-md-4 mb-md-0 mb-3">
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
          	<div className="col-xs-12 mb-md-0 mb-3">
							<h6 className="text-uppercase">Social</h6>
							<ul className="list-unstyled">
								<li className="list-footer">
									<Link to="#!" className="link-footer">
										<img src={facebook} alt="fb" className="icons-footbar"/>
									</Link>
								</li>
								<li className="list-footer">
									<Link to="#!" className="link-footer">
										<img src={tweet} alt="tw" className="icons-footbar"/>
									</Link>
								</li>
								<li className="list-footer">
									<Link to="#!" className="link-footer">
										<img src={instagram} alt="ig" className="icons-footbar"/>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright text-center py-3">
					© 2018 Copyright:
					<Link to="#!" className="link-footer">
						{' '}
						Two2Tango.com
					</Link>
				</div>
			</footer>
		);
	}
}

const mapStateToProps = function(state) {
	return {
		chatId: state.chatId
	};
  };
  export default connect(
	mapStateToProps
  )(Footer);
  