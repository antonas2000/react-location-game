import {Button, Container, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useGeolocated} from "react-geolocated";
import {useGlobalContext} from "../../context/LocationContext";
import {useEffect} from "react";


function Header() {

  const {addErrors, clearErrors, updateLocation} = useGlobalContext();

  const { coords, isGeolocationAvailable, isGeolocationEnabled, positionError, timestamp, getPosition} =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 15000
      },
      watchPosition: true,
      userDecisionTimeout: null,
      suppressLocationOnMount: false,
      geolocationProvider: navigator.geolocation,
      isOptimisticGeolocationEnabled: true,
      onError,
      onSuccess
    });

  function onError() {
    addErrors("Can not get your location")
  }

  function onSuccess() {
    console.log("onSuccess",coords, ' Time: ', new Date(timestamp), positionError);
    if (coords) updateLocation({latitude: coords.latitude, longitude: coords.longitude})
  }

   if(isGeolocationAvailable) {
     console.log('isGeolocationAvailable')
   }
  if(isGeolocationEnabled) {
    console.log('isGeolocationEnabled')
  }
  useEffect(() => {
/*    clearErrors();*/
    console.log("useEffect",coords)
    if (coords) updateLocation({latitude: coords.latitude, longitude: coords.longitude});
  }, []);

  return (
    <Navbar fixed="top" bg="light" variant="light">
      <Container>
        <Navbar.Brand>Finders Keepers Loosers Weepers</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        {/*  {!jwtToken && <Link className="nav-link"  style={{marginRight: '10px'}} to="/">Home</Link>}*/}
          <Button className="nav-link"  style={{marginRight: '10px'}} onClick={updatePostion}>Get Location</Button>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

  function updatePostion() {
    getPosition();
  }

}



export default Header;
