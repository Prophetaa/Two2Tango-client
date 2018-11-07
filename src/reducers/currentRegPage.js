import {SET_PAGE_TO_1,SET_PAGE_TO_2, SET_PAGE_TO_3 } from '../actions/registration'

export default function (state = 1, {type, payload}) {
	switch (type) {
		case SET_PAGE_TO_1:
			return 1
        case SET_PAGE_TO_2:
            return 2
        case SET_PAGE_TO_3:
            return 3
		default:
      return state
	}
}