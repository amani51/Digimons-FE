"use client";
import { useState,useEffect } from "react"
import axios from "axios";

export default function MyDigimons(){

    const [digimons, setDigimons] = useState([]);
    useEffect(() => {
      axios
        .get("https://digimon-api.vercel.app/api/digimon")
        .then((result) => {
          console.log(result.data);
          setDigimons(result.data);
        })
        .catch((err) => {console.log(err)});
    }, []);

    return (
        <div className="flex-1 px-6 sm:px-0 py-10">
        <div className="mb-10 sm:mb-0 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-16 ">
          {digimons.length > 0 && digimons.map((item)=>{
            return (
              <div className="relative group bg-gray-900 py-4 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
            <img className="w-30 h-30 object-cover rounded-full transition duration-300 ease-in-out hover:scale-110" src={item.img} alt="cuisine" />
            <h4 className="text-[#D6B712] text-2xl font-bold capitalize text-center">{item.name}</h4>
            <p className="text-[#D6B712]/50">{item.level}</p>
            <button class="text-amber-500 bg-transparent border border-solid border-amber-500 hover:bg-amber-500 hover:text-[#C32B38] active:bg-amber-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"> Add To Fav
  </button>
          </div>
            )
          })  }
          
  
        </div>
      </div>
    )
}