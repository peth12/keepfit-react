import React, { useState } from "react";

const SlideActivity = () => {

  const [activityImg, setActivityImg] = useState([
    {
      activity:
        "https://media.istockphoto.com/id/1293320195/photo/asian-chinese-beautiful-women-practicing-yoga-at-public-lake-park.jpg?s=612x612&w=0&k=20&c=QZlyJsE6otlvowBsuDfXcSbl2NzGWtYONsjsLRb7I6k=",
    },
    {
      activity:
        "https://www.shape.com/thmb/juZ1SfooOdjIq6zvXgmsoYRp8Rc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/boxing-8fa6221ec7ad4a80ba1e730eb9d1c507.jpg",
    },
    {
      activity:
        "https://media.istockphoto.com/id/1135508703/photo/cycling-race.jpg?s=612x612&w=0&k=20&c=DiKukVOyvLGwLAzbVtl_yFsAP_ANfikclENIv24u3n8=",
    },
    {
      activity:
        "https://media.istockphoto.com/id/1394473567/photo/senior-runner-feeling-great.jpg?s=612x612&w=0&k=20&c=3oyCkuqglCdIM2Nahbz1C7iBkmfWv2ovMOj6oeqsDHw=",
    },
    {
      activity:
        "https://img.freepik.com/free-photo/portrait-happy-little-boy-swimming-pool_1262-7260.jpg",
    },
  ]);

  const [imgIndex, setImgIndex] = useState(0);

  const goToPrevious = () => {
    setImgIndex((prevIndex) =>
      prevIndex === 0 ? activityImg.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setImgIndex((prevIndex) =>
      prevIndex === activityImg.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="px-6 mt-8">
      <div className="carousel w-full h-96 rounded-box relative">
        <img
          src={activityImg[imgIndex].activity}
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

export default SlideActivity;
