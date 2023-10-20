import { React, useEffect, useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { LayoutAdmin } from "../../../components/LayoutAdmin";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const EditWorkoutPage = () => {
  const { id } = useParams();
  const [activityTypeName, setActivityTypeName] = useState("");
  const [activityTypeImage, setActivityTypeImage] = useState("");
  const [activityTypeDesc, setActivityTypeDesc] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://keepfit-backend.onrender.com/activityType/${id}`)
      .then((result) => {
        setActivityTypeName(result.data.ActivityTypeName);
        setActivityTypeImage(result.data.ActivityTypeImage);
        setActivityTypeDesc(result.data.ActivityTypeDesc);
      })
      .catch((err) => console.error(err));
  }, []);

  const updateActivityType = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://keepfit-backend.onrender.com/activityType/update/${id}`, {
        ActivityTypeName:activityTypeName,
        ActivityTypeImage: activityTypeImage,
        ActivityTypeDesc: activityTypeDesc
      })
      .then((res) => {
        console.log(res);
        navigate("/admin/workout");
        setTimeout(() => {
          toast.success("Update Success", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }, 1);
      })
      .catch((err) => console.error(err));
  };
  return (
    <LayoutAdmin>
      <div className="xl:container xl:mx-auto">
        <div className="px-4 mt-28">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-xl shadow-lg">
              {/* Profile picture card */}
              <div className="bg-white rounded-lg shadow-md p-4 pb-10">
                <div className="text-xl font-black flex">
                  <strong className=" bg-primary rounded-full text-white px-10 p-2 flex gap-x-5">
                    Edit Workout <FaUserAstronaut />{" "}
                  </strong>
                </div>
                <div className="text-center mt-4">
                  {/* Profile picture image */}
                  <img
                    className="w-48 h-48 mx-auto rounded-full mb-2 border-primary border-4 object-cover"
                    src={activityTypeImage}
                    alt=""
                  />
                  {/* Profile picture help block */}

                  <div className="text-xl text-black my-10 ">{}</div>

                  {/* Profile picture edit button */}

                  <label className="bg-primary hover:bg-primary-focus duration-150 text-white font-semibold py-2 px-4 rounded cursor-pointer">
                    <input type="file" className="hidden" /> Upload new image
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-2 mb-10 rounded-xl shadow-lg">
              {/* Account details card */}
              <div className="bg-white rounded-lg shadow-md p-4">
                {/* Form */}
                <form className="mt-4">
                  {/* Form Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Form Group (first name) */}
                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-600 "
                        htmlFor="inputFirstName"
                      >
                        Activity Name
                      </label>

                      <input
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                        id="inputFirstName"
                        type="text"
                        value={activityTypeName}
                        placeholder="Enter your first name"
                        onChange={(e) => setActivityTypeName(e.target.value)}
                      />
                    </div>
                    {/* Form Group (last name) */}
                    <div>
                      <label
                        className="block text-sm font-semibold text-gray-600"
                        htmlFor="inputLastName"
                      >
                        Description
                      </label>

                      <input
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                        type="text"
                        value={activityTypeDesc}
                        placeholder="Enter your last name"
                        onChange={(e) => setActivityTypeDesc(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* Form Row */}

                  <div className="flex gap-6">
                    <button
                      className="btn btn-primary text-white font-semibold py-2 px-4 rounded"
                      onClick={updateActivityType}
                    >
                      Save changes
                    </button>
                    <Link to={"/admin/workout"}>
                      <button className="btn  bg-slate-500 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded">
                        Discard Changes
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default EditWorkoutPage;
