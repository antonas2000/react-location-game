import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import Header from "../header/Header";
import Main from "../main/Main";

export default function App() {

    return(
    <Container>
      <Router>
        <Header/>
        <Container style={{marginTop: '80px'}}>
          <Routes>
            <Route path="/" element={<Main/>}/>
          </Routes>
        </Container>
      </Router>
    </Container>
    )
}

