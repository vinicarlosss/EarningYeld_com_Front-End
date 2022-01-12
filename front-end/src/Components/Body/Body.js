import React from 'react';
import './Body.css';
import Button from '../Button/Button';

export default function Body(props){

    return(
        <section className='body'>
            <h1>{props.hour + ', seja bem vindo ao Ranking Earning Yeld'}</h1>
            <section className='box'>
                <h4>Escolha uma opção para continuar:</h4>
                <Button nome="Ranking de ações"/>
                <Button nome="Informações sobre ação individual"/>
            </section>

        </section>
    );
}