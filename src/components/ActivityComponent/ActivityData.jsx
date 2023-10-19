import React, { createContext, useState, useContext, useEffect } from "react";
import {BiSwim, BiCycling} from 'react-icons/bi'
import {GrYoga} from 'react-icons/gr'
import {GiBodyBalance} from 'react-icons/gi'
import {RiBoxingLine} from 'react-icons/ri'
import {FaRunning} from 'react-icons/fa'
import axios from "axios";


const DataContext = createContext();
const ActivityData = ({ children }) => {
  const [activityList, setActivityList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://keepfit-backend.onrender.com/activityType"); // Replace with the actual API endpoint
        console.log(response.data)
        setActivityList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

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
