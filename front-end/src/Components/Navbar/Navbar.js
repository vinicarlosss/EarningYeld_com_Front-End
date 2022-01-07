import React from "react";
import Button from "../Button/Button";
import './Navbar.css';

export default function Navbar(){
    return(
        <section className="Navbar">
            <Button nome="Início"/>
            <Button nome="Sobre"/>
        </section>
    );
}