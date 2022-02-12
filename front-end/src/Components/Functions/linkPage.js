const linkPage = (p) => {
    if(p == 'home'){
      window.open('http://localhost:3000?home', '_self')
    }else if(p == 'about'){
      window.open('http://localhost:3000?about', '_self')
    }else if(p == 'ranking'){
      window.open('http://localhost:3000?ranking', '_self')
    }else if(p == 'info'){
      window.open('http://localhost:3000?info', '_self')
    }
  }

  export default (linkPage);