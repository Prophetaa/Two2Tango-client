import { PREFS_FETCHED } from '../actions/registration'

export default function (state = {}, {type, payload} ) {
   switch(type) {
   case PREFS_FETCHED:
     return payload
       default:
     return state
   }
}