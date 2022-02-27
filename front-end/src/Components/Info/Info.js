import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import axios from "axios";


const dadosEmpresa = (sd) =>{
    axios.get('http://localhost:5000/listar-empresa')
    .then(res=>{
        sd(res.data)
    })
}

const cssTable = {
    width: '80vw',
    borderCollapse:'collapse',   
}

const cssDivTable = {
    display: 'flex',
    fontSize: '20px',
    margin: '5px',
    justifyContent: 'center',
    color: 'rgba(206, 195, 110, 100)'
}

const linhas = (empresa, dados) =>{
    const li = []
    dados.forEach(
        (item)=>{
            if(item.ticker.toLocaleUpperCase()==empresa.toLocaleUpperCase()
            ){
                li.push(
                    <tr>
                        <td>{item.ticker}</td>
                        <td>{item.nome_empresa}</td>
                        <td>{'R$'+item.ebit}</td>
                        <td>{'R$'+item.valor_mercado}</td>
                        <td>{'R$'+item.divida_liquida}</td>
                    </tr>
                    
                )
    
            }
        }
    )
    if(li.length == 0){
        li.push(<span style={{display:'flex',justifyContent:'center'}}>Não encontrado</span>)
        return li
    }
    return li

}

const pesquisaEmpresa = (empresa, setEmpresa) => {
    return(
        <div style={cssDivTable}>
            <label>Digite uma empresa:</label>
            <input type="text" value={empresa}
            onChange={(e)=>setEmpresa(e.target.value)}></input>
        </div>

    )
}
export default function Info(){
    const [dados,setDados] = useState([])
    const [empresa, setEmpresa] = useState('')
    useEffect(
        ()=>{
            dadosEmpresa(setDados)
        }
    )
    
    return <>
        <Logo/>
        <Navbar/>
        {pesquisaEmpresa(empresa,setEmpresa)}
        <text style={{display:'flex', justifyContent:'center',color:'rgba(206, 195, 110, 100)'}}>Obs: Valores em milhões de reias</text>
        <div style={cssDivTable}>
            <table border='5' style={cssTable}>
                <thead>
                    <tr>
                        <th>ticker</th>
                        <th>nome da empresa</th>
                        <th>ebit</th>
                        <th>valor de mercado</th>
                        <th>dívida líquida</th>
                    </tr>
                </thead>
                <tbody>{linhas(empresa,dados)}</tbody>
            </table>
        </div>

    </>

}