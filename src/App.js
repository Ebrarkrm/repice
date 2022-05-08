import React, { useState, useEffect } from "react";
import Eats from "./Eats";


function App() {
    const APP_ID = "107d9c05"
    const API_KEY = "a6da4b8a77566b6202d08d0821afa3be"

    const [eats,setEats]=useState([])
    const [search,setSearch] = useState("")
    const [text,setText]=useState("")


    useEffect(()=>{

        getEats();


    },[text])
    const getEats = async () => {
        const response= await fetch(`https://api.edamam.com/search?q=${text}&app_id=${APP_ID}&app_key=${API_KEY}`);
        const data = await response.json();
        setEats(data.hits)

    }
    const getSearch=(e)=>{
        e.preventDefault()
        setText(search)
        setSearch("")
    }


  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500">
      <form onSubmit={getSearch} className="min-h-100 flex justify-center items-center">
          <input value={search} onChange={(e)=>{setSearch(e.target.value)}} className="m-2 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none" type="text"/>
          <button className=" h-10 px-5 pr-10 inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out opacity-60" type="submit">Search</button>
      </form>
        <div className="grid gap-4 grid-cols-2 grid-rows-2 flex justify-around flex-wrap">
            {eats.map(e => (
                <Eats key={e.recipe.label}
                      title={e.recipe.label}
                      calories={e.recipe.calories}
                      image={e.recipe.image}
                      ingredients={e.recipe.ingredients}
                />
            ))}
        </div>
    </div>
  );
}

export default App;
