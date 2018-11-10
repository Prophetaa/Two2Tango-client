import React, { Component } from 'react';
import Results from './Results';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllResults } from '../../actions/results';

class ResultsListContainer extends Component {
	componentDidMount() {
		if (this.props.authenticated) {
			this.props.getAllResults();
		}
	}

	render() {
		if (!this.props.currentUser) return <Redirect to="/home" />;
		if (!this.props.results) return null;
		return (
			<div>
				<Results results={this.props.results} />
			</div>
		);
	}
}

const mapStateToProps = function(state) {
	return {
		authenticated: state.currentUser !== null,
		login: state.login,
		currentUser: state.currentUser,
		results: state.results
	};
};

export default connect(
	mapStateToProps,
	{ getAllResults }
)(ResultsListContainer);
