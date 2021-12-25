import React from "react";
import { BrowserRouter, Redirect, Route, Switch, useHistory } from "react-router-dom";

//components
import { Container, Row, Col } from "react-bootstrap";
import Login from "./pages/Login/Login";
import NavBar from "./components/NavBar";
import Customer from "./pages/Customer/Customer";
// import styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Home = () => {
  const history = useHistory();
  return ( 
    <Container className="cont-wrapper">
      <h4>Welcome to DBO Management</h4>
      
      <Row>
        <div>Choose category:</div>
        <Col sm>
          <div onClick={()=>history.push("/costumer")} className="category-btn">Costumer Management</div>
        </Col>
        <Col sm>
          <div onClick={()=>history.push("/order")} className="category-btn">Order Management</div>
        </Col>
      </Row>
    </Container>
    );
};

// const Costumer = () => {
//   return <div>Costumer Management</div>;
// };

const Order = () => {
  return <div>Order Management</div>;
};



export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Redirect exact from="/" to="/login" />           
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>          
          <Route path="/costumer">
            <Customer/>
          </Route>
          <Route path="/order">
            <Order />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}