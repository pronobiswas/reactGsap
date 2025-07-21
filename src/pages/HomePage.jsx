import React from "react";
import BannerComponent from "../components/BannerComponent";
import ConstructionZones from "../components/ConstructionZones";

const HomePage = () => {
  return (
    <div className="w-full bg-white">
      <BannerComponent/>
      <ConstructionZones/>
    </div>
  );
};

export default HomePage;
