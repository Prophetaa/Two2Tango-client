import { SET_RESULTS } from '../actions/results';

export default function(state = null, { type, payload }) {
	switch (type) {
		case SET_RESULTS:
			return payload;
		default:
			return state;
	}
}
