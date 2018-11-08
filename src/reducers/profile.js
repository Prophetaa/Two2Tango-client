import { GET_PROFILE } from '../actions/results';

export default function(state = {}, { type, payload }) {
	switch (type) {
		case GET_PROFILE:
			return payload;
		default:
			return state;
	}
}