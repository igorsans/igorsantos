import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { motion } from "framer-motion";
import { MouseAnimationsContext } from "../../Context/MouseAnimations/MouseAnimationsProvider.jsx";
import { useContext, useEffect } from "react";
import "./Routes.css"
import { Projects } from "../../Pages/Projects/Projects.jsx";
import { Header } from "../Components/Header/Header";
import { LangContext } from "../../Context/Lang/LangProvider.jsx";
import { Home } from "../../Pages/Home/Home.jsx"



const Routes = () => {
    const MouseAnimations = useContext(MouseAnimationsContext)
    const langContext = useContext(LangContext);

    useEffect(() => {
        const localLang = localStorage.getItem("lang");
        if (localLang) {
            langContext.setLang(localLang);
        } else {
            langContext.setLang("PT");
        }
    });

    return (
        <BrowserRouter>
                <motion.div className="cursor"
                    variants={MouseAnimations.variants}
                    animate={MouseAnimations.cursorVariant}
                >
                    <span>
                        {MouseAnimations.cursorInsideText}
                    </span>
                </motion.div>
                <Header />
                <Switch>
                    <Route path="/" element={<Home />} />
                    <Route path="/Projects" element={<Projects />} />
                </Switch>
        </BrowserRouter>
    )
}
export default Routes;