import React from "react";
import { Layout } from "../../components/Layout";
import ActivitySlide from "../../components/ActivitySlide";
import ActivityCard from "../../components/ActivityCard";
import ActivityData from "../../components/ActivityData";
import AddActivityButton from "../../components/AddActivityButton";
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
