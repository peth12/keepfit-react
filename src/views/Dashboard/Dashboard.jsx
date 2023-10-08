import React from "react";
import { Layout } from "../../components/Layout";
import "./Dashboard.css";
import {UserCard, DurationStackCard, NewChart , ColumnChart} from '../../components'
export const Dashboard = () => {
  return (
    <Layout>
      <div className="xl:container xl:mx-auto">
        <div className="grid grid-cols-6 grid-rows-6 min-h-screen pt-[90px] gap-3 p-3">
          <div className="col-span-6 row-span-3 grid grid-cols-6 grid-rows-6 gap-3">
            <div className="hidden lg:col-span-2 lg:grid lg:row-span-6">
              <UserCard/>
            </div>
            <div className="col-span-6 row-span-6 grid grid-cols-12 grid-rows-6 lg:col-span-4 gap-x-3  lg:gap-y-0 lg:row-span-6">
              <div className="col-span-12 row-span-1 place-items-center my-auto">
                <button className="btn btn-primary w-full text-white text-lg">Add Acticity</button>     
              </div>
              <div className="col-span-12 row-span-3 lg:col-span-6 lg:row-span-5">
                <DurationStackCard/>
              </div>
              <p>eiei</p>
              <div className="col-span-12 row-span-2 lg:col-span-6 lg:row-span-5 bg-red-400 border-4 border-primary rounded-2xl overflow-hidden">
              
              </div>
            </div>
          </div>
          <div className=" col-span-6 row-span-3 grid grid-cols-6 grid-rows-3 gap-3 ">
            <div className="col-span-6 lg:col-span-2 row-span-3  grid items-center border-4 border-primary overflow-hidden rounded-xl p-3">
            <NewChart />
            </div>
            <div className="col-span-6 lg:col-span-4 row-span-3 grid items-center border-4 border-primary overflow-hidden rounded-xl p-3">
            <ColumnChart/>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};
