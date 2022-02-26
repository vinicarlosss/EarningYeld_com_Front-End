import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

const cssTitulo = {
    display: 'flex',
    justifyContent: 'center',
    color: 'rgba(206, 195, 110, 100)'
}

const cssTable = {
    width: '80vw',
    borderCollapse:'collapse',   
}

const cssDivTable = {
    display: 'flex',
    justifyContent: 'center',
    color: 'rgba(206, 195, 110, 100)'
}

const dados = [
    {posicao:1,ticker:'PETR4', empresa:'Petrobras', ey:20.2},
    {posicao:2,ticker:'CGRA4', empresa:'GRAZIOTIN', ey:20.2},
    {posicao:3,ticker:'ITUB4', empresa:'ITAU', ey:20.2},
    {posicao:4,ticker:'ENAT3', empresa:'ENAUTA', ey:20.2},
    {posicao:5,ticker:'alup3', empresa:'alupar', ey:20.2}
]


/*{dados.forEach(item=>{return (<tr>
    <td>{item.posicao}</td>
    <td>{item.ticker}</td>
    <td>{item.empresa}</td>
    <td>{item.ey}</td>
</tr>)})}*/
export default function Ranking(){
    return(
        <div>
            <Logo/>
            <Navbar/>
            <h1 style={cssTitulo}>Ranking de informações:</h1>
            <div style={cssDivTable}>
                <table border='5' style={cssTable}>
                    <thead>
                        <tr>
                            <th style={{width:'1vw'}}>Posição</th>
                            <th>Ticker</th>
                            <th>Nome da empresa</th>
                            <th>Earning yeld</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados.map((item)=>(
                            <tr>
                                <td>{item.posicao}</td>
                                <td>{item.ticker}</td>
                                <td>{item.empresa}</td>
                                <td>{item.ey}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}