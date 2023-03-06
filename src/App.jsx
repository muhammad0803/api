import './App.css';
import { Context } from './Context';  
import {useState,useEffect, useRef} from "react"
import Crud from './crud/Crud';
import { Crud2 } from './crud/Crud2';
import { useContext } from 'react';
import {DataContext} from "../src/DataContext"




function App() {
  const [data,setData]=useState([]);
  const [mot,setMot]=useRef;

  useEffect(()=>{
  fetch("http://api.escuelajs.co/api/v1/products ")
      .then(response => response.json())
      .then(json => setData(json))
    },[])

  const{user,setUser}=useContext(DataContext)
  
  return(
    <>
      <button onClick={()=> setUser({name: "change test name"})} > change </button>
      <Crud2/>
    </>
    )

      //   <div className='cards'>
      //     {
      //       data.slice(0,20).map((item ,index) =>{
      //         return(
      //           <div key={index} className="card">
      //             <p>{item.title}</p>
      //             <p>{item.description}</p>
      //             <div><img src={item.images[0]} alt="" /></div>
      //             <p>{item.price}</p>
      //           </div>
      //         )
      //       })
      //     }
      //   </div>

}

export default App;
