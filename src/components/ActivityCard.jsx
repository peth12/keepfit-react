import React from "react";
import { useData } from "./ActivityData";

const ActivityCard = () => {
    const { activityList } = useData();
  
    const numRows = Math.ceil(activityList.length / 3);
  
    const rows = Array.from({ length: numRows }, (_, rowIndex) =>
      activityList.slice(rowIndex * 3, rowIndex * 3 + 3)
    );
  //activity-card-box-in-activitypage
    return (
      <div className=" m-5 ">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex ">
            {row.map((activity, index) => (
              <div key={index} className="card w-1/3 bg-base-100  image-full p-4 ">
                <figure>
                  <img src={activity.activity} alt={activity.name} />
                </figure>
                <div className="card-body drop-shadow-xl rounded-2xl activity-card-box-in-activitypage ">
                  <h1>
                    <strong>{activity.name}</strong>
                  </h1>
                  <p className="hidden md:block">{activity.description}</p>
                  <div className="card-actions justify-end drop-shadow-xl">
                    <button className="btn btn-primary">Do it Now!</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

export default ActivityCard;
