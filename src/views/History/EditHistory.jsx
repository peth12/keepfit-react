import React, { useEffect, useState } from "react";

import { FaUserAstronaut } from "react-icons/fa";
import { Layout } from "../../components/Layout";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Fade } from "react-awesome-reveal";

const EditHistory = () => {
  const { id } = useParams();
  const [activityName, setActivityName] = useState("");
  const [activityDesc, setActivityDesc] = useState("");
  const [activityType, setActivityType] = useState("");
  const [activityDuration, setActivityDuration] = useState("");
  const [activityImage, setActivityImage] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [allActivityType, setAllActivityType] = useState([]);
  const [previewSource, setPreviewSource] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://keepfit-backend.onrender.com/activity/${id}`)
      .then((result) => {
        setActivityName(result.data.ActivityName);
        setActivityDesc(result.data.ActivityDesc);
        setActivityType(result.data.ActivityType);
        setActivityDuration(result.data.ActivityDuration);
        setActivityImage(result.data.ActivityImage);
        setUserEmail(result.data.UserEmail);
        setActivityDate(result.data.ActivityDate);
        setUserId(result.data.UserId);
      });
    axios
      .get(`https://keepfit-backend.onrender.com/activityType`)
      .then((result) => {
        setAllActivityType(result.data);
      });
  }, []);

  const updateActivity = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://keepfit-backend.onrender.com/activity/update/${id}`, {
        ActivityName: activityName,
        ActivityDesc: activityDesc,
        ActivityType: activityType,
        ActivityDuration: activityDuration,
        ActivityImage: activityImage,
        UserId: userId,
        UserEmail: userEmail,
      })
      .then((res) => {
        console.log(res);
        navigate("/history");
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
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    console.log(`file : ${e.target.files[0]}`);
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setActivityImage(reader.result);
    };
  };

  return (
    <Layout>
      <Fade cascade damping={0.1}>
        <div className="xl:container xl:mx-auto">
          <div className="px-4 pt-[75px]">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-xl shadow-lg">
                {/* Profile picture card */}
                <div className="bg-white rounded-lg shadow-md p-4 pb-10">
                  <div className="text-xl font-black flex">
                    <strong className=" bg-primary rounded-full text-white px-10 p-2 flex gap-x-5">
                      Edit Activity <FaUserAstronaut />{" "}
                    </strong>
                  </div>
                  <div className="text-center mt-4">
                    {/* Profile picture image */}
                    <img
                      className="w-48 h-48 mx-auto rounded-full mb-2 border-primary border-4 object-cover"
                      src={previewSource ? previewSource : activityImage}
                      alt=""
                    />
                    {/* Profile picture help block */}

                    <div className="text-xl text-black my-10 ">{userEmail}</div>

                    {/* Profile picture edit button */}

                    <label className="bg-primary hover:bg-primary-focus duration-150 text-white font-semibold py-2 px-4 rounded cursor-pointer">
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileInput}
                      />{" "}
                      Upload new image
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
                          value={activityName}
                          placeholder="Enter your first name"
                          onChange={(e) => setActivityName(e.target.value)}
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
                          value={activityDesc}
                          placeholder="Enter your last name"
                          onChange={(e) => setActivityDesc(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* Form Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {/* Form Group (weight) */}
                      <div>
                        <label
                          className="block text-sm font-semibold text-gray-600"
                          htmlFor="inputWeight"
                        >
                          Duration
                        </label>

                        <input
                          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                          id="inputFirstName"
                          type="number"
                          value={activityDuration}
                          placeholder="Enter your first name"
                          onChange={(e) => setActivityDuration(e.target.value)}
                        />
                      </div>
                      {/* Form Group (height) */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-600">
                          Workout Type
                        </label>

                        <select
                          className="w-full border overflow-auto  rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                          onChange={(e) => setActivityType(e.target.value)}
                        >
                          <option disabled selected className="">
                            {activityType}
                          </option>
                          {allActivityType.map((e, index) => (
                            <option key={index} className="">
                              {e.ActivityTypeName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <button
                        className="btn btn-primary text-white font-semibold py-2 px-4 rounded"
                        onClick={updateActivity}
                      >
                        Save changes
                      </button>
                      <Link to={"/history"}>
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
      </Fade>
    </Layout>
  );
};

export default EditHistory;
