const mainSkillsContainer = document.querySelector(".main-skills-cntnr");
const skills = document.querySelectorAll(".skill-bar");

document.addEventListener("scroll", () => {
    const clientHeight = document.documentElement.clientHeight;
    const mainSkillsContainerY = mainSkillsContainer.getBoundingClientRect().y;
    const mainSkillsContainerHeight = mainSkillsContainer.getBoundingClientRect().height;

    if (clientHeight > mainSkillsContainerY + (mainSkillsContainerHeight * 2) / 3) {
        for(let i=0; i<skills.length;i++){
            skills[i].style.width ='100%'
        }
    } 
})