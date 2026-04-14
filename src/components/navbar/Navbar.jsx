import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
export default function Navbar() {
    const { cart } = useContext(CartContext);
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
}