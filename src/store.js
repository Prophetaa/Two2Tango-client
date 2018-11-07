import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reducer from './reducers/index'
import ReduxThunk from "redux-thunk";

const reducers = combineReducers(reducer)

const devTools =
 (window ).__REDUX_DEVTOOLS_EXTENSION__ &&
 (window ).__REDUX_DEVTOOLS_EXTENSION__();

const enhancer = compose(
 applyMiddleware(
   ReduxThunk
 ),
 devTools
);

export default createStore(reducers, enhancer);