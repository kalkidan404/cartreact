import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}