import {
  ADD_ERRORS,
  CLEAR_ERRORS, GET_BOOKS, GET_CHAPTERS,
  SET_JWT_TOKEN,
  SET_CURRENT_USER, SET_LOCATION
} from "../constants/Constants";


export function setLocationAction(data) {
  return {
    type: SET_LOCATION,
    payload: data
  }
}

export function addErrorsAction(data) {
  return {
    type: ADD_ERRORS,
    payload: data
  }
}

export function clearErrorsAction() {
  return {
    type: CLEAR_ERRORS
  }
}






