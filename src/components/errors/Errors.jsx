import {Alert, Col} from "react-bootstrap";

export default function Errors(props) {
  return(
    Object.entries(props.errors).map(([key, value], index) =>
      <Alert variant="danger" key={index}>
        Error occurred: {value.error}
      </Alert>
    )
  )
}

