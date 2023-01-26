
import Errors from "../errors/Errors";
import {useEffect} from "react";
import {useGlobalContext} from "../../context/LocationContext";
import GameCard from "../gamecard/GameCard";

export default function Main() {
  const {errors, clearErrors} = useGlobalContext();
/*  const navigate = useNavigate();*/
  useEffect(() => {
    clearErrors();
/*    if (jwtToken) navigate("/adminboard");*/
  }, []);

  return(
    <>
      {(errors.length !== 0) && <Errors errors = {errors} />}
      <GameCard/>
    </>

  )
}
