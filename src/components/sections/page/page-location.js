import React,{useState} from "react"
import Container from "../../layouts/container";
import SectionTitle from "../../partials/section-title";
import SecondaryText from "../../typography/secondaryText";
import Carousel from "../carousel/carousel";
import HeroImg from "../../../assets/images/test-images/Neighbor.png"
import Button from "../../partials/buttons";
import WalkDistance from '../../../assets/svgs/walkdistance.svg'
import CarDistance from '../../../assets/svgs/cardistance.svg'

import * as Styles from "./page.module.scss"


const PageLocation = (props) =>{
    const [isActive, setActive] = useState(0);
    const ToggleClass = (index) => {
      setActive(index); 
     };
 return(
    <>
        <section className="page-generic red-top-space accent-section pb-20">

            <Container type="fullwidthcontainer extend-container">
                <SectionTitle
                    number = "04"
                    text = "Neighbourhood"
                    ptext = "Rabat is Malta’s most idyllic prestige neighbourhood, nestled between Mdina andDingli cliffs. Combining a cosmopolitan buzz with village character, it’s a place of unrivalled pedigree, where the lifestyle is cherished by the fortunate few."
                    

                />

                <section className={Styles.locationarea}>
                    <div className="crow">
                        <div className="col-5 col-xl-12">
                        <Container>
                            <div className={`fadeinup locationtitle ${Styles.locationtitle}`}>
                            <SecondaryText
                                styleClass = "main-title locationline"
                                text = "Location"
                            />

                            <h2 className={Styles.locationheading} data-splitting>Life among parks & iconic Malta sights</h2>
                            </div>
                            </Container>
                        </div>

                        <div className="col-7 col-xl-12">
                            <Carousel />
                        </div>
                    </div>
                </section>

                <section className={Styles.pb0}>
                    <div className="crow">
                        <div className="col-5 col-xl-12">
                        <Container>
                        <div className={`fadeinup locationtitle ${Styles.locationtitle}`}>
                            <SecondaryText
                                styleClass = "main-title locationline"
                                text = "Connectivity"
                            />
                            </div>
                            </Container>
                        
                        </div>

                        <div className="col-7 col-xl-12">
                            <h2 className={Styles.locationheading} data-splitting>ICONIC SIGHTS WITHIN EASY WALKING DISTANCE</h2>
                        </div>
                    </div>
                </section>
                <section className={Styles.pt80}>
                    <div className="crow">
                        <div className="col-5 col-lg-12 fadeinup">
                            <div className={`${Styles.mainattrcontainer} ${Styles.h100}`}>
                                
                            <Container type={`extend-container ${Styles.h100} ${Styles[`activattr_${isActive}`]}`}>
                                <div className={`${Styles.locationtitle} ${Styles.h100} ${Styles.attrcontainer}`} >
                                    <div className={Styles.connectattr}>
                                        <div className={`${Styles.attritem}  ${isActive===0 ? Styles.attractive:""}`} onClick={()=>ToggleClass(0)}>
                                            <WalkDistance/>
                                            <div className={Styles.attrdistance}>5 Min</div>
                                        </div>
                                        <div className={`${Styles.attritem}  ${isActive===1 ? Styles.attractive:""}`}   onClick={()=>ToggleClass(1)}>
                                            <div className={Styles.attrdistance}>3 Min</div>
                                            <CarDistance/>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Container>
                            </div>
                        </div>

                        <div className="col-7 col-lg-12">

                            <div className={`crow align-bottom ${Styles.connectivity}`}>
                                <div className="col-8 col-sm-12 fadeinup">
                                    <img src={HeroImg} alt="" />
                                </div>
                                <div className="col-4 col-sm-12 fadeinup">
                                    <h3 className={`text-color ${Styles.schoolheading}`}>School</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <Button
                                styleClass = "border-button"
                                text = "A Day in the Life"
                            />
                            {/* <Carousel /> */}
                        </div>
                    </div>
                </section>
            </Container>

        </section>
    </>
)
 }
export default PageLocation;