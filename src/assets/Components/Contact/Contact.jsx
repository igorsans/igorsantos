import "./Contact.css"
import { useContext } from "react"
import { MouseAnimationsContext } from "../../../Context/MouseAnimations/MouseAnimationsProvider.jsx"
import { LangContext } from "../../../Context/Lang/LangProvider"


export const Contact = () => {

    const langContext = useContext(LangContext)
    const MouseAnimations = useContext(MouseAnimationsContext)
    return (
        <div className="links">
            <a onMouseEnter={() => {MouseAnimations.cursorType("links")}} onMouseLeave={MouseAnimations.cursorLeave} target="_blank" href="https://www.linkedin.com/in/devsantos/"><img className="imgContact" title={langContext.texts.contact.linkedin[langContext.lang]} src="./linkedin.svg" alt="LinkedIn Logo" /></a>
            <a onMouseEnter={() => {MouseAnimations.cursorType("links")}} onMouseLeave={MouseAnimations.cursorLeave} target="_blank" href="https://github.com/igorsans"><img className="imgContact"  title={langContext.texts.contact.github[langContext.lang]} src="./github.svg" alt="Github Logo" /></a>
            <a onMouseEnter={() => {MouseAnimations.cursorType("links")}} onMouseLeave={MouseAnimations.cursorLeave} target="_blank" href="mailto:igor.santos0@hotmail.com"><img className="imgContact" title={langContext.texts.contact.email[langContext.lang]} src="./email.svg" alt="Email Logo" /></a>
            <a onMouseEnter={() => {MouseAnimations.cursorType("links")}} onMouseLeave={MouseAnimations.cursorLeave} target="_blank" href="https://api.whatsapp.com/send?phone=5521980505130&text=Igor+Santos%2C+Desenvolvedor%2C+Me+Envie+uma+mensagem%21"><img className="imgContact" title={langContext.texts.contact.whatsapp[langContext.lang]} src="./whatsapp.svg" alt="Whatsapp Logo" /></a>
        </div>
    )
}