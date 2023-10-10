import React, { useState } from "react";


const AddActivityButton = ({ toggleFormVisibility, onClick, activityName}) => {
 
  const handleButtonClick = () => {
    toggleFormVisibility();
    onClick(activityName);
  };

  return (
    <div>
      {/* Add button */}
      <button
        className="flex justify-end items-center btn btn-primary drop-shadow-xl text-white text-[20px] font-bold py-2 px-5 rounded-lg w-fit h-[20px]"
        onClick={handleButtonClick}
      >
        Do It Now
      </button>
    </div>
  );
};

export default AddActivityButton;
