import React,{useEffect,useState} from 'react';
import Instruments from './Instruments';

const Home=()=>{
    const [instData,setInstsData]=useState([])
    useEffect(()=>{
        axios.get('test.instrument.json')
            .then(res=>{
                console.log('Response from main API: ',res.data.data)
                setColorsData(res.data.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
            <Instruments data={instData}/>
        </>
    )
}

export default Home;