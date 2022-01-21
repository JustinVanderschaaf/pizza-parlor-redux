import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { useEffect } from "react";
import logger from "redux-logger";

const pizzaList = (state = [], action) => {
  switch (action.type) {
    case "PIZZA_LIST":
      return [...state, action.payload];
  }
  // Whatever we return from the reducer
  // is the value of our state
  return state;
};

const pizzaCart = (state = [], action) => {
  let newArray = [];
  switch (action.type) {
    case "ADD_PIZZA_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      console.log("acton payload", action.payload);
      for (let pizza of state) {
        if (pizza.name !== action.payload.name) {
          newArray.push(pizza);
          console.log("delete", pizza.name);
        }
      }
      return newArray;
  }
  // Whatever we return from the reducer
  // is the value of our state
  return state;
};

const totalPrice = (state=0, action) => {
  console.log('total price payload', action.payload)
  switch(action.type){
    case "ADD_TOTAL_PRICE":
      return state += Number(action.payload);
    case "SUBTRACT_TOTAL_PRICE":
      return state -= Number(action.payload);
  }
  return state
}

const orderList = (state = [], action) => {
  switch (action.type) {
    case "SET_ORDER_LIST":
      return action.payload;
    case "UPDATE_ORDER_LIST":
      return [...state, action.payload];
  }

  return state;
};

const customerInformation = (state = {}, action) => {
  switch (action.type) {
    case "NEW_CUSTOMER":
      return action.payload;
  }
  return state;
};

// Create the store
const store = createStore(
  combineReducers({
    customerInformation,
    pizzaList: pizzaList,
    orderList,
    pizzaCart: pizzaCart,
    totalPrice
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
