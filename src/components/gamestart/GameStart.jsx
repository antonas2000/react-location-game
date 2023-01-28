
import {Button, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {saveLocation} from "../../service/LocationAPIService";
import {useGlobalContext} from "../../context/LocationContext";

export default function GameStart() {
  const [hasLeftSecret, setHasLetfSecret] = useState(false);
  const { playerId, location } = useGlobalContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (hasLeftSecret) navigate("/waiting");
  }, [hasLeftSecret]);

  return(
    <Container>
      <Row className="justify-content-end">
        <Button variant="primary"  className='m-2' style={{width: '10em'}} onClick={registerSecret}>
          Press to leave secret here
        </Button>
      </Row>
    </Container>

  )

  function registerSecret() {
    saveLocation(playerId, location).then(setHasLetfSecret(true));
    alert("You have left secret here");
  }
}
