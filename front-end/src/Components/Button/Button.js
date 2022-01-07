import React from "react";
import './Button.css';

export default function Button(props){
    return(
        <section className="Button">
            <button>{props.nome}</button>
        </section>
    );
}