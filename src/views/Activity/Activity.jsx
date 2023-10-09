import React from "react";
import { Layout } from "../../components/Layout";
import {ActivityCard, ActivityData, ActivitySlide,AddActivityButton } from '../../components'
import "./activity.css";

const Activity = () => {
  return (
    <Layout>
      <ActivityData>
        <AddActivityButton />
        <div className="xl:container xl:mx-auto pt-[75px]">
          {/* <ActivitySlide /> */}
          <ActivityCard />
        </div>
      </ActivityData>
    </Layout>
  );
};

export default Activity;
