import React , { useState } from "react";


function FavoriteFood(){
    const [food,setFood] = useState("Pizza");
}
return (
    <>
    <h1>My favorite food is {food}</h1>
    
    <button type="button" onClick={()=> setFood("Burger")}>Burger</button>
    <button type="button" onClick={()=> setFood("Shawarma")}>Shawarma</button>
    <button type="button" onClick={()=> setFood("Fries")}>Fries</button>
    
    
    </>
)