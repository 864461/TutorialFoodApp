import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import { useContext ,useEffect,useState} from 'react';
import CartContext from "../../Store/cart-context";
const HeaderCartButton = props =>{
    const [btnAnimate,setBtnAnimate] =useState(false)
   const valuesCtx =  useContext(CartContext);
   const numberOfCartItem = valuesCtx.items.reduce((currentNumber,item)=> {
       return currentNumber + item.amount
   },0)

    const{items} = valuesCtx
    const buttonClasses = `${classes.button} ${btnAnimate? classes.bump: ''}`;

    useEffect(() => {
        if(valuesCtx.items.length === 0){
            return
        }
        setBtnAnimate(true);

       const timer =  setTimeout(()=>{
            setBtnAnimate(false);
        },300);

        return ()=>{
            clearTimeout(timer)
        }
    },[items]);

    return<button className={buttonClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart </span>
        <span className={classes.badge}>
            {numberOfCartItem}
        </span>

    </button>


}
export default HeaderCartButton