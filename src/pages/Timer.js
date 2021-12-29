import {useState, useRef,useEffect} from 'react';

const Timer =()=>{

    const [timer,setTimer]=useState(0)
    const intervalRef =useRef()
    useEffect(()=>{
        intervalRef.current= setInterval(()=>{
            setTimer(timer=>timer+1)
        },1000)
    },[])

    return (
        <div>
            <h3>{timer}</h3>
            <button onClick={()=>clearInterval(intervalRef.current)}>Clear Timer</button>
        </div>
    )
};
export default Timer;