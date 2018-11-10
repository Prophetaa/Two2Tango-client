import * as request from 'superagent';
import { baseUrl } from '../constants';
import { isExpired } from '../jwt';
import { logout } from '../actions/users';

export const MESSAGE_SENT_SUCCES = 'MESSAGE_SENT_SUCCES';
export const SET_ALL_MESSAGES = 'SET_ALL_MESSAGES';

const messageSent = () => ({
	type: MESSAGE_SENT_SUCCES
});

const setAllMessages = messages => ({
	type: SET_ALL_MESSAGES,
	payload: messages
});

export const getAllMessages = () => (dispatch, getState) => {
	const state = getState();
	const jwt = state.currentUser.jwt;

	if (isExpired(jwt)) return dispatch(logout());

	request
		.get(`${baseUrl}/messages`)
		.set('Authorization', `Bearer ${jwt}`)
		.then(result => dispatch(setAllMessages(result.body)))
		.catch(err => console.log(err));
};

export const sendMessage = (content, userId) => (dispatch, getState) => {
	const state = getState();
	const jwt = state.currentUser.jwt;

	if (isExpired(jwt)) return dispatch(logout());

	request
		.post(`${baseUrl}/messages`)
		.set('Authorization', `Bearer ${jwt}`)
		.send({ content, userId })
		.then(result => dispatch(messageSent()))
		.catch(err => console.log(err));
};
