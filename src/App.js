import React from 'react';
import './App.css';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col, CardBody,Card, CardText,Dropdown} from 'reactstrap';
import { Patient } from "./components/Patient/index";
import Child from "./components/Child";
import Baby from "./components/Baby";
import Results from "./components/Results"
import Category from './components/Category';
import AllCategories from './components/AllCategories';
import {BrowserRouter as Router,Route} from "react-router-dom";
import axios from 'axios';

function App() {

  return (
    <div>
      <Router>
        <Container>
          <Row>
            <Col ><Patient/></Col>
            <Col><Child child={{name:"Emma",mrn:"MX13216584",fin:"MX26548913"}}/></Col>
          </Row>
          <Row>
            <Baby/>
          </Row>
          <Row>
            <Col md={4}>
              <Route path="/" component={AllCategories} />
            </Col>
          </Row>    
        </Container>
      </Router>
      
     
    </div>
  );
}

export default App;
