import * as request from 'superagent';
import { baseUrl } from '../constants';

import { isExpired } from '../jwt';
import { logout } from './users';

export const SET_PAGE_TO_1 = 'SET_PAGE_TO_1';
export const SET_PAGE_TO_2 = 'SET_PAGE_TO_2';
export const SET_PAGE_TO_3 = 'SET_PAGE_TO_3';
export const SET_PAGE_TO_4 = "SET_PAGE_TO_4"

export const resetRegPage = () => ({
  type: SET_PAGE_TO_1
});

export const goToSecondPage = () => ({
  type: SET_PAGE_TO_2
});

export const goToThirdPage = () => ({
  type: SET_PAGE_TO_3
});

export const goToResults = () => ({
	type: SET_PAGE_TO_4
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
    .catch(err => {
      console.error(err);
    });
};


export const postPreferences = (city,gender, height, role, level) => async(dispatch, getState) => {
	let state = getState();
	if (!state.currentUser) return null;
	let jwt = state.currentUser.jwt;
	if (isExpired(jwt)) return dispatch(logout());
	request
	  .post(`${baseUrl}/preferences`,console.log(level))
	  .set('Authorization', `Bearer ${jwt}`)
	  .send({city, gender, height, role,level })
	  .catch(err => {
		console.error(err);
	  });
  };