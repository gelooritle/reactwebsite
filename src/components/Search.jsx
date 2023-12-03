import React, {useState,useEffect,useRef}from "react";
import { Link, Outlet } from "react-router-dom";


const Search = () => {
    const [food,setFood] = useState("?");

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    const[input,setInput] = useState ("");
    const previousInput = useRef(0)

    useEffect(() => {
        previousInput.current = previousInput.current +1;
    },[input]);

    useEffect(()=>{
        setCalculation(() => count* 50000);
    }, [count]);


    return (
        
       <>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <h2>Current Value: {previousInput.current}</h2>
           

            <h1>My favorite food is {food}</h1>
            
            <button type="button" onClick={()=> setFood("Burger")}>Burger</button>
            <button type="button" onClick={()=> setFood("Shawarma")}>Shawarma</button>
            <button type="button" onClick={()=> setFood("Fries")}>Fries</button>
            

            <p>Like:{count}</p>
            <button onClick={()=>setCount((c) => c+1)}>Thumbs Up!</button>
            <button onClick={()=>setCount((c) => c-1)}>-</button>
            <p>Price: {calculation}</p>            
        
        
        <div className="Search">
            <h2>You are inside Search</h2>
            <h4>Hello</h4>
            
        <div className="search-nav">
            <Link to="/search/list">Search</Link>
            </div>  
            <Outlet/>  
        </div>
        </>
    );


};

export default Search;
