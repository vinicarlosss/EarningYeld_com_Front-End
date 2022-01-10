import React from "react";
import './Relogio.css';

export default function Relogio(){
    let time = new Date().toLocaleTimeString();
    return(
        <section className="relogio">
            <p>{time}</p>
        </section>
    )
}