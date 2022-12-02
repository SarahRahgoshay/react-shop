import React from 'react';
//route
import { Link } from 'react-router-dom';
//component 
import Cart from './shared/Cart';
//redux
import { checkout, clear } from '../redux/cart/cartAction';
import { useDispatch, useSelector } from 'react-redux';
//styles
import styles from "./ShopCart.module.css";

const ShopCart = () => {
    const state = useSelector (state => state.cartState);
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItem.map( item => <Cart key= {item.id} data= {item} />)}
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total Items: </span> {state.itemsCounter} </p>
                    <p><span>Total Payments: </span> {state.total} </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={() => dispatch(checkout())}> Check Out </button>
                        <button className={styles.checkout} onClick={() => dispatch(clear())}> CLEAR </button>
                    </div>   
                </div>
            }

            {
                state.checkout && <div className={styles.complete}>
                    <h3>checked Out Successfully</h3>
                    <Link to= "/products"> Buy More </Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                    <h3> Want to Buy?</h3>
                    <Link to= "/products"> Go to Shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;