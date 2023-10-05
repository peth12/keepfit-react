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
      <div className="px-5 pt-5">
        <div className="w-screen flex justify-end ">
          <button
            className=" flex flex-col justify-center items-center btn btn-primary drop-shadow-xl text-white text-[20px] font-bold py-2 px-5 rounded-full  me-20 mt-[650px] w-[100px] h-[100px] fixed z-50"
            onClick={toggleFormVisibility}
          >
            Add<AiFillPlusCircle/>
          </button>
        </div>
      </div>

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
              <div className="mb-4">
                <label className="label-text text-primary font-semibold text-[16px]">
                  Activity name:
                  <input
                    type="text"
                    name="activityName"
                    placeholder="activity"
                    className="form-input m-1 px-2 block w-full caret-pink-500  bg-gray-200"
                    required
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="label-text text-primary font-semibold text-[16px]">
                  Descriptions:
                  <input
                    type="text"
                    name="description"
                    placeholder="description"
                    className="form-input mt-1 px-2 block w-full bg-gray-200"
                    required
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="label-text text-primary font-semibold text-[16px]">
                  Activity type:
                  <select
                    name="activityType"
                    className="form-select mt-1 block w-full text-gray-400"
                    required
                  >
                    <option value="Running">Running</option>
                    <option value="Swimming">Swimming</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Boxing">Boxing</option>
                    <option value="Yoga">Yoga</option>
                  </select>
                </label>
              </div>
              <div className="mb-4">
                <label className="label-text text-primary font-semibold text-[16px]">
                  Duration (time):
                  <div className="flex space-x-2">
                    <select
                      name="hours"
                      value={time.hours}
                      onChange={handleTimeChange}
                      className="form-select w-1/3 text-gray-400"
                    >
                      {Array.from({ length: 24 }, (_, i) => (
                        <option key={i} value={String(i).padStart(2, "0")}>
                          {String(i).padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                    <span className="flex items-center">:</span>
                    <select
                      name="minutes"
                      value={time.minutes}
                      onChange={handleTimeChange}
                      className="form-select w-1/3 text-gray-400"
                    >
                      {Array.from({ length: 60 }, (_, i) => (
                        <option key={i} value={String(i).padStart(2, "0")}>
                          {String(i).padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                    <span className="flex items-center">:</span>
                    <select
                      name="seconds"
                      value={time.seconds}
                      onChange={handleTimeChange}
                      className="form-select w-1/3 text-gray-400"
                    >
                      {Array.from({ length: 60 }, (_, i) => (
                        <option key={i} value={String(i).padStart(2, "0")}>
                          {String(i).padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                  </div>
                </label>
              </div>
              <div className="mb-4">
                <label className="label-text text-primary font-semibold text-[16px]">
                  Date:
                  <input
                    type="date"
                    name="date"
                    className="form-input mt-1 block w-full "
                    required
                  />
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded drop-shadow-xl"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          return(
          <div className="flex justify-end mx-6 mt-3">
            <button className="btn btn-primary  hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded w-full drop-shadow-m">
              Add Activity +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddActivityButton;
