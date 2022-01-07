import React from "react";
import './Rodape.css';


export default function Rodape(){
    return(
        <section className="rodape">
            <div 
            className="copyright"
            >Copyright © 2022 Ranking Earning Yeld. 
            Todos os direitos reservados.</div>
            <div className="rede_social">
                <div className="item_social">
                    <a href="https://www.facebook.com/carlos.vinicius.71404" 
                    target="blank"><img src="./img/facebook.png"></img></a>
                </div>
                <div className="item_social">
                    <a href="https://www.instagram.com/" 
                    target="blank"><img src="./img/instagram.png"></img></a>
                </div>
                <div className="item_social">
                    <a href="https://www.linkedin.com/in/carlos-vin%C3%ADcius-7a963b205/" 
                    target="blank"><img src="./img/linkedin.png"></img></a>
                </div>
                <div className="item_social">
                    <a href="https://github.com/vinicarlosss" 
                    target="blank"><img src="./img/github.ico"></img></a>
                </div>
            </div>
        </section>

    );
}