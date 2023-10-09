import React from "react";
import { useData } from "./ActivityData";

const TempoShow = () => {
  const { data } = useData();
  const { activityList } = useData();

  return (
    <div>
      {data.map((user, index) => {
        const matchingActivity = activityList.find(
          (activity) => activity.name === user.name
        );

        if (matchingActivity) {
          return (
            <div key={index}>
              <img src={matchingActivity.icon} alt={user.name} className="w-14 h-14" />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default TempoShow;
