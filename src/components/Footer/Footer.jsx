import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { facebookUrl, githubUrl, instagramUrl } from "../../contants";

const Footer = () => {
  const openSocialLinks =(link)=>{
    window.open(link,"_blank")
  }
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>vikastiwari0260@gmail.com</span>
        <div className="f-icons">
          <Insta onClick={()=>{openSocialLinks(instagramUrl)}} color="white" size={"3rem"} />
          <Facebook onClick={()=>{openSocialLinks(facebookUrl)}} color="white" size={"3rem"} />
          <Gitub onClick={()=>{openSocialLinks(githubUrl)}} color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
