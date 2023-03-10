import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import Header from "../header/Header";
import Main from "../main/Main";
import Waiting from "../waiting/Waiting";
import GameStart from "../gamestart/GameStart";
import GameEnd from "../gameend/GameEnd";

export default function App() {

    return(
    <Container>
      <Router>
        <Header/>
        <Container style={{marginTop: '80px'}}>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/waiting" element={<Waiting/>}/>
            <Route path="/gamestart" element={<GameStart/>}/>
            <Route path="/gamewon" element={<GameEnd won={true}/>}/>
            <Route path="/gamelost" element={<GameEnd won={false}/>}/>
            <Route path="/react-location-game" element={<Main/>}/>
          </Routes>
        </Container>
      </Router>
    </Container>
    )
}

