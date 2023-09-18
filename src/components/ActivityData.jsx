import React, { createContext, useState, useContext } from "react";
import Activity from "../views/Activity/Activity";

const DataContext = createContext()
const ActivityData = ({children}) => {
    const [activityList, setActivityList] = useState([
        {
            name:"Yoga",
          activity:
            "https://media.istockphoto.com/id/1293320195/photo/asian-chinese-beautiful-women-practicing-yoga-at-public-lake-park.jpg?s=612x612&w=0&k=20&c=QZlyJsE6otlvowBsuDfXcSbl2NzGWtYONsjsLRb7I6k=",
            description:"This activity might be slow-moving, but it's the perfect way to restore your internal balance"
        },
        {
            name:"Boxing",
          activity:
            "https://www.shape.com/thmb/juZ1SfooOdjIq6zvXgmsoYRp8Rc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/boxing-8fa6221ec7ad4a80ba1e730eb9d1c507.jpg",
            description:"High-intensity combat sport for strength and agility."
        },
        {
            name:"Cycling",
          activity:
            "https://media.istockphoto.com/id/1135508703/photo/cycling-race.jpg?s=612x612&w=0&k=20&c=DiKukVOyvLGwLAzbVtl_yFsAP_ANfikclENIv24u3n8=",
            description:"Leg strength and cardio on two wheels."
        },
        {
            name:"Running",
          activity:
            "https://media.istockphoto.com/id/1394473567/photo/senior-runner-feeling-great.jpg?s=612x612&w=0&k=20&c=3oyCkuqglCdIM2Nahbz1C7iBkmfWv2ovMOj6oeqsDHw=",
            description:"Cardiovascular exercise for stamina and mental clarity."
        },
        {
            name:"Swimming",
          activity:
            "https://img.freepik.com/free-photo/portrait-happy-little-boy-swimming-pool_1262-7260.jpg",
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