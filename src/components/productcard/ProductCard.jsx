import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);

  const { cart, setCart } = useContext(CartContext);

  function addToCart() {
    setCart([...cart, { ...product, quantity }]);
  }

  return (
    <div>
      <h3>{product.title}</h3>

      <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>

      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <button onClick={() => setQuantity(q => q + 1)}>+</button>

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
import PropTypes from "prop-types";

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};