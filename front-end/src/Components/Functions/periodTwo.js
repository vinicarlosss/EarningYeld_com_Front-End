const periodTwo = () =>{
    let hour = new Date().getHours()

    if(hour >= 0 && hour < 12){
        return 'AM'
    }else{
        return 'PM'
    }
};

export default periodTwo;