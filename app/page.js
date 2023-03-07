"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    axios
      .get('https://digimon-api.vercel.app/api/digimon')
      .then((result) => {
        setDigimons(result.data);
      })
      .catch((err) => {
      });
  }, []);

  const addToFav = (item) => {
    const url='http://127.0.0.1:8000/api/v1/favDigimons'
    const obj={
      name:item.name,
      level:item.level,
      img:item.img,
    }
    axios
      .post(url,obj)
      .then((result) => {
      })
      .catch((err) => {
      });
    
  };


  return (
    <>
    {digimons.length>0?<div className="flex-1 px-6 sm:px-0 py-10 bg-black">
      <div className="mb-10 sm:mb-0 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-16 bg-black">
        {digimons.length > 0 &&
          digimons.map((item) => {
            return (
              <div className="relative group bg-gray-900 py-1 sm:py-5 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/50 hover:smooth-hover border-2 border-[#D6B712]">
                <img
                  className="w-25 h-25 rounded-full transition duration-300 hover:scale-110"
                  src={item.img}
                  alt="cuisine"
                />
                <h4 className="text-[#D6B712] text-2xl font-bold capitalize text-center">
                  {item.name}
                </h4>
                <p className="text-[#D6B712]/50">{item.level}</p>
                <button
                  class="text-[#D6B712] bg-transparent border border-solid border-[#D6B712] hover:bg-[#D6B712] hover:text-[#C32B38] active:[#D6B712] font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => addToFav(item)}
                >
                  Add To Fav
                </button>
              </div>
            );
          })}
      </div>
    </div>:
    <div className="h-screen w-screen"></div>
    }
    </>
  );
}
