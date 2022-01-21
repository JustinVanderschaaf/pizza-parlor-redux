import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import PizzaList from "../PizzaList/PizzaList";
import PizzaOrder from "../PizzaOrder/PizzaOrder";
import OrderList from "../OrderList/OrderList";
import Checkout from "../Checkout/Checkout";
import Header from "../Header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/order">Order</Link>
          <Link to="/admin">Admin</Link>
        </nav>

        <Header />

        <Route path="/" exact>
          <PizzaList />
        </Route>

        <Route path="/order" exact>
          <p>Customer Information</p>
          <PizzaOrder />
        </Route>

        <Route path="/admin" exact>
          <OrderList />
        </Route>

        <Route path="/checkout" exact>
          <Checkout />
        </Route>
      </div>
    </Router>
  );
}

export default App;
