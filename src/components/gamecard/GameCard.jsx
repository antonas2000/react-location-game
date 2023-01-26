import {Card} from "react-bootstrap";
import {useGlobalContext} from "../../context/LocationContext";

export default function GameCard() {

  const { location } = useGlobalContext();

  return (
    <Card >
      {/*      <Card.Header> {props.isFull && <Alert variant="danger">Full</Alert>}</Card.Header>*/}
      <Card.Header>Your location</Card.Header>
      <Card.Body>
        <Card.Title>Some info</Card.Title>
        <Card.Text>Location: {location.latitude + ' ' + location.longitude}</Card.Text>
      </Card.Body>
      <Card.Footer>

      </Card.Footer>
    </Card>
  )
}