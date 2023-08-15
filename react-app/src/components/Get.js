import axios from "axios";
import { useEffect, useState } from "react";

const Get = () =>{
const [arr, setArr]= useState([]);

useEffect(()=>{
    axios.get(`https://restcountries.com/v3.1/all`).then((posRes)=>{
        const {data}= posRes;
        setArr(data);
        console.log(data);
        
    },(err)=>{
        console.log(err);
    })
},[])
return(
    <>
    {
        arr.map((element,index)=>{
            return(
                <>
                <div className="container">
                    <div><img src={element.flags.png}></img></div>
                    <div>{element.name.common}</div>
                    
                </div>
                </>
            )
        })
    }
    </>
)
};
export default Get;
