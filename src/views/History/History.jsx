import React from "react";
import { Layout } from "../../components/Layout";

function History() {
  return (
    <Layout>
      {/* Choose history type */}
      <div className="bg-amber-600 mt-5 flex  text-white rounded-full m-5 ">
        <ul className="menu menu-horizontal px-1 text-xl font-bold text-white gap-10 pl-10">
          <li>
            <a href="">All</a>
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
            <a>Bicycle</a>
          </li>
        </ul>
      </div>

      {/* Card */}
      <div className=" glass mt-5 bg-slate-100  text-white rounded-lg m-5 p-5 flex justify-between drop-shadow-md ">
        {/* icon */}
      <div className=" m-5 flex justify-center flex-col">
        <img
          src="https://i.pinimg.com/564x/cd/46/86/cd46868fc84c9c1fd5927fe0e1a3eadd.jpg"
          alt=""
          className="h-20 w-20 icon flex flex-col "
        />
        </div>
        {/* Card image */}
      <div className=" m-5 flex justify-center flex-col ">  
        <img
          src="https://i.pinimg.com/474x/34/b8/e8/34b8e8b08f42719fc2ef59199cfb995b.jpg"
          alt=""
          className="h-40 drop-shadow-md rounded-lg"
        />
      </div>

        {/* History Infomation */}
        <div className="m-10 text-slate-800 font-bold italic">
          <p>Date: 8/9/2023</p>
          <p>Kilometers: 3.12</p>
          <p>Average pace: 8.21</p>
          <p>Time: 32.04</p>
        </div>
        {/* Delete and Edit Button */}
        <div>
          <a href="#">🟡</a>
          <a href="#">🔴</a>
        </div>
      </div>

      {/* Card */}
      <div className=" glass mt-5 bg-slate-100  text-white rounded-lg m-5 p-5 flex justify-between drop-shadow-md ">
        {/* icon */}
      <div className=" m-5 flex justify-center flex-col">
        <img
          src="https://i.pinimg.com/564x/c4/f1/e9/c4f1e9e8dd5ab21c9a062cd5b6f0e5f9.jpg"
          alt=""
          className="h-20 w-20 icon flex flex-col "
        />
        </div>
        {/* Card image */}
      <div className=" m-5 flex justify-center flex-col ">  
        <img
          src="https://i.pinimg.com/474x/34/b8/e8/34b8e8b08f42719fc2ef59199cfb995b.jpg"
          alt=""
          className="h-40 drop-shadow-md rounded-lg"
        />
      </div>

        {/* History Infomation */}
        <div className="m-10 text-slate-800 font-bold italic">
          <p>Date: 8/9/2023</p>
          <p>Kilometers: 3.12</p>
          <p>Average pace: 8.21</p>
          <p>Time: 32.04</p>
        </div>
        {/* Delete and Edit Button */}
        <div>
          <a href="#">🟡</a>
          <a href="#">🔴</a>
        </div>
      </div>

      {/* Card */}
      <div className=" glass mt-5 bg-slate-100  text-white rounded-lg m-5 p-5 flex justify-between drop-shadow-md ">
        {/* icon */}
      <div className=" m-5 flex justify-center flex-col">
        <img
          src="https://i.pinimg.com/564x/b3/3b/c7/b33bc7c826b7acb5dc34b868f49f9819.jpg"
          alt=""
          className="h-20 w-20 icon flex flex-col "
        />
        </div>
        {/* Card image */}
      <div className=" m-5 flex justify-center flex-col ">  
        <img
          src="https://i.pinimg.com/474x/34/b8/e8/34b8e8b08f42719fc2ef59199cfb995b.jpg"
          alt=""
          className="h-40 drop-shadow-md rounded-lg"
        />
      </div>

        {/* History Infomation */}
        <div className="m-10 text-slate-800 font-bold italic">
          <p>Date: 8/9/2023</p>
          <p>Kilometers: 3.12</p>
          <p>Average pace: 8.21</p>
          <p>Time: 32.04</p>
        </div>
        {/* Delete and Edit Button */}
        <div>
          <a href="#">🟡</a>
          <a href="#">🔴</a>
        </div>

        
      </div>

      
    </Layout>
  );
}

export default History;
