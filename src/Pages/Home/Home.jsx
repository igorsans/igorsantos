import "./home.css"

import { MouseAnimationsContext } from "../../Context/MouseAnimations/MouseAnimationsProvider.jsx"
import { LangContext } from "../../Context/Lang/LangProvider.jsx";
import { useContext, useRef  } from "react"
import { motion, useInView } from "framer-motion";
import Projects from "../../assets/Components/Projects/Projects";
import { Skills } from "../../assets/Components/Skills/Skills";
import { Contact } from "../../assets/Components/Contact/Contact";

export const Home = () => {
  const MouseAnimations = useContext(MouseAnimationsContext)
  const langContext = useContext(LangContext)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="mainContainer">
        <div className="info">
          <p className="hello" ref={ref} style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
          }} >
            {langContext.texts.home.intro.p[langContext.lang]}<span>{langContext.texts.home.intro.introSpan[langContext.lang]}</span>
          </p>
          <div>
            <motion.img className="selfPhoto" initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{ scale: 1.2 }} src="https://avatars.githubusercontent.com/u/98533716?v=4" alt=""
            />
          </div>
        </div>
        <span className="name">
          <h1 onMouseEnter={MouseAnimations.cursorText}
            onMouseLeave={MouseAnimations.cursorLeave} className="titleName"
            ref={ref} style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
            }}
          >Igor Santos</h1>
          <h2
            ref={ref} style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
            }}
            onMouseEnter={MouseAnimations.cursorText} onMouseLeave={MouseAnimations.cursorLeave} className="subtitleName" >{langContext.texts.home.nameDisplay.stack[langContext.lang]}</h2>
        </span>
        <div className="aboutMe">
          <h3>{langContext.texts.home.aboutMeJorney.tittle[langContext.lang]}</h3>
          {langContext.texts.home.aboutMeJorney.text[langContext.lang].map((item, index) => {
            return (
              <p key={index + 500}>{item}</p>
            )
          })}
        </div>
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}
