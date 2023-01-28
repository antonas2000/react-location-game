import {useContext, useReducer} from "react";
import React from 'react';
import locationReducer from "../reducers/LocationReducer";

import {
  addErrorsAction, clearErrorsAction, gameReadyAction,
  setLocationAction,
} from "../actions/LocationActions";
import {uid} from "uid";

const initialState = {
  location: {},
  gameReady: false,
  errors: [],
  playerId: uid()
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

  function setGameReady(isGameReady) {
    dispatch(gameReadyAction(isGameReady))
  }

  return (
    <AppContext.Provider value={{
      ...state,
      addErrors,
      clearErrors,
      updateLocation,
      setGameReady
    }}>
      {children}
    </AppContext.Provider>
  )
}

function useGlobalContext() {
  return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}
