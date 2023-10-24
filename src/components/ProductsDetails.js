// import { Link, useParams } from 'react-router-dom';

// // redux
// import { useSelector } from 'react-redux';

// // Style
// import styles from "./ProductDetails.module.css";

// const ProductsDetails = (props) => {

//     const id = useParams().id;
//     const data = useSelector(state => state.productsState.products)
//     const product = data[id];
//     const {image, title, description, price, category} = product;

//     return (
//         <div className={styles.container}>
//             <img className={styles.image} src={image} alt="product" />
//             <div className={styles.textContainer}>
//                 <h3>{title}</h3>
//                 <p className={styles.description}>{description}</p>
//                 <p className={styles.category}><span>Category:</span> {category}</p>
//                 <div className={styles.buttonContainer}>
//                     <span className={styles.price}>{price} $</span>
//                     <Link to="/products">Back to Shop</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductsDetails;

import { Link, useParams } from 'react-router-dom';

// redux
import { useDispatch, useSelector } from 'react-redux';

// Style
import styles from "./ProductDetails.module.css";
import { useEffect } from 'react';
import { fetchDetails } from '../redux/productDetails/detailsAction';
import Loader from './shared/Loader';

const ProductsDetails = (props) => {

    const id = useParams().id;
    const state = useSelector(state => state.productDetails)
    const dispatch= useDispatch()

    useEffect(()=>{
         dispatch(fetchDetails(id))
    }, [])
    // const {image, title, description, price, category} = product;
    const {loading , product} = state;
    return (
        <div className={styles.container}>
            
            {loading ? <Loader /> :
            state.product && <>
                <img className={styles.image} src={product.image} alt="product" />
                <div className={styles.textContainer}>
                    <h3>{state.product.title}</h3>
                    <p className={styles.description}>{product.description}</p>
                    <p className={styles.category}><span>Category:</span> {product.category}</p>
                    <div className={styles.buttonContainer}>
                        <span className={styles.price}>{product.price} $</span>
                        <Link to="/products">Back to Shop</Link>
                    </div>
                </div>
            </>
            }
        </div>
    );
};

export default ProductsDetails;



// import axios from 'axios';
// import React, {useState , useEffect} from 'react';
// import { Link, useParams } from 'react-router-dom';
// import styles from "./ProductDetails.module.css";

// const ProductDetails = () => {
//     const id = useParams().id;
//     const [details , setDetails] = useState([]);
//     useEffect( () => {
//         const fetchDetails = async() => {
//             const response =await axios.get(`https://fakestoreapi.com/products/${id}`)
//             setDetails( await response.data)
//         }
//         fetchDetails()
//     }, [])
    
//         return (
//         <div className={styles.container}>
//             <img className={styles.image} src={details.image} alt= "details" style={{width:"200px"}}/>
//             <div className={styles.textContainer}>
//                 <h3>{details.title}</h3>
//                 <p className={styles.description}>{details.description}</p>
//                 <p className={styles.category}><span>Category:</span> {details.category}</p>
//                 <div className={styles.buttonContainer}>
//                     <span className={styles.price}>{details.price}$</span>
//                     <br />
//                     <Link to = "/products"> Back to Shop</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;