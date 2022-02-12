import React from 'react';
import './Body.css';
import linkPage from '../Functions/linkPage';

import period from '../Functions/period';

export default function Body(){



    return(
        <section className='body'>
            <h1>{period() + ', seja bem vindo ao Ranking Earning Yeld'}</h1>
            <section className='box'>
                <h4>Escolha uma opção para continuar:</h4>
                <button onClick={()=>linkPage('ranking')}>Ranking de ações</button>
                <button onClick={()=>linkPage('info')}>Informações sobre ação individual</button>
            </section>

        </section>
    );
}