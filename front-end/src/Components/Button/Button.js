import React from "react";

export default function Button(props){
    return(
        <section className="Button">
            <button>{props.nome}</button>
        </section>
    );
}