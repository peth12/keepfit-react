import React from "react";
import { Layout } from "../../components/Layout";
import "./Dashboard.css";
import {
  UserCard,
  DurationStackCard,
  NewChart,
  ColumnChart,
} from "../../components";
import ActivityChart from "../../components/DashboardComponent/ActivityChart";
import DurationChart from "../../components/DashboardComponent/DurationChart";
import ActivityChartHorizon from "../../components/DashboardComponent/ActivityChartHorizon";
import DashboardData from "../../components/DashboardComponent/DashboardData";

export const Dashboard = () => {
  return (
    <Layout>
      <DashboardData>
      <div className="xl:container mx-auto px-10">
      <div className="flex justify-center mt-24 px-5">
        <div className="mx-auto px-5">
          <div className="flex flex-col xl:flex-row gap-5 justify-center mb-20">
            <div className="shadow-xl rounded-xl p-10  gradient-background-user h-auto w-full ">
              <UserCard />
            </div>
            <div className="shadow-xl rounded-xl  bg-orange-400 h-auto w-full">
              <DurationStackCard  />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="shadow-xl  rounded-xl  w-full xl:w-4/6 font-bold text-xl h-auto">
              <div className="hidden lg:block p-10">
              <div className="mb-10">Activity Count Overview</div>
                <ActivityChart className="" />
              </div>
              <div className="block lg:hidden">
                <ActivityChartHorizon className="" />
              </div>
            </div>
            <div className=" shadow-xl  rounded-xl  w-full lg:w-2/6 font-bold  text-2xl">
              <div className="mt-10 ms-3">Duration Summary Overview</div>
              <div className="p-20">
                <DurationChart className="" />
              </div>
            </div>
          </div>
          <div className="col-span-12 row-span-1 place-items-center ">
            <button
              className="btn btn-primary w-fit h-[50px] text-white text-lg rounded-full scale-125 mr-10 mb-20"
              style={{ position: "fixed", bottom: "20px", right: "20px" }}
            >
              add activity +
            </button>
          </div>
        </div>
        {/* <DashboardData/> */}
      </div>
      </div>
      </DashboardData>
    </Layout>
  );
};
