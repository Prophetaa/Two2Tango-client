import {USER_LOGIN_FAILED, CLEAR_USER_ERROR} from '../actions/users'

export default function (state = {}, {type, payload}) {
	switch (type) {
		case USER_LOGIN_FAILED:
			return {
				error: payload
			}
		case  CLEAR_USER_ERROR:
			return {}

		default:
      return state
	}
}