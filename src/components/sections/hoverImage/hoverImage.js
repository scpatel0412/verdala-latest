import React from "react"
import HeroImg from "../../../assets/images/test-images/lifestyle.png"
import Button from "../../partials/buttons";
import * as Styles from "./hoverImage.module.scss"

const HoverImage = (props) => (
    <>
    <section className={Styles.laifesection}>
        <div className="crow">
            <div className="col-5 col-md-12 order-md-1">
                <div className={Styles.laifeimg}>
                    <img src={HeroImg} alt="" className="fadeinup"/>
                </div>
            </div>

            <div className="col-7 col-md-12">
                <div className={Styles.lifedesc}>
                    <div className={Styles.lifedescinner}>
                        <h2 className={`fadeinup ${Styles.lifetitle}`} data-splitting>From the grand entrance that sweeps you into its embrace, Verdala promises something truly beguiling.</h2>
                        <p className="fadeinup">The serenity of the Verdala beyond permeates every space within your home, a seamless flow of tranquillity that floats on a sea breeze. Masterfully defined living spaces are inter-connected yet cosseting at the same time. Reverse cycle air-conditioning and signature fireplace help create perfect ambience for a cosy night alone, or evening of entertainment</p>
                
                        <div className={Styles.hoverList}>
                            <ul>
                                <li className="fadeinup"><a href="#">Exclusivity</a></li>
                                <li className="fadeinup"><a href="#">Aesthetics</a></li>
                                <li className="fadeinup"><a href="#">Safety</a></li>
                                <li className="fadeinup"><a href="#">Concierge services</a></li>
                                <li className="fadeinup"><a href="#">Luxury living</a></li>
                                <li className="fadeinup"><a href="#">Open Spaces</a></li>
                            </ul>
                        </div>
                     </div>
                 </div>
            </div>
            <div className="col-12 col-md-12  order-md-0">
                <div className={Styles.lifedesc}>
                    <div className={Styles.lifedescinner}>
                        <div className="space-top fadeinup">
                            <Button
                                styleClass   = "border-button"
                                text = "Discover Lifestyle"
                            />
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </section>
    </>
)

export default HoverImage;