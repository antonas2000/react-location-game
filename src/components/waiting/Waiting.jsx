
import {Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useGlobalContext} from "../../context/LocationContext";

export default function Waiting() {


  const navigate = useNavigate();
  const { gameReady } = useGlobalContext();

  useEffect(() => {
    if (gameReady) navigate("/");
  }, [gameReady]);

  return(
    <Container>
      <Row className="justify-content-end">
        Waiting for other player...
      </Row>
    </Container>

  )
}
