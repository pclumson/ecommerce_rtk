import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice';
import { ShoppingCart } from './ShoppingCart';
//Now initialize superCoins variable using useState hook along with its corresponding function before retun of the component.

const [superCoins, setSuperCoins] = useState(0);

//// use useSelector hook to get the state of cart items.
const cartItems = useSelector(state => state.cart.cartItems);

//Next calculate the total amount by summing the product of the price and quantity for each item in the cartItems array using the reduce method

const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);



/// useEffect hook to update the state of superCoins.
useEffect(() => {
    if (totalAmount >= 100 && totalAmount < 200) {
        setSuperCoins(10);
    } else if (totalAmount >= 200 && totalAmount < 300) {
        setSuperCoins(20);
    } else if (totalAmount >= 300) {
        setSuperCoins(30);
    } else {
        setSuperCoins(0);
    }
}, [totalAmount]);


//
// Use {} to include superCoins variable
<div className="super-coins" style={{textAlign:'center'}}>
<h2 className="super-coins-title">Super Coins</h2>
<p className="super-coins-info">
You will earn {superCoins} super coins with this purchase.
</p>
</div>
