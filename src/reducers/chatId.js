import {SET_CHAT_ID ,CLEAN_CHAT_ID} from '../actions/messages'

export default function (state = null, {type, payload}) {
	switch (type) {
		case SET_CHAT_ID:
            return payload
            
        case CLEAN_CHAT_ID:
            return null
            
		default:
      return state
	}
}