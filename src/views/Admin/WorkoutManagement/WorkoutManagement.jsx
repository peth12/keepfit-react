import React from "react";
import { Layout } from "../../../components/Layout";
import {LiaEvernote} from "react-icons/lia"
import SearchBox from "../SearchBox.jsx";
import {MdOutlineSportsMartialArts} from "react-icons/md"
import EditWorkout from "./EditWorkout.jsx"
import DeleteWorkout from "./DeleteWorkout.jsx"
import AddWorkout from "./AddWorkout.jsx";


const WorkoutManagement = () => {
    return (
        <>
      <Layout>

      <div className="w-[90%] mx-auto">
        {/* Container for h1 and search bar */}
        <div className="pt-36 pb-7 w-full ">
          <h1 className="text-primary text-3xl font-bold flex gap-2 items-center">Workout Management <MdOutlineSportsMartialArts/></h1>
        </div>
        <div className="flex justify-end pb-6">
          <SearchBox />
        </div>
        <div className="flex justify-start pb-6">
        <AddWorkout/>
        </div>



        <div className="overflow-x-auto">
          <table className="table border-collapse">
            {/* Table head */}
            <thead className="text-[18px] text-slate-600">
              <tr>
                <th className="w-[3%] border border-r">No.</th>
                <th className="w-1/5 border border-r">Workout Name</th>
                <th className="w-1/5 border border-r">Description</th>
                <th className="w-1/5 border border-r">Photo</th>
                <th className="w-1/5 border border-r">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 - Boxing */}
              <tr className="hover">
                <th className="w-[3%] border border-r">1</th>
                <td className="w-1/5 border border-r">Boxing</td>
                <td className="w-1/5 border border-r">High-intensity combat sport for strength and agility.</td>
                <td className="w-1/5 border border-r">

                          <div className="w-16 rounded-lg overflow-hidden">
                            <img src="https://titleboxingclub.com/wp-content/uploads/2022/07/FirstClass_Hero.jpg" alt="" />
                          </div>

                </td>
                <td className="border-r ">
                </td>
                
              </tr>

              {/* Row 2 - Cycling */}
              <tr className="hover">
                <th className="w-[3%] border border-r">2</th>
                <td className="w-1/5 border border-r">Cycling</td>
                <td className="w-1/5 border border-r">Leg strength and cardio on two wheels.</td>
                <td className="w-1/5 border border-r">

                          <div className="w-16 rounded-lg overflow-hidden">
                            <img src="https://blog-images-1.pharmeasy.in/2020/10/26184910/shutterstock_192451625-1.jpg" alt="" />
                          </div>

                </td>
                <td className="border-r ">
                </td>
                
              </tr>

              {/* Row 3 - Running */}
              <tr className="hover">
                <th className="w-[3%] border border-r">3</th>
                <td className="w-1/5 border border-r">Running</td>
                <td className="w-1/5 border border-r">Cardiovascular exercise for stamina and mental clarity.</td>
                <td className="w-1/5 border border-r">

                          <div className="w-16 rounded-lg overflow-hidden">
                            <img src="https://honehealth.com/wp-content/uploads/2023/01/Muscles_Worked-Running-1.webp" alt="" />
                          </div>

                </td>
                <td className="border-r ">
                </td>
                
              </tr>

              {/* Row 4 - Swimming */}
              <tr className="hover">
                <th className="w-[3%] border border-r">4</th>
                <td className="w-1/5 border border-r">Swimming</td>
                <td className="w-1/5 border border-r">Full-body workout with low impact on joints.</td>
                <td className="w-1/5 border border-r">

                          <div className="w-16 rounded-lg overflow-hidden">
                            <img src="https://images.everydayhealth.com/images/swimming-overview-guide-1440x810.jpg?sfvrsn=d3b9ee_1" alt="" />
                          </div>

                </td>
                <td className="border-r "></td>
                
              </tr>


              {/* Row 5 - Yoga */}
              <tr className="hover">
                <th className="w-[3%] border border-r">5</th>
                <td className="w-1/5 border border-r">Yoga</td>
                <td className="w-1/5 border border-r">This activity might be slow-moving, but it's the perfect way to restore your internal balance</td>
                <td className="w-1/5 border border-r">

                          <div className="w-16 rounded-lg overflow-hidden">
                            <img src="https://content.jdmagicbox.com/comp/coimbatore/76/0422p422std2200276/catalogue/isha-foundation-registered-office--singanallur-coimbatore-yoga-classes-0vsccfhxoy.jpg?clr=" alt="" />
                          </div>

                </td>
                <td className="border-r "></td>
                
              </tr>

              {/* Row 6 - workout */}
              <tr className="hover">
                <th className="w-[3%] border border-r">6</th>
                <td className="w-1/5 border border-r">Workout</td>
                <td className="w-1/5 border border-r">This activity might be slow-moving, but it's the perfect way to restore your internal balance</td>
                <td className="w-1/5 border border-r">

                          <div className="w-16 rounded-lg overflow-hidden">
                            <img src="https://content.jdmagicbox.com/comp/coimbatore/76/0422p422std2200276/catalogue/isha-foundation-registered-office--singanallur-coimbatore-yoga-classes-0vsccfhxoy.jpg?clr=" alt="" />
                          </div>

                </td>
                <td className="border-b border-r ">
                  <div className="flex gap-2">
                  <EditWorkout/>
                  <DeleteWorkout/>
                  </div>
                </td>
                
              </tr>


            </tbody>
          </table>
        </div>
        </div>
      </Layout>
    </>

    )
}

export default WorkoutManagement;