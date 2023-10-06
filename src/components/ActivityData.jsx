
import React, { createContext, useState, useContext } from "react";
import Activity from "../views/Activity/Activity";

const DataContext = createContext()
const ActivityData = ({children}) => {
    const [activityList, setActivityList] = useState([
        {
            name:"Yoga",
          activity:
            "https://static01.nyt.com/images/2016/12/06/well/move/yoga-for-everyone_promo/yoga-for-everyone_promo-superJumbo-v2.jpg",
            description:"This activity might be slow-moving, but it's the perfect way to restore your internal balance"
        },
        {
            name:"Boxing",
          activity:
            "https://titleboxingclub.com/wp-content/uploads/2022/07/FirstClass_Hero.jpg",
            description:"High-intensity combat sport for strength and agility."
        },
        {
            name:"Cycling",
          activity:
            "https://blog-images-1.pharmeasy.in/2020/10/26184910/shutterstock_192451625-1.jpg",
            description:"Leg strength and cardio on two wheels."
        },
        {
            name:"Running",
          activity:
            "https://honehealth.com/wp-content/uploads/2023/01/Muscles_Worked-Running-1.webp",
            description:"Cardiovascular exercise for stamina and mental clarity."
        },
        {
            name:"Swimming",
          activity:
            "https://images.everydayhealth.com/images/swimming-overview-guide-1440x810.jpg?sfvrsn=d3b9ee_1",
            description:"Full-body workout with low impact on joints."
        },
      ]);
    return(
        <>
        <DataContext.Provider value={{activityList}}>
            {children}
        </DataContext.Provider>
        </>
    )
}
export function useData() {
    return useContext(DataContext)
}

export default ActivityData