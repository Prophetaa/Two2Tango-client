export const baseUrl = process.env.REACT_APP_ENV === 'production' ? 'https://ebay-for-tickets-api.herokuapp.com' : 'http://localhost:4000'

export const localStorageJwtKey = 'currentUserJwt'