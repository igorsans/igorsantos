import "./Skills.css"
import { useContext } from "react"
import { MouseAnimationsContext } from "../../../Context/MouseAnimations/MouseAnimationsProvider.jsx"

export const Skills = () => {

    const MouseAnimations = useContext(MouseAnimationsContext)

    const skillsIHave = [
        "HTML", "CSS", "JavaScript", "Node.JS", "React", "Angular", "NextJS", "Vite" , "MySQL", "Java", "Spring Boot" , "RabbitMQ" , "Kafka" , "Unitary tests", "Acessibility",  "Docker", "AWS"
    ]

    return (
        <div className="skillsDiv">
            <h3>Skills</h3>
            <div className="skills">
                {skillsIHave.map((i) => <span key={i} onMouseEnter={MouseAnimations.cursorSkill} onMouseLeave={MouseAnimations.cursorLeave} className="skillsCard">{i}</span>)}
            </div>
        </div>
    )
}