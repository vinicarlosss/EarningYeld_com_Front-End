import axios from "axios";
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


export default class Ranking extends React.Component{
    state={
        dados:[],
    }
    componentDidMount(){
        axios.get('http://localhost:5000/listar-ranking')
        .then(res=>{
            const dadosEmpresas = res.data
            this.setState({dados:dadosEmpresas})
        })
    }
    render(){
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
                        {this.state.dados.map((item)=>(
                            <tr  key={this.state.dados.indexOf(item)}>
                                <td>{this.state.dados.indexOf(item)+1 +'º'}</td>
                                <td >{item.ticker}</td>
                                <td style={{display:'flex',justifyContent:'center'}}>{item.nome_empresa}</td>
                                <td >{item.earning_yeld+ '%'}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
    
            </div>
        )
    }

}