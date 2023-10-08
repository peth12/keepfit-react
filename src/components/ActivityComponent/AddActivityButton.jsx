import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const AddActivityButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedTime = `${time.hours}:${time.minutes}:${time.seconds}`;
    // Handle form submission here with formattedTime
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setTime({
      ...time,
      [name]: value,
    });
  };

  return (
    <div>
      {/* Add button */}
      <button
        className="fixed bottom-10 right-10 flex justify-center items-center btn btn-primary drop-shadow-xl text-white text-[20px] font-bold py-2 px-5 rounded-full w-[100px] h-[100px]"
        onClick={toggleFormVisibility}
      >
        Add <AiFillPlusCircle />
      </button>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg">
            <span
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 cursor-pointer"
              onClick={toggleFormVisibility}
            >
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              {/* ... Form content ... */}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddActivityButton;
