import React from "react";
import { Layout } from "../../components/Layout";
import ActivitySlide from "../../components/ActivityComponent/ActivitySlide";
import ActivityCard from "../../components/ActivityComponent/ActivityCard";
import ActivityData from "../../components/ActivityComponent/ActivityData";
import AddActivityButton from "../../components/ActivityComponent/AddActivityButton";
import "./activity.css";

const Activity = () => {
  return (
    <Layout>
      <ActivityData>
        <AddActivityButton />

        <div className="xl:container xl:mx-auto">
          <ActivitySlide />
          <ActivityCard />
        </div>
      </ActivityData>
    </Layout>
  );
};

export default Activity;
