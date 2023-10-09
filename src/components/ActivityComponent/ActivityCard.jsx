import React from "react";
import { useData } from "./ActivityData";
import AddActivityButton from "./AddActivityButton";

const ActivityCard = () => {
  const { activityList } = useData();

  const numRows = Math.ceil(activityList.length / 3);

  const rows = Array.from({ length: numRows }, (_, rowIndex) =>
    activityList.slice(rowIndex * 3, rowIndex * 3 + 3)
  );

  return (
    <div className="p-5 mt-12">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-wrap gap-32 mb-12 justify-center"
        >
          {row.map((activity, index) => (
            <div
              key={index}
              className="w-full sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-1/4  mb-4"
              style={{ zIndex: 1 }}
            >
              <div className="card w-full h-[400px] bg-base-100 shadow-xl transform transition-transform hover:scale-105">
                <figure>
                  <img
                    src={activity.imgUrl}
                    alt={activity.name}
                    className="w-full h-44 object-cover"
                  />
                </figure>
                <div className="card-body p-4  text-orange">
                  <h2 className="text-2xl font-bold mt-5 underline-offset-8 underline">
                    {activity.name}
                  </h2>
                  <p className="text-gray-600 h-fit mt-4">
                    {activity.description}
                  </p>
                  <div className="flex justify-end">
                  <AddActivityButton defaultActivityName={activity.name}/>
                  </div>
                  
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
