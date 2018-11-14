import {
    RESET_MATCHES,
    MATCHES_FETCHED
} from '../actions/results'

export default function (state = null, {type, payload} ) {
   switch(type) {
   case MATCHES_FETCHED:
     return payload

    case RESET_MATCHES:
      return null
       
       default:
     return state
   }
}