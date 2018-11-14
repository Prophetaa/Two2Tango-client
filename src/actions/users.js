import * as request from 'superagent';
import { baseUrl } from '../constants';
import { isExpired } from '../jwt';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const GET_USER = 'GET_USER';
export const CLEAR_USER_ERROR = "CLEAR_USER_ERROR";

export const USER_LOGOUT = 'USER_LOGOUT';

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED';

export const USER_UPDATED_PARAMETERS = 'USER_UPDATED_PARAMETERS';

export const logout = () => ({
	type: USER_LOGOUT
});

const userLoginSuccess = payload => ({
	type: USER_LOGIN_SUCCESS,
	payload
});

const userLoginFailed = error => ({
	type: USER_LOGIN_FAILED,
	payload: error || 'Unknown error'
});

export const clearError = () =>({
	type: CLEAR_USER_ERROR
})

const userSignupFailed = error => ({
	type: USER_SIGNUP_FAILED,
	payload: error || 'Unknown error'
});

const userSignupSuccess = () => ({
	type: USER_SIGNUP_SUCCESS
});

const updatedParameters = () => ({
	type: USER_UPDATED_PARAMETERS
});

export const login = (email, password) => dispatch =>
	request
		.post(`${baseUrl}/logins`)
		.send({ email, password })
		.then(result => dispatch(userLoginSuccess(result.body)))
		.catch(err => {
			if (err.status === 400) {
				dispatch(userLoginFailed(err.response.body.message));
			} else {
				console.error(err);
			}
		});

export const signup = (email, password) => dispatch =>
	request
		.post(`${baseUrl}/users`)
		.send({ email, password })
		.then(_ => {
			dispatch(userSignupSuccess());
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch(userSignupFailed(err.response.body.message));
			} else {
				console.error(err);
			}
		});

export const updateParameters = password => (dispatch, getState) => {
	const state = getState();
	const jwt = state.currentUser.jwt;

	if (isExpired(jwt)) return dispatch(logout());

	request
		.put(`${baseUrl}/users`)
		.set('Authorization', `Bearer ${jwt}`)
		.send({ password })
		.then(result => dispatch(updatedParameters(result.body)))
		.catch(err => console.log(err));
};

export const deleteAccount = () => (dispatch, getState) => {
	const state = getState();
	const jwt = state.currentUser.jwt;

	if (isExpired(jwt)) return dispatch(logout());

	request
		.delete(`${baseUrl}/users`)
		.set('Authorization', `Bearer ${jwt}`)
		.then(result => dispatch(updatedParameters(result.body)))
		.catch(err => console.log(err));
};
