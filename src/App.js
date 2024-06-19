import Home from "./Pages/Home";
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from "./Pages/Cart"
import ShopCat from"./Pages/ShopCat"
import Product from"./Pages/Product"
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import Loginsing from "./Pages/Loginsing";

function App() {
  return (

    <div className="App">
      
      <BrowserRouter>
      <Routes>
        
       <Route path='/' element ={<Home/>}/>
       <Route path='/men' element ={<ShopCat banner={men_banner}category="men"/>}/>
       <Route path='/Women' element ={<ShopCat banner= {women_banner}category="women"/>}/>
       <Route path='/Kids' element ={<ShopCat banner={kid_banner}category="kid"/>}/>
       <Route path="/product" element={<Product/>}>
         <Route path=":productId" element={<Product/>}/>
       </Route>
       <Route path='/login' element={<Loginsing/>}></Route>
       <Route path='/Cart' element ={<Cart/>}/>
      </Routes>

      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
