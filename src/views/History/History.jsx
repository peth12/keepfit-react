import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "../../components/Layout";
import { TbTrash } from "react-icons/tb";
import { TbPencil } from "react-icons/tb";
import { FaRunning } from "react-icons/fa";
import { TbSwimming } from "react-icons/tb";
import { FaBicycle } from "react-icons/fa6";
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import { AiFillEdit } from "react-icons/ai";
import { GoAlertFill } from "react-icons/go";
import { Link, useParams , useNavigate} from "react-router-dom";

function History() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [userById , setUserById] = useState([])
  const [reload, setReload] = useState(false)
  useEffect(() => {
    axios
      .get("https://keepfit-backend.onrender.com/activity")
      .then((result) => setUser(result.data))
      .catch((err) => console.log(err));
  }, [reload]);
  useEffect(()=> {

  })
  useEffect(() => {
    // Fetch data by ID when the 'id' parameter changes
    if (id) {
      axios
        .get(`https://keepfit-backend.onrender.com/activity/${id}`)
        .then((result) => {
          setUserById(result.data);
           // This might not be necessary if you're not using 'reload' for other purposes
        })
        .catch((err) => console.log(err));
    }
    setReload(!reload);
  }, [id]);

  // const activity = [
  //   {
  //     icon: <FaRunning />,
  //     img: "https://i.pinimg.com/564x/51/83/33/5183331b94eb09c31eaf59bc0ac60797.jpg",
  //     activityName: "Running",
  //     description: "Happiness is running with friends.",
  //     date: "08/09/2023",
  //     duration: "32.04 min",
  //   },
  //   {
  //     icon: <FaRunning />,
  //     img: "https://i.pinimg.com/236x/bf/30/95/bf30954c5e361c3ac9d1a030982a8ccd.jpg",
  //     activityName: "Swim",
  //     description: "Swim",
  //     date: "08/09/2023",
  //     duration: "55 mins",
  //   },
  //   {
  //     icon: <FaRunning />,
  //     img: "https://i.pinimg.com/736x/dc/b9/57/dcb95731d54a6500bd67c130ce2164dc.jpg",
  //     activityName: "Boxing",
  //     description: "punch helloehlehieleoehekehbeibebeiifee",
  //     date: "03/10/2023",
  //     duration: "10 mins",
  //   },
  // ];

  return (
    <Layout>
      {/* Choose history type */}
      <div className="hidden bg-primary text-slate-100 justify-between mt-24 rounded-lg m-5 lg:flex">
        <a className="btn btn-ghost normal-case lg:text-xl">All</a>
        <a className="btn btn-ghost normal-case lg:text-xl">Run</a>
        <a className="btn btn-ghost normal-case lg:text-xl">Swim</a>
        <a className="btn btn-ghost normal-case lg:text-xl">Walk</a>
        <a className="btn btn-ghost normal-case lg:text-xl">Cycling</a>
        <a className="btn btn-ghost normal-case lg:text-xl">Boxing</a>
        <a className="btn btn-ghost normal-case lg:text-xl">
          <VscChevronRight />
        </a>
      </div>

      <div className="flex justify-end lg:hidden me-5">
        <div className=" dropdown dropdown-end mt-24">
          <label tabIndex={0} className=" ">
            <div className="btn btn-primary text-white ">
              Type <VscChevronDown />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>All</a>
            </li>
            <li>
              <a>Run</a>
            </li>
            <li>
              <a>Swim</a>
            </li>
            <li>
              <a>Walk</a>
            </li>
            <li>
              <a>Cycling</a>
            </li>
            <li>
              <a>Boxing</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="xl:container xl:mx-auto">
        {/* Card */}
        {user.map((item, index) => (
          <div
            key={index}
            className=" glass mt-5 flex flex-col text-white rounded-lg m-5 p-1 lg:p-5 lg:flex-row justify-between drop-shadow-md  transform transition-transform hover:scale-[101%] shadow-xl "
          >
            {/* icon */}
            <div className=" m-5  justify-center hidden lg:flex lg:justify-center flex-col border-solid">
              <div className="text-slate-900 text-20 lg:text-5xl ">
                <FaRunning />
              </div>
            </div>

            {/* Card image */}
            <div className="justify-center  flex-col hidden lg:flex h-40  drop-shadow-md rounded-lg w-40">
              <img
                src={item.ActivityImage}
                alt=""
                className="h-40  drop-shadow-md rounded-lg w-40 "
              />
            </div>
            {/* Description */}
            <div className="text-slate-700 lg:max-w-72   w-100 lg:ml-2 ps-5">
              <div className="">
                <p className="text-sm ">Activity Name</p>
                <p className=" lg:text-2xl font-bold ">{item.ActivityName}</p>

                <p className="text-sm mt-3">Description</p>

                <p className=" lg:text-2xl font-bold ">{item.ActivityDesc}</p>
              </div>
            </div>
            {/* History Infomation */}
            <div className=" text-slate-700  lg:gap-10 gap-5 flex flex-row  ps-5 mt-2">
              <div className="">
                <div className=" w-30">
                  <p className="text-sm">Date </p>
                  <p className="font-bold lg:text-2xl ">{item.ActivityDate}</p>
                </div>
              </div>

              <div className=" ">
                <div className=" ">
                  <p className="text-sm">Duration (Mins)</p>
                  <p className="font-bold lg:text-2xl">
                    {item.ActivityDuration}
                  </p>
                </div>
              </div>
            </div>
            {/* Delete and Edit Button */}
            {/* Edit */}
            <div className=" text-2xl ml-5 text-end  lg:justify-end lg:flex items-end">
              <button
                className=" text-white"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                <Link to={`/history/${item._id}`}>
                  <button className="hidden lg:block btn btn-sm bg-primary text-white  lg:w-24 me-2 ">
                    Edit
                  </button>
                </Link>
                <div className="lg:hidden text-black ">
                  <TbPencil />
                </div>
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-600">
                      ✕
                    </button>
                  </form>

                  {/* Edit profile photo */}
                  <div className="flex justify-center py-8">
                    <img
                      className="w-[200px] h-[200px] object-cover rounded-full border-4 border-primary"
                      src={userById.ActivityImage}
                      alt=""
                    />

                    {/* รูปไว้กด Edit */}
                    <div className="w-[200px] h-[200px] group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                      <img
                        type="file"
                        className="hidden group-hover:block w-12"
                        src="https://www.svgrepo.com/show/33565/upload.svg"
                        alt=""
                      />

                      {/* ปุ่มไว้กด Upload photo */}

                      <input type="file"></input>
                    </div>
                  </div>

                  <div className="form-control w-full pt-3">
                    <label className="label">
                      <span className="label-text text-primary font-semibold text-[16px]">
                        Activity Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Activity Name"
                      value={userById.ActivityName}
                      className="input input-bordered w-full text-black"
                    />
                  </div>
                  <div className="form-control w-full pt-3">
                    <label className="label">
                      <span className="label-text text-primary font-semibold text-[16px]">
                        Description
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Description"
                      value={userById.ActivityDesc}
                      className="input input-bordered w-full text-black"
                    />
                  </div>
                  <div className="form-control w-full pt-3">
                    <label className="label">
                      <span className="label-text text-primary font-semibold text-[16px]">
                        Date
                      </span>
                    </label>
                    <input
                      type="date"
                      value={userById.ActivityDate}
                      className="input input-bordered w-full  text-black"
                    />
                  </div>
                  <div className="form-control w-full pt-3">
                    <label className="label">
                      <span className="label-text text-primary font-semibold text-[16px]">
                        Distance (Kg)
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Distance"
                      
                      className="input input-bordered w-full text-black"
                    />
                  </div>
                  <div className="form-control w-full pt-3">
                    <label className="label">
                      <span className="label-text text-primary font-semibold text-[16px]">
                        Activity Type
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder=" Activity Type"
                      value={userById.ActivityType}
                      className="input input-bordered w-full text-black"
                    />
                  </div>

                  <div className="form-control w-full pt-3">
                    <label className="label">
                      <span className="label-text text-primary font-semibold text-[16px]">
                        Duration
                      </span>
                    </label>
                    <div className="flex gap-x-2">
                      <input
                        type="number"
                        min={0}
                        max={23}
                        placeholder="Hours"
                        value={userById.ActivityDuration}
                        className="input input-bordered w-full text-black"
                      />
                      <input
                        type="number"
                        placeholder="Minutes"
                        min={0}
                        max={59}
                        className="input input-bordered w-full text-black "
                      />
                    </div>
                  </div>

                  <div className="modal-action w-full">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <Link to={'/history'}>
                      <button className="btn btn-primary text-white w-80 lg:w-32">
                        Save
                      </button>
                      </Link>
                    </form>
                  </div>
                </div>
              </dialog>
              {/* Open the modal using document.getElementById('ID').showModal() method */}

              <button
                className=""
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              ><Link to={`/history/${item._id}`}>
                <button className="hidden lg:block btn btn-sm bg-red-600 text-white lg:w-24 ">
                  Delete
                </button>
                </Link>
                <div className="lg:hidden text-black ">
                  <TbTrash />
                </div>
              </button>
              <dialog
                id="my_modal_1"
                className="modal text-black text-base text-start"
              >
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-600 text-white">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg text-center text-red ">
                    Delete Activity
                    <p className="text-center text-red-600 flex justify-center text-5xl">
                      <GoAlertFill />
                    </p>
                  </h3>

                  <img src="./assets/trash_ja.png" alt="" />
                  <p className="py-4 text-center  ">
                    Deleting this activity will permanently remove it from your
                    workout record. Are you sure you want to delete this
                    activity?
                  </p>
                  <div className="modal-action">
                    <div className="text-center">
                      <form method="dialog ">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn bg-green-500 text-white  w-72 lg:w-32 lg:me-2">
                          Cancel
                        </button>
                        <button className="btn bg-red-600 text-white  w-72 lg:w-32 ">
                          Delete
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default History;
