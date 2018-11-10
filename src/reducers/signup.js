import {
	 USER_SIGNUP_FAILED
} from '../actions/users'

export default function (state = {}, {type, payload} ) {
	switch(type) {
    case USER_SIGNUP_FAILED:
      return {
        error: payload
      }

		default:
      return state
	}
}