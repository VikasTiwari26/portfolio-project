import React, { useContext } from 'react';
import { mySkills } from '../../contants';
import { themeContext } from '../../Context';
import { motion } from "framer-motion";
import './Skills.css'

const Skills = (props) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="skills">
            <span style={{ color: darkMode ? 'white' : '' }}>Professional </span>
            <span> Skills</span>
            {/* <span>Stack</span> */}
            <motion.div
                whileInView={{ left: "25rem" }}
            >

            </motion.div>
            <div className='main-skills-cntnr' >
                {/* <div style={{ border: '1px solid #fff ', width: '90%', margin: 'auto', height: '11px' }} >
                    <div style={{ width: '50%', marginBottom: '1px', marginTop: '1px', marginLeft: '1px', height: '9px' }} >
                        <div style={{ width: '0%', background: '#fff' }} ></div>
                    </div>
                </div> */}
                {
                    mySkills.map((skill, index) => (
                        <div key={index} className='outer-skill-container' >
                            <div style={{ boxShadow: darkMode ? '#fff 0 0px 9px' : '#000 0 0px 9px' }} className='skill-icon' >
                                <img src={skill[2]} />
                                {/* {skill[0]} */}
                            </div>
                            <div className='skill-container' style={{ border: `1px solid ${skill[4]}`, margin: 'auto', height: '11px',background:'#fff' }} >
                                <div style={{ width: skill[1], marginBottom: '1px', marginTop: '1px', marginLeft: '1px', height: '9px', boxShadow: `${skill[4]} 0px 1px 15px` }} >
                                    <div className='skill-bar' style={{ height:'100%', background: skill[4] }} ></div>
                                </div>
                            </div>
                            {/* <div key={index} style={{ border: `${skill[4]} 1px solid` }} className='skill-container'>
                                <div className="skill" style={{ width: `${skill[1]}`, backgroundColor: skill[4], boxShadow: `${skill[4]} 0px 1px 15px` }} ></div>
                            </div> */}
                            <p className='skill-level' style={{ color: darkMode ? 'white' : '', boxShadow: darkMode ? '#fff 0 0px 9px' : '#000 0 0px 9px', background: skill[4] }} >{skill[3]}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Skills;