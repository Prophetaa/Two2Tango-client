import * as request from 'superagent';
import { baseUrl } from '../constants';
import { isExpired } from '../jwt';
import { logout } from '../actions/users';

export const MESSAGE_SENT_SUCCESS = 'MESSAGE_SENT_SUCCESS';
export const SET_ALL_CHATS = 'SET_ALL_CHATS';
export const FETCHED_MESSAGES = 'FETCHED_MESSAGES'
export const RESET_MESSAGES = "RESET_MESSAGES"
export const SET_CHAT_ID = "SET_CHAT_ID"
export const CLEAN_CHAT_ID = "CLEAN_CHAT_ID";
export const CHAT_CREATED = "CHAT_CREATED";
export const USERS_MATCHED = "USERS_MATCHED"


const chatCreated = () => ({
	type: CHAT_CREATED
})

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

export const setChatId = payload => ({
	type: SET_CHAT_ID,
	payload
})	
export const resetChatId = () => ({
	type:CLEAN_CHAT_ID
})

export const matchSuccess = () => ({
	type: USERS_MATCHED
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


export const createMatch = (userTwo) => (dispatch, getState) =>{
	const state = getState();
	const jwt = state.currentUser.jwt;

	if (isExpired(jwt)) return dispatch(logout())

	request
	.post(`${baseUrl}/matchUsers/${userTwo}`)
	.set('Authorization', `Bearer ${jwt}`)
	.then(res=>dispatch(matchSuccess()))
	.catch(err => console.log(err));
}


export const createChat = (receiver) => (dispatch, getState) => {
	const state = getState();
	const jwt = state.currentUser.jwt;

	if (isExpired(jwt)) return dispatch(logout())

	request
	.post(`${baseUrl}/chats/${receiver}`)
	.set('Authorization', `Bearer ${jwt}`)
	.then(res=>dispatch(chatCreated(res)))
	.catch(err => console.log(err));
}

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


export const postLastMessage = (lastMessage, id) => (dispatch,getState) =>{
	const state = getState();
	const jwt = state.currentUser.jwt;

	if (isExpired(jwt)) return dispatch(logout());

	request
		.put(`${baseUrl}/chats/${id}`)
		.set('Authorization', `Bearer ${jwt}`)
		.send({ lastMessage })
		.then(result => console.log(result))
		.catch(err => console.log(err));

}