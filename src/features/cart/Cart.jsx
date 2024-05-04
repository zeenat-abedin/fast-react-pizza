import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';
import { getCart } from './cartSlice';
import Button from '../../ui/Button';

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);

  return (
    <div className='px-4 py-3'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2>Your cart, {username}</h2>
      
      <ul className='mt-3 divide-y divide-stone-200 border-b'>
        {
          cart.map((item) => <CartItem item={item} key={item.key} />)
        }
      </ul>

      <div>
        <Link to="/order/new" type='primary'>Order pizzas</Link>
        <Button type="secondary" onClick={()=>{}}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;