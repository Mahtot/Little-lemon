import logo from '../assets/Logo-.jpg';
import '../assets/css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, light, thin, duotone, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';

function Footer() {
  return (
    <footer>
       
       <div id="logo">
        <img src={logo}
             alt="Logo of little lemon"
             title="Little lemon"/>
        </div>
         <ul id="navg">
          <h3>Doormat Navigation</h3>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
         </ul>

         <ul id="contact">
          <h3>
            Contact
          </h3>
          <li>ChicGo street</li>
          <li> 092384838483</li>
          <li>Little@gmail.com</li>
         </ul>

         <ul id="social">
          <h3>Social media links</h3>
          <li >
            <img src={instagram}
                alt="icon of instagram"
                title="Instagram"/>
          </li>
          <li>
          <img src={facebook}
                alt="icon of instagram"
                title="Facebook"/>
          </li>
          <li>
          <img src={twitter}
                alt="icon of instagram"
                title="Twitter"/>
          </li>
         </ul>
    </footer>
  )
}
export default Footer