import React from "react";

import './Navbar.css';

import linkPage from "../Functions/linkPage";

export default function Navbar(){

    return(
        <section className="Navbar">
            <button onClick={()=>linkPage('home')}>Inicio</button>
            <button onClick={()=>linkPage('about')}>Sobre</button>
        </section>
    );
}