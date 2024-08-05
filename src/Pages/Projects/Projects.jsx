import projectsList from "../../Context/Lang/texts.json"
import "./Projects.css"
import { MouseAnimationsContext } from "../../Context/MouseAnimations/MouseAnimationsProvider.jsx"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { LangContext } from "../../Context/Lang/LangProvider.jsx"
import "../../assets/Components/Skills/Skills.css"

export const Projects = () => {

    const langContext = useContext(LangContext)
    const mouseAnimations = useContext(MouseAnimationsContext)
    const navigate = useNavigate()
    const projectsListOrder = projectsList.slice(0).reverse().map((val) => {
        return val
    })

    return (
        <>
            <button
                onMouseEnter={() => {
                    mouseAnimations.setCursorInsideText(langContext.texts.projects.button[langContext.lang])
                    mouseAnimations.cursorType("more")
                }}
                onMouseLeave={mouseAnimations.cursorLeave}
                onClick={() => {
                    window.scrollTo(0, 0);
                    mouseAnimations.cursorLeave();
                    navigate("/")
                }}
                className="back" />
            <div className="projects">
                <h2>Projetos</h2>
                {projectsListOrder.map((i) => {
                    return (
                        <div key={i.id + 100} className="projectsCardContainer">
                            <h4>{i.tittle}</h4>
                            <div className="projectsCard" >
                                <a className="linkCard" onMouseEnter={() => {
                                    mouseAnimations.setCursorInsideText("Github")
                                    mouseAnimations.cursorCases()
                                }} onMouseLeave={mouseAnimations.cursorLeave} href={i.github} target="_blank">
                                    <img className="projectsImg" src={i.imgDisplay} alt={i.imgAlt[langContext.lang]} />
                                </a>
                                <div className="projectsP">{i.about[langContext.lang]}
                                    {i.about.link ?<a target="_blank" href={i.about.link}>{langContext.lang == "PT" ? "aqui." : "here." }</a>
                                        : ""}
                                </div>
                            </div>

                            <div className="skills">
                                {i.tags ? i.tags.map((i) => {
                                    return (
                                        <div onMouseEnter={mouseAnimations.cursorSkill} onMouseLeave={mouseAnimations.cursorLeave} className="skillsCard">{i}</div>

                                    )
                                }) : ""}
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}