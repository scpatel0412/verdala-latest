import { Link } from "gatsby";
import React from "react"
import ButtonArrow from '../../assets/svgs/button-arrow.svg'

const Button = ({ style, link, text,classname }) => (
    <Link to={link} className={classname?classname:"mainbtn"}>
        {text}
        {/* <div className={"button " + style}>
            <div className="inner-button">
                <span>{text}</span>
                
                <div className="button-arrow">
                    <ButtonArrow />
                </div>
            </div>
        </div> */}
    </Link>
)

export default Button;