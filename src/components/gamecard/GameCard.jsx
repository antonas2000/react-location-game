import {Alert, Card} from "react-bootstrap";
import {useGlobalContext} from "../../context/LocationContext";
import {useEffect, useState} from "react";
import {getDistanceFromLatLonInM} from "../../utils/GPSUtils";
import {getSecretLocation} from "../../service/LocationAPIService";
import {useNavigate} from "react-router-dom";

export default function GameCard() {

  const {location, playerId, gameReady} = useGlobalContext();
  const [secretLocation, setSecretLocation] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
      async function fetchData() {
        const response = await getSecretLocation(playerId);
        setSecretLocation(response)
      }

      fetchData();
    },
    []);

  if (!gameReady) navigate("/gamelost")
  if (isEmptyObject(secretLocation)) {
    return <Alert variant="warning">Wait...</Alert>
  } else {
    const distanceInM = getDistanceFromLatLonInM(location.latitude, location.longitude, secretLocation.latitude, secretLocation.longitude);
    if (distanceInM < 10) navigate("/gamewon");
    return (
      <Card>
        {distanceInM > 300 ? <Card.Header> <Alert variant="danger">Cold</Alert>}</Card.Header> :
          distanceInM < 100 ? <Card.Header> <Alert variant="warning">Hot</Alert>}</Card.Header> :
            <Card.Header> <Alert variant="info">Warm</Alert>}</Card.Header>
        }
        {/*<Card.Header>Your location</Card.Header>*/}
        <Card.Body>
          <Card.Title>Distance to target</Card.Title>
          {location.latitude ? <Card.Text style={{fontWeight: 'bold'}}>{distanceInM} meters</Card.Text> :
            <div>Location is being retrieved...</div>}
        </Card.Body>
        <Card.Footer>

        </Card.Footer>
      </Card>
    )
  }
}

function isEmptyObject(obj) {
  return JSON.stringify(obj) === '{}'
}