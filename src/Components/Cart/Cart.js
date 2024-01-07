import classes from './Cart.module.css'
import Modal from "../UI/Model/Modal";
import {useContext} from "react";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";

const Cart = props => {
    const  cartCtx= useContext(CartContext)
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const totalAmount = `$${cartCtx.totalAmount.toFixed("2")}`;
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map((item) => <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
    />)}</ul>
    const hasItem = cartCtx.items.length > 0





   return<Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            {hasItem && <button className={classes.button}>Order</button>}

        </div>
    </Modal>




}

export default Cart