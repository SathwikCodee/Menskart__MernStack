import React, { useRef, useState } from 'react'
import './Navbar.css'
import cart_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import dropbtn from '../../assets/dropdown_icon.png'
import logo from '../../assets/logo.png'
import Search from '../SearchBar/search'
const Navbar = () => {
 
  const [menu,setmenu] = useState("shop");
  const menuRef = useRef();

  function reloadPage() {
    window.location.reload();
  }
  const drop_toggle = (e)=>{
    menuRef.current.classList.toggle('nav-visible-menu');
    e.target.classList.toggle('open');
  }

  return (
    <div  className='nav'>
    
      <div className="nav-logo" onClick={reloadPage}><Link to='/'><img src={logo} alt=""></img></Link></div>
      
      <img className='nav-dropdown' onClick={drop_toggle} src={dropbtn} alt="no img"></img>
      <ul ref={menuRef} className="nav-menu">
        <li className='cur' onClick={()=>{setmenu("Home")}}><Link style={{ color:'black', textDecoration: 'none'}} to='/home'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
        <li className='cur' onClick={()=>{setmenu("Shop")}}><Link style={{ color:'black', textDecoration: 'none'}} to='/shop'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li className='cur' onClick={()=>{setmenu("About")}}><Link style={{  color:'black',textDecoration: 'none'}} to='/about'>About</Link>{menu==="About"?<hr/>:<></>}</li>
      </ul>

      <ul className='nav-menuc'>
        <Search/>
        {localStorage.getItem('auth-token')
        ? <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} className='nav-contact cur'>LOGOUT</button>
        : <li className='nav-contact cur'><Link style={{ color:'black', textDecoration:'none'}} to='/login'><span className='log'>Login</span></Link></li>
        }
        <li className='cart cur'><Link to='/cart'><img src={cart_icon} alt="" /></Link></li>
        
      </ul>
      
      
    </div>
  )
}

export default Navbar