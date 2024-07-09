import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Intro from './Pages/Intro';
import Home from './Pages/Home';
import About from './Pages/About';
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import ShopCategory from "./Pages/ShopCategory";
import Navbar from './Components/Navbar/Navbar';
import topbanner from './assets/shirtscatbanner.png';
import bottombanner from './homeslickimg/2.png';
import eyewear from './homeslickimg/3.png';
import accessories from './homeslickimg/4.png';
import footwear from './homeslickimg/backshop.png';
import homewear from './homeslickimg/background1.png'
import Results from './Pages/Results';



const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path='/topwear' element={<ShopCategory banner={topbanner} category='topWear'/>}/>
        <Route path='/bottomwear' element={<ShopCategory banner={bottombanner} category='bottomWear'/>}/>
        <Route path='/eyewear' element={<ShopCategory banner={eyewear} category='eyeWear'/>}/>
        <Route path='/homewear' element={<ShopCategory banner={homewear} category='homeWear'/>}/>
        <Route path="/accessories" element={<ShopCategory banner={accessories} category='accessories'/>}/>
        <Route path="/footwear" element={<ShopCategory banner={footwear} category='footWear'/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>} />
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element = {<LoginSignup/>}/>
        <Route path="/results/:category" element={<Results />} />

      </Routes>
      
      
      </BrowserRouter>

    </div>
  )
}

export default App
