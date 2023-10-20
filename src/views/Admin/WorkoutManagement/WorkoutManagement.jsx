import React, { useEffect, useState } from "react";
import { LayoutAdmin } from "../../../components/LayoutAdmin";
import { LiaEvernote } from "react-icons/lia";
import SearchBox from "../SearchBox.jsx";
import { MdOutlineSportsMartialArts } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditWorkout from "./EditWorkout.jsx";
import DeleteWorkout from "./DeleteWorkout.jsx";
import AddWorkout from "./AddWorkout.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const WorkoutManagement = () => {
  const [allActivityType, setAllActivityType] = useState([]);
  const [reload, setReload] = useState(false);
  const notify = () => toast.success("delete success");

  useEffect(() => {
    axios
      .get(`https://keepfit-backend.onrender.com/activityType`)
      .then((result) => {
        setAllActivityType(result.data);
      })
      .catch((err) => console.error(err));
  }, [reload]);

  const deleteActivityType = async (data) => {
    if (window.confirm(`Are you sure delete`)) {
      await axios
        .delete(`https://keepfit-backend.onrender.com/activityType/${data}`)
        .then((res) => {
          console.log(res.data);
          setReload(!reload);
          notify();
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      <LayoutAdmin>
        <Toaster position="top-right" reverseOrder={false} />
        <div className="w-[90%] mx-auto">
          {/* Container for h1 and search bar */}
          <div className="pt-36 pb-7 w-full ">
            <h1 className="text-primary text-3xl font-bold flex gap-2 items-center">
              Workout Management <MdOutlineSportsMartialArts />
            </h1>
          </div>
          <div className="flex justify-end pb-6">
            <SearchBox />
          </div>
          <div className="flex justify-start pb-6">
            <AddWorkout />
          </div>

          <div className="overflow-x-auto">
            <table className="table border-collapse">
              {/* Table head */}
              <thead className="text-[18px] text-slate-600">
                <tr>
                  <th className="w-1/5 border border-r">Workout Name</th>
                  <th className="w-1/5 border border-r">Description</th>
                  <th className="w-1/5 border border-r">Photo</th>
                  <th className="w-1/5 border border-r">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 - Boxing */}

                {allActivityType.map((item, index) => (
                  <tr className="hover" key={index}>
                    <td className="w-1/5 border border-r">
                      {item.ActivityTypeName}
                    </td>
                    <td className="w-1/5 border border-r">
                      {item.ActivityTypeDesc}
                    </td>
                    <td className="w-1/5 border border-r">
                      <div className="w-16 rounded-lg overflow-hidden">
                        <img src={item.ActivityTypeImage} alt="" />
                      </div>
                    </td>

                    <td className="border-b border-r ">
                      <div className="flex gap-2">
                        <EditWorkout />
                        <button
                          onClick={() => deleteActivityType(item._id)}
                          className="p-1 px-3 rounded-lg items-center gap-1 bg-red-500 hover:bg-red-600 text-white flex"
                        >
                          Delete
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </LayoutAdmin>
    </>
  );
};

export default WorkoutManagement;
