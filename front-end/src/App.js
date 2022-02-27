import React, {useEffect,useState} from 'react';
import Home from './Components/Home/Home';
import Ranking from './Components/Ranking/Ranking';
import About from './Components/About/About';
import Info from './Components/Info/Info';
import './App.css';

const App = () =>{
  const [page,setPage] = useState('home')

  useEffect(
    () =>{
      const url = window.location.href
      const res = url.split('?')
      setPage(res[1])
    }
  )


  const returnPage = () => {
    if(page == 'home'){
      return <Home/>
    }else if(page == 'about'){
      return <About/>
    }else if(page == 'ranking'){
      return <Ranking/>
    }else if(page == 'info'){
      return <Info/>
    }else{
      return (<>
        <Home/>
      </>
      )}
  }

  return(
    <div className='geral'>
      {returnPage()}
    </div>
      

  );
}

export default App