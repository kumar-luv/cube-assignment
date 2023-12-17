import React from "react";
import Images from "./Images";
import Details from "./Details";

const Body: React.FC = () => {
  return (
    <div className="body">
      <Details />
      <Images />
    </div>
  );
};

export default Body;
