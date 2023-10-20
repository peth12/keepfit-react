import React from "react";
import { Layout } from "../../components/Layout";
import "./Dashboard.css";
import {UserCard, DurationStackCard, NewChart , ColumnChart} from '../../components'
import ActivityChart from "../../components/DashboardComponent/ActivityChart";
import DurationChart from "../../components/DashboardComponent/DurationChart";
export const Dashboard = () => {
  return (
    <Layout>
      <div className="xl:container xl:mx-auto">
        <div className="grid grid-cols-6 grid-rows-6 min-h-screen pt-[90px] gap-3 p-3">
          <div className="col-span-6 row-span-3 grid grid-cols-6 grid-rows-6 gap-3">
            <div className="hidden lg:col-span-2 lg:grid lg:row-span-6 shadow-xl rounded-xl">
              <UserCard/>
            </div>
            <div className="col-span-6 row-span-6 grid grid-cols-12 grid-rows-6 lg:col-span-4 gap-x-3  lg:gap-y-0 lg:row-span-6">
              <div className="col-span-12 row-span-1 place-items-center my-auto">
                <button className="btn btn-primary w-full text-white text-lg">Add Acticity</button>     
              </div>
              <div className="col-span-12 row-span-3 lg:col-span-6 lg:row-span-5 shadow-xl rounded-xl">
                <DurationStackCard/>
              </div>
              
              <div className="col-span-12 row-span-2 lg:col-span-6 lg:row-span-5 bg-red-400 shadow-xl rounded-2xl overflow-hidden">
              
              </div>
            </div>
          </div>
          <div className=" col-span-6 row-span-3 grid grid-cols-6 grid-rows-3 gap-3 ">
            <div className="col-span-6 lg:col-span-2 row-span-3  grid items-center shadow-xl overflow-hidden rounded-xl p-3">
            {/* <NewChart /> */}
            <DurationChart className="w-fit h-fit"/>
            </div>
            <div className="col-span-6 lg:col-span-4 row-span-3 grid items-center shadow-xl overflow-hidden rounded-xl p-3">
            <ActivityChart/>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};
