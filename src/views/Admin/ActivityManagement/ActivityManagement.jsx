import React, { useState, useEffect } from "react";
import { Layout } from "../../../components/Layout";
import { LiaEvernote } from "react-icons/lia";
import EditActivity from "./EditActivity.jsx";
import DeleteActivity from "./DeleteActivity.jsx";
import SearchBox from "../SearchBox.jsx";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ActivityManagement = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [userById, setUserById] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    axios
      .get("https://keepfit-backend.onrender.com/activity")
      .then((result) => setUser(result.data))
      .catch((err) => console.log(err));
  }, [reload]);
  useEffect(() => {});
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
  return (
    <>
      <Layout>
        <div className="w-[90%] mx-auto">
          {/* Container for h1 and search bar */}
          <div className="pt-36 pb-7 w-full ">
            <h1 className="text-primary text-3xl font-bold flex gap-2 items-center">
              Acitivity Management <LiaEvernote />
            </h1>
          </div>
          <div className="flex justify-end pb-6">
            <SearchBox />
          </div>

          <div className="overflow-x-auto">
            <table className="table border-collapse">
              {/* Table head */}
              <thead className="text-[18px] text-slate-600">
                <tr>
                  <th className="w-[3%] border border-r">No.</th>
                  <th className="w-1/5 border border-r">Activity Owner</th>
                  <th className="w-1/5 border border-r">Activity name</th>
                  <th className="w-1/5 border border-r">Description</th>
                  <th className="w-1/5 border border-r">Date</th>
                  <th className="w-1/5 border border-r">Duration</th>
                  <th className="w-1/5 border border-r">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                {user.map((item, index) => {
                  return (
                    <tr className="hover border " key={index}>
                      <th className="w-[3%] border border-r">1</th>
                      <td className="w-1/5 border border-r">{item.UserEmail}</td>
                      <td className="w-1/5 border border-r">{item.ActivityName}</td>
                      <td className="w-1/5 border border-r">
                      {item.ActivityDesc}
                      </td>
                      <td className="w-1/5 border border-r">{item.ActivityDate}</td>
                      <td className="w-1/5 border border-r">{item.ActivityDuration}</td>
                      <td className="flex gap-1">
                        <Link to={`/admin/activity/${item._id}`}>
                        <EditActivity userById={userById}/>
                        </Link>
                        <Link to={'/admin/activity/:id'}>
                        <DeleteActivity />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ActivityManagement;
