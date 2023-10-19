import React, { useState,useEffect } from "react";
import { useData } from "./ActivityData";
import { BsImages } from "react-icons/bs";
import {BiSwim, BiCycling} from 'react-icons/bi'
import {GrYoga} from 'react-icons/gr'
import {GiBodyBalance} from 'react-icons/gi'
import {RiBoxingLine} from 'react-icons/ri'
import {FaRunning} from 'react-icons/fa'
import axios from "axios";

const AddActivityForm = ({ toggleFormVisibility, defaultType }) => {
  const { activityList } = useData();
  const [newActivity, setNewActivity] = useState([])
  const selectedActivity = activityList.find(
    (activity) => activity.name === defaultType
  );

  const iconComponents = {
    GiBodyBalance: <GiBodyBalance className="fill-white scale-150 mb-1" />,
    RiBoxingLine: <RiBoxingLine className="fill-white scale-150 mb-1" />,
    BiCycling: <BiCycling className="fill-white scale-150 mb-1" />,
    BiSwim: <BiSwim className="fill-white scale-150 mb-1" />,
    FaRunning: <FaRunning className="fill-white scale-150 mb-1" />,
  };
  
  const [activityData, setActivityData] = useState({
    name: "",
    description: "",
    type: "",
    duration: 0,
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setActivityData({
      ...activityData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://your-backend-api.com/activity/create", activityData);
      console.log("Activity created:", response.data);

      setActivityData({
        name: "",
        description: "",
        type: "",
        duration: 0,
        date: "",
      });
    } catch (error) {
      console.error("Error creating activity:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 gradient-background p-8 rounded-lg shadow-lg w-96 h-fit">
        <span
          className="absolute top-0 right-0 m-2 text-white cursor-pointer p-2"
          onClick={toggleFormVisibility}
          style={{ transform: "scale(2.5)" }}
        >
          &times;
        </span>
        <div className="mb-7 flex justify-start items-center gap-3 ">
          <div className="text-3xl text-white font-bold mb-1 text-center pb-1">
            {selectedActivity.name}
          </div>
          <div>{console.log(iconComponents[selectedActivity.icon])}</div>
          <div>{iconComponents[selectedActivity.icon]}</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-orange-400">
            <div className="mb-4 ">
              <label className="block text-xl font-bold mb-2 mt-12">
                Activity Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder=" Morning Jogging, Basic Yoga ..."
                value={activityData.name}
                onChange={handleInputChange}
                className="input input-bordered  w-80 rounded-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block  text-xl font-bold mb-2">
                Description:
              </label>
              <input
                name="description"
                value={activityData.description}
                onChange={handleInputChange}
                placeholder=" Tell about your activity..."
                className="input input-bordered  w-80 rounded-sm "
              ></input>
            </div>

            <div className="mb-4">
              <label className="block  text-xl font-bold mb-2">
                Duration (minutes):
              </label>
              <input
                type="number"
                name="duration"
                min={0}
                placeholder=" only number here"
                value={activityData.duration}
                onChange={handleInputChange}
                className="input input-bordered  w-80 rounded-sm"
              />
            </div>
            <div className="flex justify-center items-center gap-4 ">
              <div className="">
                <label className="block  text-xl font-bold">
                  Date:
                </label>
                <input
                  type="date"
                  name="date"
                  value={activityData.date}
                  onChange={handleInputChange}
                  className="input input-bordered  w-80 text-black h-10"
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 hover:cursor-pointer hover:scale-110 mt-10">
              <label className="flex bg-cyan-600 hover:bg-cyan-300 hover:cursor-pointer  w-80 gap-3 text-white font-semibold py-2 px-4 rounded items-center ">
                <input
                  type="file"
                  name="file"
                  className="file-input file-input-bordered file-input-info h-10 w-80 hover:cursor-pointer hidden"
                ></input>
                <BsImages /> Upload image <div className=" text-xs">(optional)</div>
                
              </label>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              type="submit"
              className="btn bg-orange-400 text-white w-80 hover:bg-orange-300 hover:scale-110"
            >
              Add Activity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddActivityForm;
