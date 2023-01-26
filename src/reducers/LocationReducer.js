import {
  ADD_ERRORS,
  CLEAR_ERRORS, GET_BOOKS, GET_CHAPTERS,
  SET_JWT_TOKEN,
  SET_CURRENT_USER, SET_LOCATION,
} from "../constants/Constants";

export default function locationReducer(state, action) {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload
      };

/*    case GET_CHAPTERS:
      return {
        ...state,
        selectedBook: {bookId: action.payload.bookId, chapters: convertChaptersArrayToBookMap(action.payload.chapters)}
      };*/

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

