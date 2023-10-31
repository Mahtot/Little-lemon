import { useState, useEffect} from "react";
import '../assets/css/style.css';



function Reservations() {
    const [reserve, setReserve] = useState([{
                                   date: '',
                                   time: '',
                                   number_guests: '',
                                   occasion:''
    }]);
    
    
    const availableTimes = ["17:00", "18:00", "19:00" , "20:00", "21:00", "22:00"]
    const availableTimess = availableTimes.map((time, index)=>{
                         return <option value={time} key={index}>{time}</option>
    })

  
   

    
    const handleChange= (e)=>{
        const {name, value} = e.target;
        setReserve((prevReserve)=>({ ...prevReserve, [name]:value }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(reserve)
    }
   
    return (
    <div id='reservations-container'>
        <h1>Reserve a table</h1>
        <form 
        style={{display: "grid",
         gap: "20px", justifyContent:"center"}}
         onSubmit={handleSubmit}>
        
        <label>
            Choose date
            <input type="date" 
                   name="date"
                   value={reserve.date}
                   onChange={handleChange}
                   />
        </label>

        <label>
                Choose time
         <select name="time"
                 value={reserve.time}
                 onChange={handleChange}>
            {availableTimess}
         </select>
        </label>
       <label>
        Number of guests
        <input type="number" placeholder="1"
                min={1} max={10}
                value={reserve.number_guests}
                name="number_guests"
                onChange={handleChange}/>
       </label>

       <label>Occasion
            <select value={reserve.occasion}
                    name="occasion"
                    onChange={handleChange}>
                <option value="Anniversary">Anniversary</option>
                <option value="Birthday">Birthday</option>
            </select>
        </label>
       <input type="submit" 
              value="Make your reservation"
              disabled={!reserve.date}/>
        </form>



    </div>
  )
}
export default Reservations