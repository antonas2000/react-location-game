import {Alert, Button, Card, Container, Row} from "react-bootstrap";
import {useGlobalContext} from "../../context/LocationContext";
import {useEffect, useState} from "react";
import {getDistanceFromLatLonInKm, getDistanceFromLatLonInM} from "../../utils/GPSUtils";
import {gameOver, getSecretLocation} from "../../service/LocationAPIService";
import {useNavigate} from "react-router-dom";

export default function GameEnd(props) {

  useEffect(gameOver, []);

  return (
    <Container >
      <Row className="justify-content-center">
        {props.won ? <Alert variant="info">Congrats. You won!</Alert> : <Alert variant="danger">You Lost. Your oppnent found your secret</Alert>}
      </Row>
    </Container>
  )
}
