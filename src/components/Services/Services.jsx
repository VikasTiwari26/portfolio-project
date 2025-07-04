import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';
import { hybridAppInfoUrl, webDevelopmentInfoUrl } from "../../contants";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
        Development of Hybrid Mobile Apps, Web Apps using 
          <br />
        Rest APIs technologies such as React, Ionic, Angular & JavaScript.
        </span>
        <a href={Resume} download="Vikas Tiwari">
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "30rem" }}
          whileInView={{ left: "25rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={" Hybrid Mobile App Development"}
            detail={"Ionic + Angular, Ionic + React"}
            learnMoreLink={hybridAppInfoUrl}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-6rem", top: "7rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Website Development"}
            detail={"Html, Css, JavaScript, React, Angular 2+, NextJS"}
            learnMoreLink={webDevelopmentInfoUrl}
          />
        </motion.div>
        {/* 3rd */}
        {/* <motion.div
          initial={{ top: "19rem", left: "30rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div> */}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
