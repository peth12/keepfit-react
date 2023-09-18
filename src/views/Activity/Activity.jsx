import React from "react";
import { Layout } from "../../components/Layout";
import SlideActivity from "../../components/SlideActivity";
import ActivityCard from "../../components/ActivityCard";


const Activity = () => {
  return (
    <Layout>
      <SlideActivity/>
      <ActivityCard/>
    </Layout>
  );
};

export default Activity;
