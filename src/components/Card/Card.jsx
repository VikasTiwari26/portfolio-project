import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color, learnMoreLink}) => {
  const openLearnMoreLinks =(link)=>{
    window.open(link,"_blank")
  }
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button" onClick={()=>openLearnMoreLinks(learnMoreLink)} >LEARN MORE</button>
    </div>
  );
};

export default Card;
