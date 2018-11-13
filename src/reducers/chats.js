import { SET_ALL_CHATS } from '../actions/messages';

export default function(state = null, { type, payload }) {
	switch (type) {
		case SET_ALL_CHATS:
			return payload;
		default:
			return state;
	}
}
