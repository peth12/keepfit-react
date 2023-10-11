import React, { createContext, useState, useContext } from "react";
import {BiSwim, BiCycling} from 'react-icons/bi'
import {GrYoga} from 'react-icons/gr'
import {GiBodyBalance} from 'react-icons/gi'
import {RiBoxingLine} from 'react-icons/ri'
import {FaRunning} from 'react-icons/fa'

const DataContext = createContext();
const ActivityData = ({ children }) => {
  const [activityList, setActivityList] = useState([
   {
      name: "Yoga",
      imgUrl:
        "https://content.jdmagicbox.com/comp/coimbatore/76/0422p422std2200276/catalogue/isha-foundation-registered-office--singanallur-coimbatore-yoga-classes-0vsccfhxoy.jpg?clr=",
      description:
        "This activity might be slow-moving, but it's the perfect way to restore your internal balance",
      icon: <GiBodyBalance className="fill-white scale-150 mb-1"/>,
    }, 
    {
      name: "Boxing",
      imgUrl:
        "https://titleboxingclub.com/wp-content/uploads/2022/07/FirstClass_Hero.jpg",
      description: "High-intensity combat sport for strength and agility.",
      icon: <RiBoxingLine className="fill-white scale-150 mb-1"/>,
    },
    {
      name: "Cycling",
      imgUrl:
        "https://blog-images-1.pharmeasy.in/2020/10/26184910/shutterstock_192451625-1.jpg",
      description: "Leg strength and cardio on two wheels.",
      icon:<BiCycling className="fill-white scale-150 mb-1"/>,
    },
    {
      name: "Swimming",
      imgUrl:
        "https://images.everydayhealth.com/images/swimming-overview-guide-1440x810.jpg?sfvrsn=d3b9ee_1",
      description: "Full-body workout with low impact on joints.",
      icon: <BiSwim className="fill-white scale-150"/> ,
    },
    {
      name: "Running",
      imgUrl:
        "https://honehealth.com/wp-content/uploads/2023/01/Muscles_Worked-Running-1.webp",
      description: "Cardiovascular exercise for stamina and mental clarity.",
      icon: <FaRunning className="fill-white scale-150 mb-1"/>,
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
