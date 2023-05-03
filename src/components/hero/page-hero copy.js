import React from "react"
import HeroImg from "../../assets/images/test-images/home-image.png"
// import { StaticQuery, graphql } from "gatsby"

import * as heroStyles from "./hero.module.scss"

const PageHero = ( props ) => (
    <>
        <div className={heroStyles.heroContainer}>
            <div className={heroStyles.heroImage}>
                <img className="bg-img" src={HeroImg} alt="" />
            </div>

            <div className={heroStyles.pageTextCont}>
                <div className="title-cont text-center">
                    <h1 className={heroStyles.pageMainTitle}>{props.title}</h1>
                </div>
            </div>
        </div>
    </>
)

export default PageHero;