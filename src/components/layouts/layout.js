import React, { useState, useEffect } from "react"
import { MDXProvider } from "@mdx-js/react"
import Header from "../header/header"


const Layout = ({ children, pageContext: { locale } }) => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, []);
    return (
        <div className="global-wrapper">
            <header className={scroll ? "global-header fixed" : "global-header"}>
                <Header />
            </header>

            <MDXProvider>
                <main>{children}</main>
            </MDXProvider>
        </div>
    )
}

export { Layout }