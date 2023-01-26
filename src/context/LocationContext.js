import {useContext, useReducer} from "react";
import React from 'react';
import locationReducer from "../reducers/LocationReducer";

import {
  addErrorsAction, clearErrorsAction,
  setLocationAction,
} from "../actions/LocationActions";

const initialState = {
  location: {},
  errors: []
}

const AppContext = React.createContext();

function AppProvider({children}) {

  const [state, dispatch] = useReducer(locationReducer, initialState);

  function addErrors(errorMessage) {
    dispatch(addErrorsAction({'error': errorMessage}))
  }

  function clearErrors() {
    dispatch(clearErrorsAction());
  }

  function updateLocation(location) {
    dispatch(setLocationAction(location))
  }

  /*
   function getBooksAPI() {
     return getBooks()
       .then(books => dispatch(getBooksAction(books)))
       .catch(processError);
   }

   function processError(error) {
     addErrors(error)
     return Promise.reject(error);
   }
 */
  return (
    <AppContext.Provider value={{
      ...state,
      addErrors,
      clearErrors,
      updateLocation
    }}>
      {children}
    </AppContext.Provider>
  )
}

function useGlobalContext() {
  return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}
