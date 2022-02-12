import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Body from "../Body/Body";
import Relogio from "../Relogio/Relogio";
import Rodape from "../Rodapé/Rodape";

export default function Home(){
    return(
        <>
            <Logo/>
            <Navbar/>
            <Body/>
            <Relogio/>
            <Rodape/>
        </>
    )
}