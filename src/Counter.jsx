import { useState } from "react";

function Counter(){

    const[Count,setCount]=useState(0);

    function Increase(){
        setCount(Count+1);
    }

    function Decrease(){
        setCount(Count-1);
    }

    function Reset(){
        setCount(0);
    }

    return(
        <>
        <h1>Counter Demostration</h1>
        <h2>COUNT={Count}</h2>
        <center>
        <button style={{background:"blue" , color:"red" , width:"150px" }} onClick={Increase}>Increases</button>
         <button style={{background:"black" , color:"white" , width:"150px" }} onClick={Decrease}>Decreases</button>
         <button style={{background:"purple" , color:"pink" , width:"150px" }} onClick={Reset}>Reset</button>
        </center>
        
        
        </>
    )
}
export default Counter;