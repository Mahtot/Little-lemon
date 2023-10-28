import logo from '../assets/Logo-.jpg';
import '../assets/css/header.css';
import Menu from '../assets/menu.png';
import xSolid from '../assets/x-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, light, thin, duotone, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import Bars from '../assets/bars-solid.svg'
import { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Main from './Main';
import Reservations from './Reservations';
function Header() {

  const [isPressed, setISPressed] = useState(false)
 
  return (
   <div onClick={()=>isPressed?setISPressed(false):""}>
    <header>
     <img src={logo} 
     alt="Logo of the company"
     title="Little lemon"
     id="logo"
     
     />
     

    {isPressed? <FontAwesomeIcon 
          icon={solid("x")} 
          size="xl" 
          className='menu-icon' 
          onClick={()=>{setISPressed(!isPressed)}}
     /> :<FontAwesomeIcon 
           icon={solid("bars")} 
           size="xl" 
           className='menu-icon'
           onClick={()=>{setISPressed(!isPressed)}}
           />
    }

     
     
      <nav id="navB" >
     
       <ul>
      
            <li className="link"><Link to='/'>Home</Link></li>
            <li className="link"><Link to='/'>About</Link></li>
            <li className="link"><a href="#">Menu</a></li>
            <li className="link"><Link to='/reservations'>Reservations</Link></li>
            <li className="link"><a href="#">Order Online</a></li>
            <li className="link"><a href="#">Login</a></li>
        </ul>
     </nav>
     </header>

  <Routes>
     <Route path='/' element={<Main/>}/>
     <Route path='/reservations' element={<Reservations/>} />
  </Routes>
      
     
{isPressed?
     <nav id="navB" style={{display:"flex"}}>
     
       <ul>
      
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
     </nav>: ""}
     
     </div>
    
    
  )
}
export default Header