import {Button, Container, Navbar} from "react-bootstrap";
import {useGlobalContext} from "../../context/LocationContext";
import {useEffect, useState} from "react";
import {isGameReady} from "../../service/LocationAPIService";


function Header() {

  const {addErrors, clearErrors, updateLocation, setGameReady, gameReady} = useGlobalContext();
  const [watchId, setWatchId] = useState();

  const options = {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 0
  };

  function errorHandler(error) {
    error.code !== 3 ? addErrors("Can not get your location:" + error.message) : console.log(error);
  }

  function locationUpdateReceived(position){
    clearErrors();
    console.log('locationUpdateReceived');
    console.log(position);
    if (position.coords) {
      updateLocation({latitude: position.coords.latitude, longitude: position.coords.longitude});
    }
    if(!gameReady) isGameReady().then(() => setGameReady(true));
  }

  function getLocation() {
    navigator.geolocation.getCurrentPosition(locationUpdateReceived, errorHandler, options);
  }

  function startWatchingLocation() {
    console.log('started to watch');
    const currentWatchId = navigator.geolocation.watchPosition(locationUpdateReceived, errorHandler, options);
    setWatchId(currentWatchId);
  }

  function stopWatchingLocation() {
    console.log('stopped to watch');
    navigator.geolocation.clearWatch(watchId);
  }

  useEffect(startWatchingLocation, []);

/*  if(navigator.geolocation) {
    console.log('navigator.geolocation available')
  } else {
    console.log('Navigator not available');
    return;
  }*/

  return (
    <Navbar fixed="top" bg="light" variant="light">
      <Container>
        <Navbar.Brand>Finders Keepers Loosers Weepers</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        {/*  {!jwtToken && <Link className="nav-link"  style={{marginRight: '10px'}} to="/">Home</Link>}*/}
{/*          <Button className="nav-link"  style={{marginRight: '10px'}} onClick={getLocation}>Get Location</Button>}
          <Button className="nav-link"  style={{marginRight: '10px'}} onClick={stopWatchingLocation}>Stop watching</Button>}*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}

export default Header;
