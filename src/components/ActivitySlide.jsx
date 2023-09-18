import React, { useState } from "react";
import { useData } from "./ActivityData";

const ActivitySlide = () => {
  const { activityList } = useData();
  const [imgIndex, setImgIndex] = useState(0);
  
  console.log(activityList);
  const goToPrevious = () => {
    setImgIndex((prevIndex) =>
      prevIndex === 0 ? activityList.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setImgIndex((prevIndex) =>
      prevIndex === activityList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="px-6 mt-8">
      <div className="carousel w-full h-96 rounded-box relative">
        <img
          src={activityList[imgIndex].activity}
          className="w-full h-full absolute top-0 left-0"
          alt={`Slide ${imgIndex + 1}`}
        />
        <div className="absolute flex justify-between items-center w-full h-full px-3">
          <button className="btn btn-circle left-0" onClick={goToPrevious}>
            ❮
          </button>
          <button className="btn btn-circle right-0" onClick={goToNext}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivitySlide;
