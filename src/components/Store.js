import React , {useEffect, useState} from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/products/productsAction';
import Loader from './shared/Loader';
//component
import Product from './shared/Product';
//style
import styles from './Store.module.css' ;


const Store = () => {
    const dispatch= useDispatch();
    const productsState = useSelector(state => state.productsState);
    

    useEffect(()=>{
        if(!productsState.products.length) dispatch(fetchProducts())
    } , [])
    
    return (
        <div className={styles.container}>
            {
                productsState.loading ?
                <Loader/> :
                productsState.error ?
                    <p>Something is wrong</p> :
                    productsState.products.map( product => <Product 
                        key={product.id}
                        productData= {product}
                        />)
            }
        </div>
    );
};

export default Store;