import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function OrderList() {
  const dispatch = useDispatch();

  const orderList = useSelector((store) => store.orderList);

  // Only render it once
  useEffect(() => {
    fetchOrderList();
  }, []);

  // Function for getting orders
  const fetchOrderList = () => {
    axios
      .get("/api/order")
      .then((res) => {
        console.log("get /orders success");

        dispatch({
          type: "SET_ORDER_LIST",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.error("get /orders failure", err);
      });
  }; // End getting orders function

  return (
    <>
      <h1>Current Order:</h1>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Street Address</th>
            <th>City</th>
            <th>Zip Code</th>
            <th>Type</th>
            <th>Total</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order) => (
            <tr key={order.id}>
              <td>{order.customer_name}</td>
              <td>{order.street_address}</td>
              <td>{order.city}</td>
              <td>{order.zip}</td>
              <td>{order.type}</td>
              <td>{order.total}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default OrderList;
