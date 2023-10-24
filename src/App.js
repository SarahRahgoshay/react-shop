import React from 'react';
//Componenets
import Store from './components/Store';
//route
import { Navigate, Route, Routes} from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
//Redux
import { Provider } from 'react-redux';
import store from "./redux/store"
import ProductsDetails from './components/ProductsDetails';

const App = () => {
  return (
    <div>
      <Provider store= {store}>
        <Navbar />
          <Routes>
            <Route path='/products/:id' element={<ProductsDetails />} />
            <Route path='/products' element= {<Store />} />
            <Route path='/cart' element={<ShopCart/>} />
            <Route path='/*' element={<Navigate to='/products' />} />
          </Routes>
      </Provider>
          
    </div>
  );
};

export default App;