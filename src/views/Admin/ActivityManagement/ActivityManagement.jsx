import React from "react";
import { Layout } from "../../../components/Layout";
import {LiaEvernote} from "react-icons/lia"
import EditActivity from "./EditActivity.jsx"
import DeleteActivity from "./DeleteActivity.jsx"
import SearchBox from "../SearchBox.jsx";

const ActivityManagement = () => {
  return (
    <>
      <Layout>

      <div className="w-[90%] mx-auto">
        {/* Container for h1 and search bar */}
        <div className="pt-36 pb-7 w-full ">
          <h1 className="text-primary text-3xl font-bold flex gap-2 items-center">Acitivity Management <LiaEvernote/></h1>
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
              <tr className="hover">
                <th className="w-[3%] border border-r">1</th>
                <td className="w-1/5 border border-r">Gib eiei</td>
                <td className="w-1/5 border border-r">Cy Ganderton</td>
                <td className="w-1/5 border border-r">
                  Quality Control Specialist
                </td>
                <td className="w-1/5 border border-r">2023-10-13</td>
                <td className="w-1/5 border border-r">2.04 min</td>
                <td className="border-r flex gap-1">
                <EditActivity/>
                <DeleteActivity/>
                
                






                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </Layout>
    </>
  );
};

export default ActivityManagement;
