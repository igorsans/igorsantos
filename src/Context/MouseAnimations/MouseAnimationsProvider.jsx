import { createContext, useState, useEffect } from "react";

export const MouseAnimationsContext = createContext();

const MouseAnimationsProvider = ({ children }) => {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const [cursorVariant, setCursorVariant] = useState("default")
    const [cursorInsideText, setCursorInsideText] = useState(null)

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [mousePosition]);
    
    const variants = {
        default: {
            backgroundColor: "#000000",
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
        },
        text: {
            height: 128,
            width: 128,
            x: mousePosition.x - 64,
            y: mousePosition.y - 64,
            backgroundColor: "#ffffff",
            mixBlendMode: "difference"
        },
        skills: {
            height: 32,
            width: 32,
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: "#ffffff",
            mixBlendMode: "difference"
        },
        cases: {
            height: 128,
            width: 128,
            x: mousePosition.x - 64,
            y: mousePosition.y - 64,
            backgroundColor: "#ffffff",
        },
        more: {
            height: 64,
            width: 64,
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            backgroundColor: "#ffffff",
            mixBlendMode: "difference"
        },
        links: {
            height: 55,
            width: 55,
            x: mousePosition.x - 27.5,
            y: mousePosition.y - 27.5,
            backgroundColor: "#ffffff",
            mixBlendMode: "difference"
        },


    }
    const cursorLeave = () => {
        setCursorVariant("default")
        setCursorInsideText(null)
    }

    const cursorSkill = () => setCursorVariant("skills")
    const cursorText = () => setCursorVariant("text");
    const cursorCases = () => setCursorVariant("cases");
    const cursorType = (type) => setCursorVariant(type) 

    const context = {
        cursorInsideText: cursorInsideText,
        setCursorInsideText: setCursorInsideText,
        variants: variants,
        cursorVariant: cursorVariant,
        cursorType: cursorType,
        cursorLeave: cursorLeave,
        cursorSkill: cursorSkill,
        cursorText: cursorText,
        cursorCases: cursorCases
    };
    return (
        <MouseAnimationsContext.Provider value={context}>{children}</MouseAnimationsContext.Provider>
    )
};

export default MouseAnimationsProvider