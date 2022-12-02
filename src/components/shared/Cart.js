import React, { useContext } from 'react';
//redux
import { useDispatch } from 'react-redux';
import { shorten } from '../../helper/functions';
//Icons
import trashIcon from '../../assets/icons/trash.svg'
//style
import styles from "./Cart.module.css";
import { decrease, increase, removeItem } from '../../redux/cart/cartAction';


const Cart = ({data}) => {
    
    const {image , title , price , quantity} = data;
    const dispatch = useDispatch()
    
    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="product" style={{ width: "50px"}} /> 
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p> {price} $</p>
            </div>
            <div>
                <span className={styles.quantity}> {quantity} </span>
            </div>
            <div className={styles.buttonContainer}>
                { 
                    quantity > 1 ?
                    <button onClick={() => dispatch(decrease(data))}> - </button>
                    :
                    <button onClick={() => dispatch(removeItem(data)) }><img src={trashIcon} alt="trash"/></button>
                 }
                <button onClick={() => dispatch(increase(data))}> + </button> 
            </div>
        </div>
    );
};

export default Cart;