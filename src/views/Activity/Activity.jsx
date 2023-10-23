import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import {
  ActivityCard,
  ActivityData,
} from "../../components";
import "./activity.css";
import TempoShow from "../../components/ActivityComponent/TempoShow";
import AddActivityForm from "../../components/ActivityComponent/AddActivityForm";
import {toast, Toaster} from "react-hot-toast";

const Activity = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };
  const [checkAddActivity, setCheckAddActivity] = useState();
  const [defaultType, setDefaultType] = useState("test");
  const [icon, setIcon] = useState("");
  return (
    <Layout>
      <ActivityData>
        {/* <AddActivityButton /> */}
        <div className="xl:container xl:mx-auto pt-[75px]">
          {/* <ActivitySlide /> */}
          <Toaster position="top-center" reverseOrder={true} />
          <ActivityCard
            toggleFormVisibility={toggleFormVisibility}
            setIcon={setIcon}
            setDefaultType={setDefaultType}
            defaultType={defaultType}
          />
          {isFormVisible && (
            <AddActivityForm
              toggleFormVisibility={toggleFormVisibility}
              defaultType={defaultType}
              icon={icon}
              setCheckAddActivity={setCheckAddActivity}
            />
          )}
        </div>
        <div>{/* <TempoShow /> */}</div>
      </ActivityData>
    </Layout>
  );
};

export default Activity;
