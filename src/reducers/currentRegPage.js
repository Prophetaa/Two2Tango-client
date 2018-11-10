import {SET_PAGE_TO_1,SET_PAGE_TO_2, SET_PAGE_TO_3, SET_PAGE_TO_4 } from '../actions/registration'

export default function (state = 0, {type, payload}) {
	switch (type) {
		case SET_PAGE_TO_1:
			return 1
        case SET_PAGE_TO_2:
            return 2
        case SET_PAGE_TO_3:
            return 3
        case SET_PAGE_TO_4:
            return 4
		default:
      return state
	}
}