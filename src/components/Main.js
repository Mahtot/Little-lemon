import '../assets/css/header.css';
import '../assets/css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, light, thin, duotone, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import Restaurant from '../assets/restaurant.jpg';
import RestaurantPic from '../assets/restauranfood.jpg';
import bruchetta from '../assets/restaurant chef B.jpg';
import Greeksalad from '../assets/greek salad.jpg';
import LemonDessert from '../assets/lemon dessert.jpg';
import Basket from '../assets/Basket.svg';
import tes1 from '../assets/tes1.jpg';
import tes2 from '../assets/tes2.jpg';
import tes3 from '../assets/tes3.jpg';
import tes4 from '../assets/tes4.jpg';
function Main() {
  return (
   <>
    <div id="main">
      <div id="main-container">
       <div id="desc">
       <h1>Little Lemon</h1>
       <h2>Chicago</h2>
       <p>
       This is a shorthand for the flex-direction and flex-wrap properties, which together define the flex container’s main and cross axes. The default value is row nowrap.
       </p>
       <button id="reserve-btn">Reserve a table</button>
       </div>
        <img src={RestaurantPic}
             alt="Picture of the restaurant's food"
             />
      </div>
    </div>

   <SecondMain/>
   <Testimonals/>
   <About/>
    </>
  )
}

export function SecondMain(){
  return(
    <div id="second-main">
     <h1>This weeks specials!</h1>
     <button id="order-btn">
      Order online
     </button>

     <figure>
      <img src={bruchetta}
            alt="An image of bruchetta dish"
            title="Bruchetta"/>
      <figcaption>
        <h3>Bruchetta</h3> <span>20$</span>
        <p>This dish is made by our special cheifs and tastes nice, 
          you won't regret having it.</p>
          <div id="order">
          <h3>Order a delivery</h3> <span>
          <img src={Basket}
               alt="Icon of an add basket"
               title="Add"
               id="basket-icon"/>
        </span>
        </div>
      </figcaption>
     </figure>

     <figure>
      <img src={LemonDessert}
            alt="An image of Lemon dessert dish"
            title="Lemon dessert"/>
      <figcaption>
        <h3>Lemon dessert</h3> <span>20.4$</span>
        <p>This dish is made by our special cheifs and tastes nice, 
          you won't regret having it.</p>
          <div id="order">
        <h3>Order a delivery</h3> <span>
          <img src={Basket}
               alt="Icon of an add basket"
               title="Add"
               id="basket-icon"/>
        </span>
        </div>
      </figcaption>
     </figure>

     <figure>
      <img src={Greeksalad}
            alt="An image of Greek salad dish"
            title="Greek salad"/>
      <figcaption>
        <h3>Greek salad</h3> <span>20.22$</span>
        <p>This dish is made by our special cheifs and tastes nice, 
          you won't regret having it.</p>

          <div id="order">
          <h3>Order a delivery</h3> <span>
          <img src={Basket}
               alt="Icon of an add basket"
               title="Add"
               id="basket-icon"/>
        </span>
        </div>
      </figcaption>
     </figure>
    </div>
  )
}


export function Testimonals (){

  return(
    <div id="third-section">
      <h1>Testimonials</h1>

     <figure>

      <figcaption>5 <FontAwesomeIcon 
      icon={solid("star")} size="lg" 
      style={{color: "#f2e12c",}} />
      </figcaption>

      <img src={tes1}
           alt="An image of the testifies"
           title="Rita"/>
           <span id="name"> Rita  </span>
      <p>Little lemon is a nice restaurant,
        I would recommend to anybody!
      </p>
     </figure>

     <figure>

      <figcaption>4 <FontAwesomeIcon 
      icon={solid("star")} size="lg" 
      style={{color: "#f2e12c",}} />
      </figcaption>

      <img src={tes2}
           alt="An image of the testifier"
           title="David"/>
           <span id="name"> David</span>
      <p>Their food is incredible and also
        their service.
      </p>
     </figure>
 
 <figure>

      <figcaption>5 <FontAwesomeIcon 
      icon={solid("star")} size="lg" 
      style={{color: "#f2e12c",}} />
      </figcaption>

      <img src={tes3}
           alt="An image of the testifies"
           title="Emillie"/>
           <span id="name">Emillie</span>
      <p>Little lemon is a nice restaurant,
        I would recommend to anybody!
      </p>
     </figure>

     <figure>

      <figcaption>5 <FontAwesomeIcon 
      icon={solid("star")} size="lg" 
      style={{color: "#f2e12c",}} />
      </figcaption>

      <img src={tes4}
           alt="An image of the testifies"
           title="john"/>
           <span id="name">John</span>
      <p>A must go place!
      </p>
     </figure>

      
    </div>
  )

}


export function About(){
  return (
    <div id="fourth-section">

     <div id="about">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
      A hotel is a commercial establishment that provides lodging,
      meals, and other services to guests, travelers,
      and tourists. Hotels can range from small family-run businesses to large international chains.
      Most hotels list a variety of services, such as room service, laundry, and concierge.
      </p>
     </div>

     <div id="images">
      <img src={Restaurant}
           alt="A pciture of the little lemon restaurant place"
           title='Little lemon'/>
      
     <img src={bruchetta}
          alt="A picture of cheif in restaurant"
          title="A cheif in little lemon"/>

     </div>
    </div>
  )
}
export default Main