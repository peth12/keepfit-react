import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();
const ActivityData = ({ children }) => {
  const [activityList, setActivityList] = useState([
    {
      name: "Yoga",
      imgUrl:
        "https://content.jdmagicbox.com/comp/coimbatore/76/0422p422std2200276/catalogue/isha-foundation-registered-office--singanallur-coimbatore-yoga-classes-0vsccfhxoy.jpg?clr=",
      description:
        "This activity might be slow-moving, but it's the perfect way to restore your internal balance",
      icon: "https://cdn-icons-png.flaticon.com/512/55/55316.png",
    },
    {
      name: "Boxing",
      imgUrl:
        "https://titleboxingclub.com/wp-content/uploads/2022/07/FirstClass_Hero.jpg",
      description: "High-intensity combat sport for strength and agility.",
      icon: "https://cdn-icons-png.flaticon.com/512/73/73029.png",
    },
    {
      name: "Cycling",
      imgUrl:
        "https://blog-images-1.pharmeasy.in/2020/10/26184910/shutterstock_192451625-1.jpg",
      description: "Leg strength and cardio on two wheels.",
      icon: "data:image/png;base64,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",
    },
    {
      name: "Swimming",
      imgUrl:
        "https://images.everydayhealth.com/images/swimming-overview-guide-1440x810.jpg?sfvrsn=d3b9ee_1",
      description: "Full-body workout with low impact on joints.",
      icon: "https://www.creativefabrica.com/wp-content/uploads/2020/06/01/Swim-Icon-Graphics-4238028-1.png",
    },
    {
      name: "Running",
      imgUrl:
        "https://honehealth.com/wp-content/uploads/2023/01/Muscles_Worked-Running-1.webp",
      description: "Cardiovascular exercise for stamina and mental clarity.",
      icon: "https://media.istockphoto.com/id/1158723576/vector/running-man-icon-sign-flat.jpg?s=612x612&w=0&k=20&c=Nfj6k5NvsAdx9nS5JeqrK_tkpVvJ1pDHZfe7mqSvMOU=",
    },
  ]);

  const [data, setData] = useState([
    {
      name: "Yoga",
      description: "test des",
      type: "testtype",
      duration: "1111",
      date: "1111",
    },
    {
        name: "Running",
        description: "test des",
        type: "testtype",
        duration: "1111",
        date: "1111",
      }
  ]);

  const addData = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  const deleteData = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <>
      <DataContext.Provider value={{ activityList, data, addData, deleteData }}>
        {children}
      </DataContext.Provider>
    </>
  );
};
export function useData() {
  return useContext(DataContext);
}

export default ActivityData;
