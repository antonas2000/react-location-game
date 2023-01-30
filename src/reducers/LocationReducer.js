import {
  ADD_ERRORS,
  CLEAR_ERRORS,
  SET_LOCATION,
  GAME_READY,
} from "../constants/Constants";

export default function locationReducer(state, action) {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload
      };

    case GAME_READY:
      return {
        ...state,
        gameReady: action.payload
      };

    case ADD_ERRORS:
      return {
        ...state,
        errors: [...state.errors, action.payload]
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        errors: []
      };
  }

}

