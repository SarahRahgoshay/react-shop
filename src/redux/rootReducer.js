import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import detailsReducer from "./productDetails/detailsReducer";
import productsReducer from "./products/ProductsReducer";

const rootReducer = combineReducers({
    productsState: productsReducer,
    productDetails: detailsReducer,
    cartState: cartReducer
})

export default rootReducer;