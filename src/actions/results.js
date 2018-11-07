import * as request from 'superagent';
import { baseUrl } from '../constants';

export const SET_RESULTS = 'SET_RESULTS';

const setAllResults = results => ({
	type: SET_RESULTS,
	payload: results
});

export const getAllResults = () => dispatch => {
	request
		.get(`${baseUrl}/profiles`)
		.then(result => dispatch(setAllResults(result.body)))
		.catch(err => console.log(err));
};
