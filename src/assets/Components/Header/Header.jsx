import "./Header.css"
import { MouseAnimationsContext } from "../../../Context/MouseAnimations/MouseAnimationsProvider.jsx"
import { LangContext } from "../../../Context/Lang/LangProvider"
import { useContext } from "react"

export const Header = () => {
    const MouseAnimations = useContext(MouseAnimationsContext)
    const langContext = useContext(LangContext)
    const saveLang = (lang) => {
        langContext.setLang(lang)
        localStorage.setItem('lang', lang);
    }

    return (
        <header className="header">
            <button onMouseEnter={() => {
                MouseAnimations.cursorType("links")
            }}
                onClick={() => {
                    if (langContext.lang == null || langContext.lang == "PT") {
                        return saveLang("EN")
                    } else return saveLang("PT")
                }}
                onMouseLeave={MouseAnimations.cursorLeave}
                className="headerBtn">
                <img className="headerSvg" src="./globe.svg" alt="Mudar Linguagem / Change language" />
            </button>
        </header >
    )
}