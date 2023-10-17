import React, { useState } from "react";
import { useData } from "./ActivityData";

const AddActivityForm = ({ toggleFormVisibility, defaultType }) => {
  const { activityList } = useData();

  const selectedActivity = activityList.find(
    (activity) => activity.name === defaultType
  );

  const [activityData, setActivityData] = useState({
    name: "",
    description: "",
    type: defaultType,
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

      <div className="relative z-10 gradient-background p-8 rounded-lg shadow-lg w-96 h-fit">
        <span
          className="absolute top-0 right-0 m-2 text-white cursor-pointer p-2"
          onClick={toggleFormVisibility}
          style={{ transform: "scale(2.5)" }}
        >
          &times;
        </span>

        <form onSubmit={handleSubmit}>
          <div className="mb-7 flex justify-start items-center gap-3 ">
            <div className="text-3xl text-white font-bold mb-1 text-center pb-1">
              {selectedActivity.name}
            </div>
            <div>{selectedActivity.icon}</div>
          </div>
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
                type="text"
                name="duration"
                placeholder=" only number here"
                value={activityData.duration}
                onChange={handleInputChange}
                className="input input-bordered  w-80 rounded-sm"
              />
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="">
                <label className="block  text-xl font-bold">Date:</label>
                <input
                  type="date"
                  name="date"
                  value={activityData.date}
                  onChange={handleInputChange}
                  className="input input-bordered  w-fit text-black h-10"
                />
              </div>
              <div className="h-fit mt-7">
                <label className=" bg-cyan-600  hover-bg-cyan-400 duration-150 text-white font-semibold py-2 px-4 rounded cursor-pointer items-center ">
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-info w-full max-w-xs h-10"
                  />{" "}
                  Upload image
                </label>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button type="submit" className="btn btn-primary text-white">
              Add Activity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddActivityForm;
