import { SET_PROFILE } from '../actions/results';

export default function(state = null, { type, payload }) {
	switch (type) {
		case SET_PROFILE:
			return payload;
		default:
			return state;
	}
}
