import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const totalCartQuantity = useSelector((state) => state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0))
  if (totalCartQuantity === 0) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200 sm:space-x-6">
      <p className="space-x-4 text-stone-300 font-semibold sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;