import React from "react";
import { Layout } from "../../components/Layout";
import ActivitySlide from "../../components/ActivitySlide";
import ActivityCard from "../../components/ActivityCard";
import ActivityData from "../../components/ActivityData";
import AddActivityButton from "../../components/AddActivityButton";

const Activity = () => {
  return (
    <Layout>
      <ActivityData>
        <ActivitySlide />
        <AddActivityButton/>
        <ActivityCard />
      </ActivityData>
    </Layout>
  );
};

export default Activity;
