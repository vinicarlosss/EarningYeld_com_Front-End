import React from 'react';
import Logo from './Components/Logo/Logo';
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';
import Rodape from './Components/Rodapé/Rodape';
import Relogio from './Components/Relogio/Relogio';

const App = () =>{
  return(
    <>
      <Logo/>
      <Navbar/>
      <Body/>
      <Relogio/>
      <Rodape/>
    </>
  );
}

export default App