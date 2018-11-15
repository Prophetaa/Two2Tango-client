import * as request from 'superagent';
import { baseUrl } from '../constants';

import { isExpired } from '../jwt';
import { logout } from './users';

export const CLEAN_PAGE_COUNTER = 'CLEAN_PAGE_COUNTER';
export const SET_PAGE_TO_2 = 'SET_PAGE_TO_2';
export const SET_PAGE_TO_3 = 'SET_PAGE_TO_3';
export const PREFS_POSTED = "PREFS_POSTED"
export const PREFS_FETCHED = "PREFS_FETCHED"
export const PROFILE_CREATED = "PROFILE_CREATED"

export const resetRegPage = () => ({
  type: CLEAN_PAGE_COUNTER
});

export const goToSecondPage = () => ({
  type: SET_PAGE_TO_2
});

export const goToThirdPage = () => ({
  type: SET_PAGE_TO_3
});

export const goToResults = () => ({
	type: PREFS_POSTED
})

export const preferencesFetched = payload =>({
  type: PREFS_FETCHED,
  payload
})

export const profileCreated = () =>({
  type: PROFILE_CREATED
})

export const postProfile = (
  firstName,
  lastName,
  role,
  level,
  photoUrl,
  gender,
  age,
  height,
  city
) => async(dispatch, getState) => {
  let state = getState();
  if (!state.currentUser) return null;
  let jwt = state.currentUser.jwt;
  if (isExpired(jwt)) return dispatch(logout());

  request
    .post(`${baseUrl}/profiles`)
    .set('Authorization', `Bearer ${jwt}`)
    .send( {firstName,
		lastName,
		role,
		level,
		photoUrl,
		gender,
		age,
		height,
    city})
    .then(res=> dispatch(profileCreated()))
    .catch(err => {
      console.error(err);
    });
};


export const postPreferences = (city , gender, height, role, level, age) => async(dispatch, getState) => {
	let state = getState();
	if (!state.currentUser) return null;
	let jwt = state.currentUser.jwt;
	if (isExpired(jwt)) return dispatch(logout());
	request
	  .post(`${baseUrl}/preferences`)
	  .set('Authorization', `Bearer ${jwt}`)
    .send({city, gender, height, role,level, age })
    .then(res=> dispatch(goToResults()))
	  .catch(err => {
		console.error(err);
	  });
  };

  export const fetchPreferences = () => (dispatch,getState) => {
  	let state = getState();
	if (!state.currentUser) return null;
	let jwt = state.currentUser.jwt;
	if (isExpired(jwt)) return dispatch(logout());
	request
	  .get(`${baseUrl}/preferences`)
	  .set('Authorization', `Bearer ${jwt}`)
    .then(res => dispatch(preferencesFetched(res.body)))
	  .catch(err => {
		console.error(err);
	  });
  };

  export const updatePreferences = (city , gender, height, role, level, age) => (dispatch, getState) => {
    const state = getState();
    const jwt = state.currentUser.jwt;
  
    if (isExpired(jwt)) return dispatch(logout());
  
    request
      .put(`${baseUrl}/preferences`)
      .set('Authorization', `Bearer ${jwt}`)
      .send({city, gender, height, role, level, age})
      .then(res=> console.log(res.body))
      .catch(err => console.log(err));
  };