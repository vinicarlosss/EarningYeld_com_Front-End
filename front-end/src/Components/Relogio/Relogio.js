import React, {useState} from "react";
import './Relogio.css';
import periodTwo from "../Functions/periodTwo";

export default function Relogio(){
    let time = new Date().toLocaleTimeString();

    const [hour, setHour] = useState('AM');
    
    setInterval(()=>setHour(periodTwo()), 1000)
    return(
        <section className="relogio">
            <p>{time + ' ' + hour}</p>
        </section>
    )
}