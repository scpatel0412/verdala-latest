import React from "react"
import * as IconStyles from "./section.module.scss";

const IconTitleText = ({ icon, title, text }) => (
    <>
        <div className={IconStyles.icon}>
            <img src={icon} alt="" />
        </div>
        <h3 className={IconStyles.title} data-splitting>{title}</h3>
        <p className={IconStyles.desc}>{text}</p>
    </>
)

export default IconTitleText;