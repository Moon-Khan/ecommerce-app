import './App.css';
import HomePage from './components/main';
import ProductDetail from './components/productDetail';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './reducer/store';
import CartPage from './components/cartPage';

function App() {
  return (
    <Provider store={store}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
          </ Routes>

        </BrowserRouter>
      </Provider>

  );
}

export default App;
