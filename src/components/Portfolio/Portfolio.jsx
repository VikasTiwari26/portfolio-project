import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import { projectData } from "../../projects";
import ProjectDetail from "./ProjectDetail/ProjectDetail";
const Portfolio = () => {

  const [project, setProject] = useState(null)

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleSeeDetails = (project) => {
    const BODY = document.getElementsByTagName('body')[0]
    // console.log(BODY)
    if (project) {
      BODY.style.overflow = 'hidden'
      setProject(project)
    } else {
      setProject(null)
      BODY.style.overflow = 'auto'
    }
  }

  return (<>
    <div className="portfolio" id="portfolio">
      {project && <ProjectDetail darkMode={darkMode} project={project} closeDetails={handleSeeDetails} />}
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>
      <div className="project-cards" >
        {
          projectData.map((project, index) => {
            const { title, thumbnailImage, websiteIntro, techUsed } = project
            return (
              <div className={`project-card ${darkMode ? 'dark-bkgrnd' : 'light-bkgrnd'}`} onClick={() => handleSeeDetails(project)} >
                <div className="p-img">
                  <img src={thumbnailImage} />
                </div>
                <div className="tech-used" >
                  {techUsed.map(tech=>(<p>{tech}</p>))}
                </div>
                <div className="project-heading" >
                  <h3>{title}</h3>
                </div>
                <div className="short-description">
                  {websiteIntro}
                </div>
              </div>
              // <div key={index} className={`project-card ${darkMode ? 'dark-bkgrnd' : 'light-bkgrnd'}`} >
              //   <div className="project-heading" >
              //     <h3>{title}</h3>
              //   </div>
              //   <div className="project-image" >
              //     <img src={thumbnailImage} />
              //   </div>
                // <div className="short-description">
                //   {websiteIntro}
                // </div>
              //   <div className="see-details" >
              //     <button className="see-detail-btn" onClick={() => handleSeeDetails(project)}> See Details </button>
              //   </div>
              // </div>
            )
          })
        }

      </div>
    </div>
  </>
  );
};

export default Portfolio;
