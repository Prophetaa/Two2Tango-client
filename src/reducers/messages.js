import { SET_ALL_MESSAGES } from '../actions/messages';

export default function(state = null, { type, payload }) {
	switch (type) {
		case SET_ALL_MESSAGES:
			return payload;
		default:
			return state;
	}
}
