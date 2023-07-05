import styles from "./TireItem.module.css";
import TireItemForm from "./TireItemForm";
import { useCaontext, useContext } from "react";
import CartContext from "../../../store/cart-context";

const TireItem = (props) => {
  const cartContext = useContext(CartContext);
  const formattedPrice = `₴ ${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount, 
      price: props.price,
    })
  };

  return (
    <li className={styles.tire}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <TireItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default TireItem;
