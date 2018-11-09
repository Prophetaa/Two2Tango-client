import { SET_PROFILE } from '../actions/results';

export default function(state = {}, { type, payload }) {
	switch (type) {
		case SET_PROFILE:
			return payload;
		default:
			return state;
	}
}
