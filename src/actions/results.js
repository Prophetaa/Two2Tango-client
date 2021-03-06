import * as request from 'superagent';
import { baseUrl } from '../constants';
import { isExpired } from '../jwt';
import { logout } from '../actions/users';

export const SET_RESULTS = 'SET_RESULTS';
export const SET_PROFILE = 'SET_PROFILE';
export const UPDATED_PROFILE = 'UPDATED_PROFILE';
export const SET_LATEST_PROFILES = 'SET_LATEST_PROFILES';
export const MATCHES_FETCHED = 'MATCHES_FETCHED'
export const RESET_MATCHES = "RESET_MATCHES"

const setAllResults = results => ({
	type: SET_RESULTS,
	payload: results
});

const setProfile = profile => ({
	type: SET_PROFILE,
	payload: profile
});

const setLatestProfiles = profiles => ({
	type: SET_LATEST_PROFILES,
	payload: profiles
});


const matchesFetched = payload => ({
	type: MATCHES_FETCHED,
	payload
})


export const cleanMatches = () => ({
	type:RESET_MATCHES
})


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

export const getMyProfile = () => (dispatch, getState) => {
	const state = getState();
	const jwt = state.currentUser.jwt;

	if (isExpired(jwt)) return dispatch(logout());

	request
		.get(`${baseUrl}/my-profile`)
		.set('Authorization', `Bearer ${jwt}`)
		.then(result => dispatch(setProfile(result.body)))
		.catch(err => console.log(err));
};

export const getLatestProfiles = () => dispatch => {
	request
		.get(`${baseUrl}/latest-profiles`)
		.then(result => dispatch(setLatestProfiles(result.body)))
		.catch(err => console.log(err));
};

export const updateProfile = data => (dispatch, getState) => {
	const state = getState();
	const jwt = state.currentUser.jwt;

	if (isExpired(jwt)) return dispatch(logout());

	request
		.put(`${baseUrl}/profiles`)
		.set('Authorization', `Bearer ${jwt}`)
		.send(data)
		.then(result => dispatch(updatedProfile(result.body)))
		.catch(err => console.log(err));
};

export const getUserMatches = () => (dispatch) =>{
	request
		.get(`${baseUrl}/matchedUsers`)
		.then(result => dispatch(matchesFetched(JSON.stringify(result.body))))
		.catch(err => console.log(err));
}