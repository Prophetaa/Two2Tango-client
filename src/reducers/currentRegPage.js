import {CLEAN_PAGE_COUNTER,SET_PAGE_TO_2, SET_PAGE_TO_3, PREFS_POSTED } from '../actions/registration'

export default function (state = 0, {type, payload}) {
	switch (type) {
		case CLEAN_PAGE_COUNTER:
			return 1
        case SET_PAGE_TO_2:
            return 2
        case SET_PAGE_TO_3:
            return 3
        case PREFS_POSTED:
            return 4
		default:
      return state
	}
}