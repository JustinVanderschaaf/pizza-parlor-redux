import { useSelector } from "react-redux";

function Checkout() {
  const totalPrice = useSelector((store) => store.totalPrice);
  const customerInformation = useSelector((store) => store.customerInformation);

  const pizzaCart = useSelector((store) => store.pizzaCart);

  console.log(customerInformation);

  const onAddOrder = (evt) => {
    evt.preventDefault();
    console.log("in onAddOrder");
    const orderInfo = {
      customer_name: customerInformation.customer_name,
      street_address: customerInformation.street_address,
      city: customerInformation.city,
      zip: customerInformation.zip,
      type: customerInformation.type,
      // total:,
      // pizzas:
    };

    console.log("order info is", orderInfo);
    axios
      .post("/api/order", orderInfo)
      .then((res) => {
        console.log("POST /pizza/order", res);
        // function with axios.get
        dispatch({
          type: "UPDATE_ORDER_LIST",
          payload: orderInfo,
        });
      })
      .catch((err) => {
        console.error("POST /pizza/order", err);
      });
  };

  return (
    <>
      <h1>Prime Pizza</h1>
      <h3> Step3: Checkout </h3>
      <p>{customerInformation.customer_name}</p>
      <p>{customerInformation.street_address}</p>
      <p>
        {customerInformation.city}, {customerInformation.zip}
      </p>
      <p>For {customerInformation.type}</p>
      <table>
        <thead>
          <tr>
            <th> Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {pizzaCart.map((order) => (
            <tr key={order.id}>
              <td>{order.name}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2> Total: {totalPrice}</h2>
      <button className="nextBtn"> 🛒 Checkout </button>
    </>
  );
}

export default Checkout;
