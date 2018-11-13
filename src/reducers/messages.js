import {
    FETCHED_MESSAGES,
    MESSAGE_SENT_SUCCESS,
    RESET_MESSAGES
} from '../actions/messages'

export default function (state = null, {type, payload} ) {
   switch(type) {
   case FETCHED_MESSAGES:
     return payload

    case MESSAGE_SENT_SUCCESS:
      return [...state, payload]

    case RESET_MESSAGES: 
       return null
       
       default:
     return state
   }
}