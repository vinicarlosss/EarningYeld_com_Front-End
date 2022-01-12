const period = () =>{
    let hour = new Date().getHours()

    if(hour >= 0 && hour < 13){
        return 'Bom dia'
    }else if(hour >= 13 && hour < 18){
        return 'Boa tarde'
    }else{
        return 'Boa noite'
    }
};


export default (period);