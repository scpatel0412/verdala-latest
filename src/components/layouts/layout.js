import React, { useState, useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import Header from "../header/header";
import { allMenu } from "../../utils/api";

const Layout = ({ children, pageContext: { locale } }) => {
  const [scroll, setScroll] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const func = async () => {
      try {
        const res = await allMenu();
        setData(res.acf.add_menu);
      } catch (error) {
        console.log("ERROR DURING GET MENU DATA");
      }
    };
    func();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <div className="global-wrapper">
      <header className={scroll ? "global-header fixed" : "global-header"}>
        <Header data={data} />
      </header>

      <MDXProvider>
        <main>{children}</main>
      </MDXProvider>
    </div>
  );
};

export { Layout };