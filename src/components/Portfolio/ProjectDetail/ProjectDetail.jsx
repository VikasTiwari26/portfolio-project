import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import './ProjectDetail.css';

// let sliderInterval

const ProjectDetail = (props) => {
    const { title, description, images, liveDemoLink, video, myWorks } = props.project
    const { closeDetails, darkMode } = props

    const [currentSlide, setCurrentSlide] = useState(0)
    const [totalImages, setTotalImages] = useState(images.length)


    // useEffect(() => {
    //     sliderInterval = setInterval(() => {
    //         handleNextPrevBtn('next')
    //     }, 1000)
    // }, [])

    const getClassName = () => {
        if (darkMode) {
            return 'dark-bg-project-detail'
            // return 'light-bg-project-detail'
        } else {
            return 'light-bg-project-detail'
            // return 'dark-bg-project-detail'
        }
    }


    const seeDemo = () => {
        if(!video){
            window.open(liveDemoLink, "_blank")
        }
    }

    const handleNextPrevBtn = (direction) => {
        // clearInterval(sliderInterval)
        if (direction === 'next') {
            if (currentSlide + 1 > totalImages - 1) {
                setCurrentSlide(0)
            } else {
                setCurrentSlide(currentSlide + 1)
            }
        } else {
            if (currentSlide == 0) {
                setCurrentSlide(totalImages - 1)
            } else {
                setCurrentSlide(currentSlide - 1)
            }
        }
    }

    return (
        <div className={`project-detail ${getClassName()}`} >
            <div className='close-details' onClick={() => closeDetails(null)} >X</div>
            <div className='project-detail-heading' >
                <h2>{title}</h2>
            </div>
            <div className='about-project' >
                <div className='project-description' >
                    <div className='p-desc' >
                        <h2>My Work</h2>
                        <ul className='work-container' >
                            {
                                myWorks.map((work, index) => (
                                    <li key={index} className="work" >{work}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='live-demo-btn' >
                        {(video||liveDemoLink)&&<button onClick={seeDemo} >See Demo</button>}
                    </div>
                </div>
                <div className='project-images' >
                    <div className='slide-img-detail-page'>
                        <div className='dir-btn' onClick={() => handleNextPrevBtn('prev')} >
                            <FontAwesomeIcon icon={faAngleLeft} size="lg" />
                        </div>
                        <img src={images[currentSlide]} alt="" />
                        <div className='dir-btn' onClick={() => handleNextPrevBtn('next')} >
                            <FontAwesomeIcon icon={faAngleRight} size="lg" />
                        </div>
                    </div>
                    <div className='current-slide-number' >
                        {`${currentSlide + 1} of ${totalImages}`}
                    </div>
                    {/* {
                        images.map(image => (
                            <div className='slide-img-detail-page'>
                                <img src={image} alt="" />
                            </div>
                        ))
                    } */}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;