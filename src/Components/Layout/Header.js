import mealsImage from "../../asserts/meals.jpg"
import React ,{Fragment} from "react";
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {

    return<Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
           <HeaderCartButton onClick ={props.onClickCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Table full of delicious food"/>
        </div>
    </Fragment>

};

export default Header