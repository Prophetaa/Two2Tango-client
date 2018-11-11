import { SET_LATEST_PROFILES } from '../actions/results';

export default function(state = null, { type, payload }) {
	switch (type) {
		case SET_LATEST_PROFILES:
			return payload;
		default:
			return state;
	}
}
