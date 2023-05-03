import React from "react";
import { Children, createContext, useEffect, useState } from "react";

export const ResizeContext = createContext(null)
const ScreenContext = ({ children }) => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    const updateScreenSize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener("resize", updateScreenSize)
        return () => window.removeEventListener("resize", updateScreenSize)
    }, [])

    return (
        <ResizeContext.Provider value={{ width: width, height: height }}>
            {children}
        </ResizeContext.Provider>
    )
}

export default ScreenContext