import React from 'react';

const Instruments=({data})=>{
    
    var data1 = Object.entries(data)
    console.log(data1)
    return( 
        <>
          {
            data && data1.map((d)=>{
               return(
                <div className="container">
                <button class="btn" ><b>✦ {d[0]}: </b><i>{d[1]} ✧</i></button>
                <p>☽. ______________________________________________________ .☾</p>
                </div>)
           })
        }
    </>
    )
}

export default Instruments;