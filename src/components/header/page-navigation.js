import React, { useEffect } from "react";
// import { StaticQuery, graphql } from "gatsby"
// import * as headerStyles from "./header.module.scss"
// import VerdalaLogo from '../../assets/svgs/verdala-logo.svg'
import Container from "../layouts/container";

const PageNavigation = (props) => {
  useEffect(() => {}, [props]);

  return (
    <Container>
      <nav>
        <ul>
          {props.links.map((item) => {
            return (
              <li>
                <a href={item.fieldGroupName}>{item.subTitle}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
};

export default PageNavigation;