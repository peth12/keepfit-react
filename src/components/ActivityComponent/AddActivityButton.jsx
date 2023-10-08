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
        className={`fixed bottom-10 right-10 flex justify-center items-center btn btn-primary drop-shadow-xl text-white text-[20px] font-bold py-2 px-5 rounded-full w-[100px] h-[100px] ${
          isFormVisible ? "hidden" : "block"
        }`}
        onClick={toggleFormVisibility}
      >
        Add <AiFillPlusCircle />
      </button>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* ... Form content ... */}
        </div>
      )}
    </div>
  );
};

export default AddActivityButton;
