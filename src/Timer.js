import React,{useState} from 'react';
export default function Timer(){
    const [seconds, setTime] = useState(0);
    setInterval(()=> {
        // setTime(seconds + 1)
        // console.log(seconds)
    },1000)
    
    return(
        <div>
            Seconds: 
        </div>
    )
}