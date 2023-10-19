import React from "react";
import { Layout } from "../../../components/Layout";
import SearchBox from "../SearchBox.jsx";
import {FaHouseChimneyUser} from "react-icons/fa6"
import {BiEditAlt} from "react-icons/bi"
import {RiDeleteBin6Line} from "react-icons/ri"
import {GoAlertFill} from "react-icons/go"
import DeleteUser from "./DeleteButton.jsx";
import EditUser from "./EditUser";

const UserManagement = () => {

  return (
    <Layout>
      <div className="w-[90%] mx-auto">
        {/* Container for h1 and search bar */}
        <div className="pt-36 pb-7 w-full ">
          <h1 className="text-primary text-3xl font-bold flex gap-2 items-center">User Management <FaHouseChimneyUser/></h1>
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
                <th className="w-1/5 border border-r">Firstname</th>
                <th className="w-1/5 border border-r">Lastname</th>
                <th className="w-1/5 border border-r">Email</th>
                <th className="w-1/5 border border-r">Registered date</th>
                <th className="w-1/5 border border-r">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="hover">
                <th className="w-[3%] border border-r">1</th>
                <td className="w-1/5 border border-r">Cy Ganderton</td>
                <td className="w-1/5 border border-r">
                  Quality Control Specialist
                </td>
                <td className="w-1/5 border border-r">Blue@gmail.com</td>
                <td className="w-1/5 border border-r">2023-10-13</td>
                <td className="border-r flex gap-2">
                <EditUser/>
                <DeleteUser/>



                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover">
                <th className="w-[3%] border border-r">2</th>
                <td className="w-1/5 border border-r">Hart Hagerty</td>
                <td className="w-1/5 border border-r">
                  Desktop Support Technician
                </td>
                <td className="w-1/5 border border-r">Purple@gmail.com</td>
                <td className="w-1/5 border border-r">2023-10-13</td>
              </tr>
              {/* Row 3 */}
              <tr className="hover">
                <th className="w-[3%] border border-r">3</th>
                <td className="w-1/5 border border-r">Brice Swyre</td>
                <td className="w-1/5 border border-r">Tax Accountant</td>
                <td className="w-1/5 border border-r">Red@gmail.com</td>
                <td className="w-1/5 border border-r">2023-10-13</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default UserManagement;
