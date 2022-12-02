import React from 'react';
import { Link } from 'react-router-dom';
import { isInCart, quantityCount, shorten } from '../../helper/functions';
//icons                                                                                                     
import trash from "../../assets/icons/trash.svg" ;
//style             
import styles from './Product.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decrease, increase, removeItem } from '../../redux/cart/cartAction';

const Product = ({productData}) => {
    
    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch()

    return (
        <div className= {styles.container}>
            <img  className={styles.cardImage} src={productData.image} alt="product" style={{width: "200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className= {styles.linkContainer}>
                <Link to= {`/products/${productData.id}`}>detail</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state , productData.id ) > 1 && <button className={styles.smallButton} onClick={() => dispatch(decrease(productData))}> - </button> }
                    {quantityCount(state , productData.id ) === 1 && <button className={styles.smallButton} onClick={() => dispatch(removeItem(productData))}> <img src={trash} alt="trash" /> </button> }
                    {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
                    
                    {
                        isInCart(state , productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch(increase(productData))}> + </button> 
                        :
                        <button onClick={() => dispatch(addItem(productData))}> Add to cart </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;