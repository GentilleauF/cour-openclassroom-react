import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import ShoppingList from "./components/ShopingList";
import './styles/index.css';
import './styles/Layout.css'
import { useState } from "react";


function App() {
  const [cart, updateCart] = useState([]);
  

  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner" >
      <Cart cart={cart} updateCart={updateCart} />
      <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
