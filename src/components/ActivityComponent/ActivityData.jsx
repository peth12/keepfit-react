import React, { createContext, useState, useContext } from "react";

const DataContext = createContext()
const ActivityData = ({children}) => {
    const [activityList, setActivityList] = useState([
        {
            name:"Yoga",
          imgUrl:"https://content.jdmagicbox.com/comp/coimbatore/76/0422p422std2200276/catalogue/isha-foundation-registered-office--singanallur-coimbatore-yoga-classes-0vsccfhxoy.jpg?clr=",
            description:"This activity might be slow-moving, but it's the perfect way to restore your internal balance"
        },
        {
            name:"Boxing",
            imgUrl:
            "https://titleboxingclub.com/wp-content/uploads/2022/07/FirstClass_Hero.jpg",
            description:"High-intensity combat sport for strength and agility."
        },
        {
            name:"Cycling",
            imgUrl:
            "https://blog-images-1.pharmeasy.in/2020/10/26184910/shutterstock_192451625-1.jpg",
            description:"Leg strength and cardio on two wheels."
        },
        {
            name:"Swimming",
            imgUrl:
            "https://images.everydayhealth.com/images/swimming-overview-guide-1440x810.jpg?sfvrsn=d3b9ee_1",
            description:"Full-body workout with low impact on joints."
        },
                {
            name:"Running",
            imgUrl:
            "https://honehealth.com/wp-content/uploads/2023/01/Muscles_Worked-Running-1.webp",
            description:"Cardiovascular exercise for stamina and mental clarity."
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