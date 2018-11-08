import * as request from 'superagent';
import { baseUrl } from '../constants';

export const SET_RESULTS = 'SET_RESULTS';
export const GET_PROFILE = 'GET_PROFILE';

const setAllResults = results => ({
	type: SET_RESULTS,
	payload: results
});
const getProfile = profile => ({
	type: GET_PROFILE,
	payload: profile
})

export const getAllResults = () => dispatch => {
	request
		.get(`${baseUrl}/profiles`)
		.then(result => dispatch(setAllResults(result.body)))
		.catch(err => console.log(err));
};
export const getOneProfile = (id) => dispatch => {
	request
		.get(`${baseUrl}/profiles/${id}`)
		.then(result => dispatch(getProfile(result.body)))
		.catch(err => console.log(err));
};