import React from 'react';
import Logo from './Components/Logo/Logo';
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';
import Rodape from './Components/Rodapé/Rodape';

const App = () =>{
  return(
    <>
      <Logo/>
      <Navbar/>
      <Body/>
      <Rodape/>
    </>
  );
}

export default App