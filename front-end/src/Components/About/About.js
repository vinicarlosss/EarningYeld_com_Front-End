import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import './About.css'
import Rodape from "../Rodapé/Rodape";

export default function About (){
    return (
        <>
        <Logo/>
        <Navbar/>
        <section className="about">
            <h1>Sobre o projeto</h1>
            <p>O projeto foi criado com o intuito de: Reunir informações da bolsa de valores, e disponibilizar um ranking com as ações mais baratas. 
                O ranking é realizado com base em um único indicador, o earning yeld. Este indicador foi apresentado por Joel Greenblatt em seu livro a fórmula mágica para bater o mercado de ações.
                Toda a aparência do projeto foi desenvolvida em Reactjs. Quanto a parte que roda por trás dos panos, foi desenvolvida uma api em nodejs, essa api se comunica 
                com um banco de dados mysql que contém as informações que precisamos. Tais dados são adquiridos de uma api encontrada na internet, essa api busca informações das empresas publicadas
                pela CVM (Comissão de valores mobiliários). Vale destacar que esse projeto de forma alguma serve de análise ou indicação de investimento, sendo utilizado apenas com intuito acadêmico.</p>
            <h1>Sobre o desenvolvedor</h1>
            <p>Meu nome é Carlos Vinícius, tenhos 23 anos e sou estudante de sistemas de informações da universidade federal rural de pernambuco. Venho desenvolvendo esse projeto sozinho, apenas com
                o intuito de melhorar minhas habilidades com React. Além disso, tenho interesse por assuntos envolvendo bolsa de valores e mercado financeiro, utilizando assim o projeto para uso pessoal,
                facilitando a visualização dos dados que preciso para os meus investimentos.
            </p>
            <h1>Sobre o Livro</h1>
            <p>O livro, intitulado no Brasil: A fórmula mágica de Joel Greenblatt para bater o mercado de ações. Originalmente, o livro tem o nome de the little book that beats the market,
                foi publicado em 2010 pelo investidor norte americano, Joel Greenblatt. Foi um bestseller, vendendo cerca de 300 mil cópias. Joel Greenblate, por sua vez, nasceu em 1957 em nova york, é um acadêmico, 
                admnistrador de fundos de hedge, investidor e escritor.
            </p>
            <div className="img">
                <img src="/img/formula_magica.jpg"/>
            </div>
            <p>O livro tem uma didática muito simples e fácil de se entender, é uma leitura leve que com afinco pode ser feita até mesmo em um fim de semana. De acordo com o autor,
                o livro foi escrito para que seus filhos, pequenos à época, pudessem entender. Além disso, o livro apresentador dois indicadores, o Earning yeld e o Return of capital. O earning yeld
                é apresentado com a premissa de revelar a lucratividade da empresa em relação com as suas dívidas. Já o Return of capital é apresentado como um indicador que nos demonstra o quanto a empresa retorna
                em relação ao seu investimento.
            </p>
            <div className="rodape">
                <Rodape/>
            </div>
        </section>

        
        </>
    )
}