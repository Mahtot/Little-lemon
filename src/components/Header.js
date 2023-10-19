import logo from '../assets/Logo-.jpg';
import '../assets/css/header.css';
import Menu from '../assets/menu.png';
import xSolid from '../assets/x-icon.png';
import Bars from '../assets/bars-solid.svg'
import { useState } from 'react';
function Header() {

  const [isPressed, setISPressed] = useState(false)

  return (
   <div>
    { isPressed ||  <header>

     <img src={logo} 
     alt="Logo of the company"
     title="Little lemon"
     id="logo"
     
     />

     <div className='menu-icon'>
      <img src={Bars}
           alt="Menu icon"
           onClick={()=>{setISPressed(!isPressed)}}/>
     </div>
     
     <div></div></header>}
      {isPressed? <nav>
     
       <ul>
     <li>  <img src={xSolid}
            alt="X button"
            onClick={()=>{setISPressed(!isPressed)}}/></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
     </nav> : ''}
     </div>
    
    
  )
}
export default Header