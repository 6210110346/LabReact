import React from 'react';
export default function Timer(){
    let seconds = 0;
    setInterval(()=> seconds = seconds + 1,1000)
    return(
        <div>
            Seconds: {seconds}
        </div>
    )
}