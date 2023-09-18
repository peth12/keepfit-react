import React from "react";
import { useData } from "./ActivityData";

const ActivityCard = () => {
    const { activityList } = useData();
  
    const numRows = Math.ceil(activityList.length / 3);
  
    const rows = Array.from({ length: numRows }, (_, rowIndex) =>
      activityList.slice(rowIndex * 3, rowIndex * 3 + 3)
    );
  
    return (
      <div className=" m-5 ">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((activity, index) => (
              <div key={index} className="card w-1/3 bg-base-100  drop-shadow image-full">
                <figure>
                  <img src={activity.activity} alt={activity.name} />
                </figure>
                <div className="card-body">
                  <h1>
                    <strong>{activity.name}</strong>
                  </h1>
                  <p>{activity.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Do Now</button>
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
