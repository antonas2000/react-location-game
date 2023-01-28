
import {generateData, generateJWTHeader, makeRequest} from "./Utils";
import {LOCATION_API_URL} from "../constants/Constants";

// Public requests
export function isGameReady() {
  return makeRequest(LOCATION_API_URL, {method: 'GET'}, "/gameready");
}

export  function saveLocation(playerId, location){
  const data = generateData({playerId:playerId, location: location});
  return makeRequest(LOCATION_API_URL, {method: 'POST',  ...data});
}

export function getSecretLocation(playerId) {
  return makeRequest(LOCATION_API_URL, {method: 'GET'}, "/secretlocation/" + playerId);
}



