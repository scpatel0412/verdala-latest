import React from "react"
// import { StaticQuery, graphql } from "gatsby"

const SecondaryText = (props) => (
    <>
        <div className={props.styleClass + " secondary-text"}>
            <span className="loctxt">{props.text}</span>
        </div>
    </>
)

export default SecondaryText;
