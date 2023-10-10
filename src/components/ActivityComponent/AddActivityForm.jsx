import React, { useState } from "react";
import { useData } from "./ActivityData";

const AddActivityForm = ({ toggleFormVisibility, defaultType }) => {
  const { activityList } = useData();

  const [activityData, setActivityData] = useState({
    name: "",
    description: "",
    type: activityList.name,
    duration: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
    console.log(activityData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setActivityData({
      ...activityData,
      [name]: value,
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-96 h-fit">
        <span
          className="absolute top-0 right-0 m-2 text-gray-500 cursor-pointer p-2"
          onClick={toggleFormVisibility}
          style={{ transform: "scale(2.5)" }}
        >
          &times;
        </span>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2">
              Activity Name:
            </label>
            <input
              type="text"
              name="name"
              value={activityData.name}
              onChange={handleInputChange}
              className="form-input bg-slate-300 w-80 rounded-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2">
              Description:
            </label>
            <textarea
              name="description"
              value={activityData.description}
              onChange={handleInputChange}
              className="form-textarea bg-slate-300 w-80 rounded-sm"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2">
              Activity Type:
            </label>
            <div>{defaultType}</div>
            {/* <select
                  name="type"
                  value={defaultType}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="Yoga">Yoga</option>
                  <option value="Cycling">Cycling</option>
                  <option value="Swimming">Swimming</option>
                  <option value="Boxing">Boxing</option>
                  <option value="Running">Running</option>
                </select> */}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2">
              Duration (minutes):
            </label>
            <input
              type="text"
              name="duration"
              value={activityData.duration}
              onChange={handleInputChange}
              className="form-input bg-slate-300 w-80 rounded-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2">
              Date:
            </label>
            <input
              type="date"
              name="date"
              value={activityData.date}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
  
          <div className="mb-4 flex justify-center">
            <label className=" bg-cyan-600  hover:bg-cyan-400 duration-150 text-white font-semibold py-2 px-4 rounded cursor-pointer items-center ">
            <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" /> Upload image
            </label>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary text-white">
              Add Activity
            </button>
          </div>
          <div>{activityList.name}</div>
          <div>{console.log(activityList.name)}</div>
        </form>
      </div>
    </div>
  );
};

export default AddActivityForm;
