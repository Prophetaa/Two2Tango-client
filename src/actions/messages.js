import * as request from 'superagent';
import { baseUrl } from '../constants';
import { isExpired } from '../jwt';
import { logout } from '../actions/users';

export const MESSAGE_SENT_SUCCESS = 'MESSAGE_SENT_SUCCESS';
export const SET_ALL_CHATS = 'SET_ALL_CHATS';
export const FETCHED_MESSAGES = 'FETCHED_MESSAGES'
export const RESET_MESSAGES = "RESET_MESSAGES"


const setAllMessages = chats => ({
	type: SET_ALL_CHATS,
	payload: chats
});

const receivedMessages = messages => ({
	type: FETCHED_MESSAGES,
	payload: messages
})

const updatedMessages = payload => ({
	type: MESSAGE_SENT_SUCCESS,
	payload
})

export const resetMessages = () => ({
	type: RESET_MESSAGES
})

export const getAllChats = () => (dispatch, getState) => {
	const state = getState();
	const jwt = state.currentUser.jwt;

	if (isExpired(jwt)) return dispatch(logout());

	request
		.get(`${baseUrl}/chats`)
		.set('Authorization', `Bearer ${jwt}`)
		.then(result => dispatch(setAllMessages(result.body)))
		.catch(err => console.log(err));
};


export const renderMessageContainer = (id) => (dispatch, getState) => {
	const state = getState();
	const jwt = state.currentUser.jwt;

	if (isExpired(jwt)) return dispatch(logout());

	request
		.get(`${baseUrl}/${id}/messages`)
		.set('Authorization', `Bearer ${jwt}`)
		.then(result => dispatch(receivedMessages(result.body)))
		.catch(err => console.log(err));
}


export const postMessage = (content, id) => (dispatch, getState) => {
	const state = getState();
	const jwt = state.currentUser.jwt;

	if (isExpired(jwt)) return dispatch(logout());

	request
		.post(`${baseUrl}/${id}/messages`)
		.set('Authorization', `Bearer ${jwt}`)
		.send({ content })
		.then(result => dispatch(updatedMessages(result.body)))
		.catch(err => console.log(err));

}