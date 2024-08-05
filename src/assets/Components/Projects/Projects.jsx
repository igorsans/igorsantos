import './Projects.css'
import { motion } from "framer-motion";
import { useContext } from "react"
import { MouseAnimationsContext } from "../../../Context/MouseAnimations/MouseAnimationsProvider.jsx"
import { useNavigate } from 'react-router-dom';
import projectsList from "../../../Projects/Projects.json"
import { LangContext } from '../../../Context/Lang/LangProvider.jsx';

const Projects = () => {

    const langContext = useContext(LangContext)
    const navigate = useNavigate()
    const MouseAnimations = useContext(MouseAnimationsContext)
    const projectsListOrder = projectsList.slice(0).reverse().map((val) => {
        return val
    })
    return (
        <div className="projectsContainer">
            <h3 className='projectsTittleHome'>{langContext.texts.home.personalProjects.tittle[langContext.lang]}</h3>
            <p>{langContext.texts.home.personalProjects.intro[langContext.lang]}</p>
            <div className="projects">
                {projectsListOrder.map((item, index) =>
                    index < 6 ? (
                        
                        <motion.img
                        key={item.id}
                        onMouseEnter={() => {
                            MouseAnimations.setCursorInsideText(item.tittle);
                            MouseAnimations.cursorCases();
                        }}
                          onMouseLeave={MouseAnimations.cursorLeave}
                            animate={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20
                            }}
                            whileHover={{ scale: 1.05 }} src={item.imgDisplay} />
                    ) : ("")
                )}
            </div>
            <button onMouseEnter={() => {
                MouseAnimations.cursorType("more");
                MouseAnimations.setCursorInsideText(langContext.texts.home.personalProjects.button[langContext.lang]);

            }} onMouseLeave={MouseAnimations.cursorLeave}
            onClick={() => {
                MouseAnimations.cursorLeave();
                window.scrollTo(0, 0);
                navigate("/Projects");
            }} className="buttonProjects"> &#8640;</button>
        </div>
    )
}


export default Projects