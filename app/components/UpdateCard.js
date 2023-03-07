"use client";
import axios from "axios";

export default function UpdateCard(props) {
  const updateCard = (e) => {
    e.preventDefault();

    const obj = {
      name: e.target.name.value,
      level: e.target.level.value,
      img: e.target.img.value,
      id: props.cardInfo.id,
    };
    console.log(obj);
    axios
      .put(`http://127.0.0.1:8000/api/v1/favDigimons${props.cardInfo.id}/`, obj)
      .then((result) => {
        axios
          .get("http://127.0.0.1:8000/api/v1/favDigimons")
          .then((result) => {
            props.setDigimons(result.data);
          })
          .catch((err) => {});
      })
      .catch((err) => {});
      props.closeForm();
  };
  return (
    <form className="" onSubmit={updateCard}>
      <div class="border border-[#D6B712] py-6 bg-gray-900 shadow-lg rounded-lg mb-6 w-4/6 ml-16">
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-8">
          <input
            type="text"
            name="name"
            defaultValue={props.cardInfo.name}
            class="bg-gray-300 max-w-full focus:outline-none rounded text-center text-gray-700"
          />
          <input
            type="text"
            name="level"
            defaultValue={props.cardInfo.level}
            class="bg-gray-300 max-w-full focus:outline-none text-gray-700 rounded text-center"
          />
          <input
            type="text"
            name="img"
            defaultValue={props.cardInfo.img}
            class="bg-gray-300 max-w-full focus:outline-none text-gray-700 rounded"
          />
          <button class="text-[#D6B712] bg-transparent border border-solid border-[#D6B712] hover:bg-[#D6B712] hover:text-[#C32B38] active:[#D6B712] font-bold uppercase px-2 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mx-4 max-w-full">
            Update
          </button>
        </div>
      </div>
    </form>
  );
}
