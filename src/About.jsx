import React from "react";
import web from "../src/img/office.png";
import Common from "./Common";

const About = () => {
    return(
        <>
          <Common name="Welocome to  About Page" imgsrc={web} visit="/contact" btname="Contact Now" />
        </>
    );
};

export default About;