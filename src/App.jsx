import { useState } from "react";
import Counter from "./Counter";
function Home(){
  return(
    <>
    <h2>My Home Page</h2>
    </>
  )
}

function About(){
  return(
    <>
    <h2> My About Component</h2>
    </>
  )
}

function Shubham(){
  return(
    <>
    <h2 style={{color:"blue"}}>Yo! Shubham Here</h2>
    <h2 style={{color:"pink"}}>Id No:2500030511</h2>
    </>
  )
}

function Student(props){
  return(
    <>
      <h2>Student Details</h2>
      <h2>Name={props.name}</h2>
      <h2>Age={props.age}</h2>
      <h2>Marks={props.marks}</h2>
    </>
  )
}


function App(){

  let sname="Shubham gupta";
  let sage="21";
  let smarks="80";
  const[Count,setCount]=useState(0);
    
  return(
    <>
    <h1 style={{color:"red"}}>Welcome to React JS</h1>
    <Home />
    <About/>
    <Shubham/>
    <h1 style={{color:"red"}}>Props Demonstration</h1>
    <Student name={sname} age={sage} marks={smarks} />
    <h1 style={{color:"red"}}>State Demonstration</h1>
    <Counter/>
    </>
  )
}
export default App;