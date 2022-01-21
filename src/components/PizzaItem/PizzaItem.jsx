import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function PizzaItem({ pizza }) {
  const [flipStatus, setFlipStatus] = useState(true);
  const dispatch = useDispatch();

  

  const addToCart = () => {
    setFlipStatus(!flipStatus);
    dispatch({
        type: "ADD_PIZZA_CART",
        // payload is any data
        // that I want to send with me action
        payload: pizza,
      });

      dispatch({
        type: "ADD_TOTAL_PRICE",
        payload: pizza.price
      })
  };
  
  const deleteFromCart = () => {
    setFlipStatus(!flipStatus);
    dispatch({
        type: "REMOVE_FROM_CART",
        // payload is any data
        // that I want to send with me action
        payload: pizza,
      });

      dispatch({
        type: "SUBTRACT_TOTAL_PRICE",
        payload: pizza.price
      })

  };

  const increasePrice = () => {



  };

  const decreasePrice = () => {



  };
  

  return (
    <>
      <div key={pizza.id}>
        <img className="img" src={pizza.image_path} />
        <h3>{pizza.name}</h3>
        <p>{pizza.description}</p>
        <p>${pizza.price}</p>
      </div>

      {flipStatus ? (
        <button onClick={addToCart} className="addToCartBtn">
          Add
        </button>
      ) : (
        <button onClick={deleteFromCart} className="DeleteFromCartBtn">
          Remove
        </button>
      )}
    </>
  );
}

export default PizzaItem;
