import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = fakeCart;

  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>

      <h2>Your cart, {username}</h2>
      
      <ul className='mt-3 divide-y divide-stone-200 border-b'>
        {
          cart.map((item) => <CartItem item={item} key={item.key} />)
        }
      </ul>

      <div>
        <Link to="/order/new" type='primary'>Order pizzas</Link>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;