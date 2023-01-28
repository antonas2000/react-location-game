import {Alert, Card} from "react-bootstrap";
import {useGlobalContext} from "../../context/LocationContext";
import {useEffect, useState} from "react";
import {getDistanceFromLatLonInKm} from "../../utils/GPSUtils";
import {getSecretLocation} from "../../service/LocationAPIService";

export default function GameCard() {

  const { location, playerId } = useGlobalContext();
  const [secretLocation, setSecretLocation] = useState({});

  useEffect(() => getSecretLocation(playerId)
    .then(response => setSecretLocation(response)),
    []);

if(isEmptyObject(secretLocation)) {
  return <Alert variant="warning">Wait...</Alert>
} else {
const distanceInKm = getDistanceFromLatLonInKm(location.latitude, location.longitude, secretLocation.latitude, secretLocation.longitude);
return (
    <Card >
      {distanceInKm > 1 ? <Card.Header> <Alert variant="danger">Cold</Alert>}</Card.Header> :
        distanceInKm < 0.1 ? <Card.Header> <Alert variant="warning">Hot</Alert>}</Card.Header> :
        <Card.Header> <Alert variant="info">Warm</Alert>}</Card.Header>
      }
      {/*<Card.Header>Your location</Card.Header>*/}
      <Card.Body>
        <Card.Title>Distance to target</Card.Title>
        {location.latitude ? <Card.Text style={{ fontWeight: 'bold' }}>{distanceInKm} km</Card.Text> : <div>Location is being retrieved...</div>}
      </Card.Body>
      <Card.Footer>

      </Card.Footer>
    </Card>
  )
}
}

function isEmptyObject(obj){
  return JSON.stringify(obj) === '{}'
}