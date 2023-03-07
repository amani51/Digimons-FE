"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import UpdateCard from "../components/UpdateCard";

export default function MyDigimons() {
  const [digimons, setDigimons] = useState([]);
  const [flagForm,setFlagForm]=useState(false)
  const [cardInfo,setCardInfo]=useState({})

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/favDigimons")
      .then((result) => {
        setDigimons(result.data);
      })
      .catch((err) => {
      });
  }, []);

  const deleteCard = (item) => {
    axios
      .delete(`http://127.0.0.1:8000/api/v1/favDigimons${item.id}`)
      .then((result) => {
      axios
      .get("http://127.0.0.1:8000/api/v1/favDigimons")
      .then((result) => {
        setDigimons(result.data);
      })
      .catch((err) => {
      });
      })
      .catch((err) => {
      });
    
  };

  const closeForm = () => {
    setFlagForm(false)
  }

  const openForm=(item)=>{
    setCardInfo(item)
    setFlagForm(true)
  }

  return (
    <>{digimons.length > 0 ?<div className="flex-1 px-6 sm:px-0 py-10 bg-black">
      {flagForm && <UpdateCard
      flagForm={flagForm}
      cardInfo={cardInfo}
      closeForm={closeForm}
      setDigimons={setDigimons}
      />}
      <div className="mb-10 sm:mb-0 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-16">
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
                <div className="flex justify-center w-full mt-2">
                <button
                  class="text-[#D6B712] bg-transparent border border-solid border-[#D6B712] hover:bg-[#D6B712] hover:text-[#C32B38] active:[#D6B712] font-bold uppercase px-2 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mx-4 "
                  type="button"
                  onClick={()=>openForm(item)}
                >
                  Update
                </button>
                <button
                  class="text-[#C32B38] bg-transparent border border-solid border-[#C32B38] hover:bg-[#C32B38] hover:text-[#D6B712] active:[#D6B712] font-bold uppercase px-2 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mx-4"
                  type="button"
                  onClick={()=>deleteCard(item)}
                >
                  Delete
                </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>:
    <div className="h-96 mt-24 flex justify-center">
    <h1 className=" text-[#C32B38] text-7xl">No Available Cards ¯\_(ツ)_/¯</h1>
     </div>}
    
    </>
  );
}
