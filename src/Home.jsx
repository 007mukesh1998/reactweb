import React from "react";
import web from "../src/img/social1.jpg";
import Common from "./Common";

const Home = () => {
 return(
     <>
      <Common name="Welocome to  Home Page" imgsrc={web} visit="/services" btname="Get Started" />
     </>
  );
};

export default Home;