import React from "react";

const Eats = ({title,calories,image,ingredients}) => {
    return(
        <div className="rounded-xl m-5 shadow-2xl flex flex-col  items-center min-w-min">
            <h1 className="text-4xl rounded-xl m-5 flex flex-col  items-center min-w-min">{title}</h1>
            <ol className="rounded-lg w-96 text-black-900">{ingredients.map(i=>(
                <li className="px-6 py-2 border-b border-black-200 w-full rounded-t-lg">{i.text}</li>
            ))}</ol>
            <p className="font-medium leading-tight text-2xl mt-0 mb-2 ">Calories = {calories.toFixed(2)}</p>
            <img className="m-3 max-w-full h-auto rounded-full max-w-xs hover:shadow-lg transition duration-300 ease-in-out" src={image}/>

        </div>
    )

}
export default Eats;