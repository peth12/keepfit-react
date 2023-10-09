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

<<<<<<< Updated upstream:src/components/ActivityComponent/ActivitySlide.jsx
    <div className="px-8">
      <div className="carousel w-full rounded-box relative " style={{ height: '500px' }}>
=======
    <div className="px-6" style={{width:"1140 px"}}>
      <div className="carousel w-full rounded-box relative mt-24" style={{ height: '500px' ,width:"1140 px"}}>
>>>>>>> Stashed changes:src/components/ActivitySlide.jsx

        <img
          src={activityList[imgIndex].activity}
          className="w-full h-full object-cover absolute top-0 left-0"
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
