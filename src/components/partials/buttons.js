// import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react"
// import ButtonArrow from '../../assets/svgs/button-arrow.svg'

const Button = ({ style, link, text,classname }) => (
    <AniLink 
        cover
        direction="left"
        className={classname?classname:"mainbtn"}
        duration={1}
        bg="#7B9E6B"
        to={link}
    >
        <div className="inner-button">
            {text}
        </div>
        {/* <div className={"button " + style}>
            <div className="inner-button">
                <span>{text}</span>
                
                <div className="button-arrow">
                    <ButtonArrow />
                </div>
            </div>
        </div> */}
    </AniLink>
)

export default Button;