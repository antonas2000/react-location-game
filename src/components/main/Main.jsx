
import Errors from "../errors/Errors";
import {useEffect} from "react";
import {useGlobalContext} from "../../context/LocationContext";
import GameCard from "../gamecard/GameCard";
import {useNavigate} from "react-router-dom";

export default function Main() {
  const {errors, clearErrors, gameReady} = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    clearErrors();
    if (!gameReady) navigate("/gamestart");
  }, []);

  return(
    <>
      {(errors.length !== 0) && <Errors errors = {errors} />}
      {gameReady && <GameCard/>}
    </>

  )
}
