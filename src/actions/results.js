import * as request from 'superagent';
import { baseUrl } from '../constants';
import { isExpired } from '../jwt';
import { logout } from '../actions/users';

export const SET_RESULTS = 'SET_RESULTS';
export const SET_PROFILE = 'SET_PROFILE';
export const UPDATED_PROFILE = 'UPDATED_PROFILE';

const setAllResults = results => ({
	type: SET_RESULTS,
	payload: results
});

const setProfile = profile => ({
	type: SET_PROFILE,
	payload: profile
});

const updatedProfile = profile => ({
	type: UPDATED_PROFILE,
	payload: profile
});

export const getAllResults = () => (dispatch, getState) => {
	const state = getState();
	const jwt = state.currentUser.jwt;

	if (isExpired(jwt)) return dispatch(logout());

	request
		.get(`${baseUrl}/profiles`)
		.set('Authorization', `Bearer ${jwt}`)
		.then(result => dispatch(setAllResults(result.body)))
		.catch(err => console.log(err));
};

export const getOneProfile = id => (dispatch, getState) => {
	const state = getState();
	const jwt = state.currentUser.jwt;

	if (isExpired(jwt)) return dispatch(logout());

	request
		.get(`${baseUrl}/profiles/${id}`)
		.set('Authorization', `Bearer ${jwt}`)
		.then(result => dispatch(setProfile(result.body)))
		.catch(err => console.log(err));
};

export const updateProfile = (profileId, data) => (dispatch, getState) => {
	const state = getState();
	const jwt = state.currentUser.jwt;

	if (isExpired(jwt)) return dispatch(logout());

	request
		.put(`${baseUrl}/profiles`)
		.set('Authorization', `Bearer ${jwt}`)
		.send({ profileId, data })
		.then(result => dispatch(updatedProfile(result.body)))
		.catch(err => console.log(err));
};
