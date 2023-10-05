import React from "react";
import { Layout } from "../../components/Layout";
import "./Dashboard.css";
export const Dashboard = () => {
  return (
    <Layout>
      <div className="  pt-[80px]  min-h-screen">
        <div className="flex md:flex-row flex-col gap-3 p-2 justify-center ">
          <div className="bg-white rounded-md shadow-lg  p-2">Coming soon 😴</div>
          {/* <div className="bg-white rounded-md shadow-lg basis-8/12 p-2">Coming soon</div> */}
        </div>
      </div>
    </Layout>
  );
};
