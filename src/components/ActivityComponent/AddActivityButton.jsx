import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import AddActivityForm from "./AddActivityForm";

const AddActivityButton = ({ toggleFormVisibility}) => {
 
  return (
    <div>
      {/* Add button */}
      <button
        className="flex justify-end items-center btn btn-primary drop-shadow-xl text-white text-[20px] font-bold py-2 px-5 rounded-lg w-fit h-[20px]"
        onClick={toggleFormVisibility}
      >
        Do It Now
      </button>
    </div>
  );
};

export default AddActivityButton;
