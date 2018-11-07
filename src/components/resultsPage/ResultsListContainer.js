import React, { Component } from 'react';
import Results from './Results';
import { connect } from 'react-redux';
import { getAllResults } from '../../actions/results';

class ResultsListContainer extends Component {
	componentDidMount() {
		this.props.getAllResults();
	}

	render() {
		return (
			<div>
				<Results results={this.props.results} />
			</div>
		);
	}
}

const mapStateToProps = function(state) {
	return {
		login: state.login,
		currentUser: state.currentUser,
		results: state.results
	};
};

export default connect(
	mapStateToProps,
	{ getAllResults }
)(ResultsListContainer);
