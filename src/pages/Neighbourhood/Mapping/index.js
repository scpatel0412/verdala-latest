import React, { useState } from 'react'
import neighmapimg from "../../../images/neigh-map-img.png";
import LandmarkFoundingWheel from '../../../images/Landmark-FoundingWheel.png'
import LandmarkCasaBernard from '../../../images/Landmark-Casa Bernard.png'
import LandmarkCatacombs from '../../../images/Landmark-Catacombs.png'
import LandmarkDomusRomana from '../../../images/Landmark-Domus Romana.png'
import LandmarkGhajnHammiem from '../../../images/Landmark-Ghajn Hammiem.png'
import LandmarkPalazzoFalzon from '../../../images/Landmark-Palazzo Falzon.png'
import LandmarkPalazzoVilhena from '../../../images/Landmark-Palazzo Vilhena.png'
import LandmarkParrucan from '../../../images/Landmark-Parrucan.png'
import LandmarkPenitentMagdalene from '../../../images/Landmark-Penitent Magdalene.png'
import LandmarkRabatMarket from '../../../images/Landmark-Rabat Market.png'
import LandmarkSerkin from '../../../images/Landmark-Serkin.png'
import LandmarkStPaulCathedral from '../../../images/Landmark-St. Paul Cathedral.png'
import LandmarkStPaulBasilica from '../../../images/Landmark-St.Paul Basilica.png'
import LandmarkVerdala from '../../../images/Landmark-Verdala.png'
import neighmapimgsvg from '../../../images/neigh-map-img.svg'

const Mapping = () => {
    const [over, setOver] = useState({ name: '', display: false, discription: "", image: '' });
    return (
        <div className="mapimg" >
            {over.display && 
            <div className="mask-information"
            >
                <div className="msk-popup">
                    <div className="img-mask"><img src={over.image} style={{ height: '100%' }} /></div>
                    <h6>{over.name}</h6>
                    {/* <p>{over.discription}</p> */}
                    <p>The Verdala Terraces offers a truly singular medley of amenities, amusements, and privileges with personalised levels of service and exclusivity. </p>
                </div>
            </div>
            }
            
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 5108 3633" style={{ enableBackground: 'new 0 0 5108 3633' }} xmlSpace="preserve" >
                <g>
                    <g>
                        <defs>
                            <rect id="SVGID_1_" width="5108" height="3633" />
                        </defs>
                        <clipPath id="SVGID_2_">
                            <use xlinkHref="#SVGID_1_" style={{ overflow: 'visible' }} />
                        </clipPath>
                        <g class="st0" style={{ clipPath: 'url(#SVGID_2_)' }} />
                        <defs>
                            <rect id="SVGID_3_" width="5108" height="3633" />
                        </defs>
                        <clipPath id="SVGID_4_">
                            <use xlinkHref="#SVGID_3_" style={{ overflow: 'visible' }} />
                        </clipPath>

                        <g class="st1" style={{ clipPath: 'url(#SVGID_4_)' }}>
                            <defs>
                                <rect id="SVGID_5_" width="5108" height="3633" />
                            </defs>
                            <clipPath id="SVGID_6_">
                                <use xlinkHref="#SVGID_5_" style={{ overflow: 'visible' }} />
                            </clipPath>

                            <image style={{ overflow: 'visible', clippath: 'url(#SVGID_6_)' }} width="5108" height="3633" xlinkHref={neighmapimgsvg}>
                            </image>
                        </g>

                        <g class="st1 svg-menu__path__seleccion" style={{ clipPath: 'url(#SVGID_4_)' }}>
                            <defs>
                                <rect id="SVGID_7_" x="4496" y="2530" width="227.5" height="373.6" />
                            </defs>
                            <clipPath id="SVGID_8_">
                                <use xlinkHref="#SVGID_7_" style={{ overflow: 'visible' }} />
                            </clipPath>

                            <g class="st2" style={{ clipPath: 'url(#SVGID_8_)' }}>
                                <defs>
                                    <rect id="SVGID_9_" x="4496" y="2530" width="227.5" height="373.6" />
                                </defs>
                                <clipPath id="SVGID_10_">
                                    <use xlinkHref="#SVGID_9_" style={{ overflow: 'visible' }} />
                                </clipPath>
                                <g style={{ clippath: 'url(#SVGID_10_)' }}>

                                    <image style={{ overflow: 'visible',cursor:'pointer' }} width="232" height="381" xlinkHref={LandmarkPalazzoFalzon} transform="matrix(0.9806 0 0 0.9806 4470 2485.0391)"
                                        onMouseOver={(e) =>
                                          {
                                            setOver({ name: 'Landmark Palazzo Falzon', display: true, discription: "Landmark Palazzo Falzon description", image: LandmarkPalazzoFalzon })
                                          }
                                        }
                                        onMouseOut={(e)=> {
                                          setOver({ display: false })
                                        }}
                                    >
                                    </image>
                                </g>
                            </g>
                        </g>

                        <g class="st1 svg-menu__path__seleccion" style={{ clipPath: 'url(#SVGID_4_)' }}>
                            <defs>
                                <rect id="SVGID_11_" x="4193.4" y="1255.9" width="533.2" height="487.1" />
                            </defs>
                            <clipPath id="SVGID_12_">
                                <use xlinkHref="#SVGID_11_" style={{ overflow: 'visible' }} />
                            </clipPath>

                            <g class="st3" style={{ clipPath: 'url(#SVGID_12_)' }}>
                                <defs>
                                    <rect id="SVGID_13_" x="4193.4" y="1255.9" width="533.2" height="487.1" />
                                </defs>
                                <clipPath id="SVGID_14__">
                                    <use xlinkHref="#SVGID_13_" style={{ overflow: 'visible' }} />
                                </clipPath>
                                <g style={{ clippath: 'url(#SVGID_14_)' }}>

                                    <image style={{ overflow: 'visible',cursor:'pointer' }} width="544" height="497" xlinkHref={LandmarkGhajnHammiem} transform="matrix(0.9801 0 0 0.9801 4193.4233 1255.8691)"
                                        onMouseOver={() =>
                                            setOver({ name: 'Landmark Ghajn Hammiem', display: true, discription: "Landmark Ghajn Hammiem description", image: LandmarkGhajnHammiem })
                                        }
                                        onMouseOut={()=>{
                                          setOver({ display: false })
                                        }}
                                    >
                                    </image>
                                </g>
                            </g>
                        </g>


                        <g class="st1 svg-menu__path__seleccion" style={{ clipPath: 'url(#SVGID_4_)' }}>
                            <defs>
                                <rect id="SVGID_15_" x="4119.1" y="2760.2" width="378.9" height="375.8" />
                            </defs>
                            <clipPath id="SVGID_16_">
                                <use xlinkHref="#SVGID_15_" style={{ overflow: 'visible' }} />
                            </clipPath>

                            <g class="st4" style={{ clipPath: 'url(#SVGID_16_)' }}>
                                <defs>
                                    <rect id="SVGID_17_" x="4119.1" y="2760.2" width="378.9" height="375.8" />
                                </defs>
                                <clipPath id="SVGID_18_">
                                    <use xlinkHref="#SVGID_17_" style={{ overflow: 'visible' }} />
                                </clipPath>
                                <g style={{ clippath: 'url(#SVGID_18_)' }}>

                                    <image style={{ overflow: 'visible',cursor:'pointer' }} width="369" height="366" xlinkHref={LandmarkStPaulCathedral}
                                        transform="matrix(1.0267 0 0 1.0267 4119.0684 2760.2178)"
                                        onMouseOver={() =>
                                            setOver({ name: 'LandmarkSt Paul Cathedral', display: true, discription: "Landmark StPaul Cathedral description", image: LandmarkStPaulCathedral })
                                        }
                                        onMouseOut={()=>{
                                          setOver({ display: false })
                                        }}
                                    >
                                    </image>
                                </g>
                            </g>
                        </g>




                        <g class="st1 svg-menu__path__seleccion" style={{ clipPath: 'url(#SVGID_4_)' }}>
                            <defs>
                                <rect id="SVGID_19_" x="3620" y="1573.3" width="627.9" height="351.5" />
                            </defs>
                            <clipPath id="SVGID_20_">
                                <use xlinkHref="#SVGID_19_" style={{ overflow: 'visible' }} />
                            </clipPath>

                            <g class="st5" style={{ clippath: 'url(#SVGID_20_)' }}>
                                <defs>
                                    <rect id="SVGID_21_" x="3620" y="1573.3" width="627.9" height="351.5" />
                                </defs>
                                <clipPath id="SVGID_22_">
                                    <use xlinkHref="#SVGID_21_" style={{ overflow: 'visible' }} />
                                </clipPath>
                                <g style={{ clippath: '(#SVGID_22_)' }}>
                                    <image style={{ overflow: 'visible',cursor:'pointer' }} width="636" height="356" xlinkHref={LandmarkDomusRomana}
                                        transform="matrix(0.9873 0 0 0.9873 3620 1573.3018)"
                                        onMouseOver={() =>
                                            setOver({ name: 'Landmark Domus Romana', display: true, discription: "Landmark Domus Romana description", image: LandmarkDomusRomana })
                                        }
                                        onMouseOut={()=>{
                                          setOver({ display: false })
                                        }}
                                    >
                                    </image>
                                </g>
                            </g>
                        </g>



                        <g class="st1 svg-menu__path__seleccion" style={{ clipPath: 'url(#SVGID_4_)' }}>
                            <defs>
                                <rect id="SVGID_23_" x="3766.5" y="2716.8" width="228.5" height="346.7" />
                            </defs>
                            <clipPath id="SVGID_24_">
                                <use xlinkHref="#SVGID_23_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g transform="matrix(1 0 0 1 0 0)" style={{ clippath: 'url(#SVGID_24_)' }}>
                                <image style={{ overflow: 'visible',cursor:'pointer' }} width="236" height="358" xlinkHref={LandmarkPalazzoVilhena} transform="matrix(0.9683 0 0 0.9683 3766.4805 2716.8438)"
                                    onMouseOver={() =>
                                        setOver({ name: 'Landmark Palazzo Vilhena', display: true, discription: "Landmark Palazzo Vilhena description", image: LandmarkPalazzoVilhena })
                                    }
                                    onMouseOut={()=>{
                                      setOver({ display: false })
                                    }}
                                >
                                </image>
                            </g>

                            {/* <g class="st6" style={{ clipPath: 'url(#SVGID_26_)'}}>
                              <defs>
                                <rect id="SVGID_27_" x="3394.4" y="1589.6" width="194.2" height="334.8"/>
                              </defs>
                              <clipPath id="SVGID_28_">
                                <use xlinkHref="#SVGID_27_"  style={{overflow:'visible'}}/>
                              </clipPath>
                              <g style={{clippath:'url(#SVGID_28_)'}}>
                                
                                  <image style={{overflow:'visible'}} width="185" height="319"  xlinkHref={LandmarkSerkin} transform="matrix(1.0495 0 0 1.0495 3394.4189 1589.6006)">
                                </image>
                              </g>
                            </g> */}
                        </g>
                        <g class="st1" style={{ clipPath: 'url(#SVGID_4_)' }}>
                            <defs>
                                <rect id="SVGID_25_" x="3394.4" y="1589.6" width="194.2" height="334.8" />
                            </defs>
                            <clipPath id="SVGID_26_">
                                <use xlinkHref="#SVGID_25_" style={{ overflow: 'visible',cursor:'pointer' }} />
                            </clipPath>
                            <g class="st6  svg-menu__path__seleccion" style={{ clipPath: 'url(#SVGID_26_)' }}>
                                <defs>
                                    <rect id="SVGID_27_" x="3394.4" y="1589.6" width="194.2" height="334.8" />
                                </defs>
                                <clipPath id="SVGID_28_">
                                    <use xlinkHref="#SVGID_27_" style={{ overflow: 'visible' }} />
                                </clipPath>
                                </g>
                                <g className=' svg-menu__path__seleccion' style={{ clippath: 'url(#SVGID_28_)' }}>

                                    <image style={{ overflow: 'visible',cursor:'pointer' }} width="185" height="319" xlinkHref={LandmarkSerkin}
                                        transform="matrix(1.0495 0 0 1.0495 3394.4189 1589.6006)"
                                        onMouseOver={() =>
                                            setOver({ name: 'Landmark Serkin', display: true, discription: "Landmark Serkin description", image: LandmarkSerkin })
                                        }
                                        onMouseOut={()=>{
                                          setOver({ display: false })
                                        }}
                                    >
                                    </image>
                              
                            </g>
                            {/* <g style={{clippath:'url(#SVGID_30_)'}}>
                              
                                <image style={{overflow:'visible'}} width="225" height="347" xlinkHref={LandmarkPenitentMagdalene}  transform="matrix(1.0013 0 0 1.0013 2704.6982 1515.5352)">
                              </image>
                            </g>
                          </g> */}



                            <g class="st1 svg-menu__path__seleccion" style={{ clipPath: 'url(#SVGID_4_)' }}>
                                <defs>
                                    <rect id="SVGID_29_" x="2704.7" y="1515.5" width="225.3" height="347.5" />
                                </defs>
                                <clipPath id="SVGID_30_">
                                    <use xlinkHref="#SVGID_29_" style={{ overflow: 'visible' }} />
                                </clipPath>
                                <g style={{ clipPath: 'url(#SVGID_30_)' }}>
                                    <image style={{ overflow: 'visible',cursor:'pointer' }} width="225" height="347" xlinkHref={LandmarkPenitentMagdalene}
                                        transform="matrix(1.0013 0 0 1.0013 2704.6982 1515.5352)"
                                        onMouseOver={() =>
                                            setOver({ name: 'Landmark Penitent Magdalene', display: true, discription: "Landmark Penitent Magdalene description", image: LandmarkPenitentMagdalene })
                                        }
                                        onMouseOut={()=>{
                                          setOver({ display: false })
                                        }}
                                    >
                                    </image>
                                </g>
                            </g>
                        </g>

                        <g class="st1 svg-menu__path__seleccion" style={{ clipPath: 'url(#SVGID_4_)' }}>
                            <defs>
                                <rect id="SVGID_31_" x="2915.4" y="1135.3" width="275.1" height="367.4" />
                            </defs>
                            <clipPath id="SVGID_32_">
                                <use xlinkHref="#SVGID_31_" style={{ overflow: 'visible' }} />
                            </clipPath>

                            <g class="st7" style={{ clipPath: 'url(#SVGID_32_)' }}>
                                <defs>
                                    <rect id="SVGID_33_" x="2915.4" y="1135.3" width="275.1" height="367.4" />
                                </defs>
                                <clipPath id="SVGID_34_">
                                    <use xlinkHref="#SVGID_33_" style={{ overflow: 'visible' }} />
                                </clipPath>
                                <g style={{ clippath: 'url(#SVGID_34_)' }}>

                                    <image style={{ overflow: 'visible',cursor:'pointer' }} width="271" height="362" xlinkHref={LandmarkCasaBernard} transform="matrix(1.015 0 0 1.015 2915.4106 1135.2893)"
                                        onMouseOver={() =>
                                            setOver({ name: 'Landmark Casa Bernard', display: true, discription: "Landmark Casa Bernard description", image: LandmarkCasaBernard })
                                        }
                                        onMouseOut={()=>{
                                          setOver({ display: false })
                                        }}
                                    >
                                    </image>
                                </g>
                            </g>
                        </g>


                        <g class="st1 svg-menu__path__seleccion" style={{ clipPath: 'url(#SVGID_4_)' }}>
                            <defs>
                                <rect id="SVGID_35_" x="3022" y="866.5" width="493.6" height="256.8" />
                            </defs>
                            <clipPath id="SVGID_36_">
                                <use xlinkHref="#SVGID_35_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g class="st8" style={{ clipPath: 'url(#SVGID_36_)' }}>
                                <defs>
                                    <rect id="SVGID_37_" x="3022" y="866.5" width="493.6" height="256.8" />
                                </defs>
                                <clipPath id="SVGID_38_">
                                    <use xlinkHref="#SVGID_37_" style={{ overflow: 'visible' }} />
                                </clipPath>
                                <g style={{ clippath: 'url(#SVGID_38_)' }}>

                                    <image style={{ overflow: 'visible',cursor:'pointer' }} width="496" height="258" xlinkHref={LandmarkRabatMarket} transform="matrix(0.9952 0 0 0.9952 3021.999 866.4561)"
                                        onMouseOver={() =>
                                            setOver({ name: 'Landmark Rabat Marketm', display: true, discription: "Landmark Rabat Market description", image: LandmarkRabatMarket })
                                        }
                                        onMouseOut={()=>{
                                          setOver({ display: false })
                                        }}
                                    >
                                    </image>
                                </g>
                            </g>
                        </g>


                        <g class="st1 svg-menu__path__seleccion" style={{ clipPath: 'url(#SVGID_4_)' }}>
                            <defs>
                                <rect id="SVGID_39_" x="2260.7" y="1832" width="211.4" height="305.8" />
                            </defs>
                            <clipPath id="SVGID_40_">
                                <use xlinkHref="#SVGID_39_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g class="st9" style={{ clipPath: 'url(#SVGID_40_)' }}>
                                <defs>
                                    <rect id="SVGID_41_" x="2260.7" y="1832" width="211.4" height="305.8" />
                                </defs>
                                <clipPath id="SVGID_42_">
                                    <use xlinkHref="#SVGID_41_" style={{ overflow: 'visible' }} />
                                </clipPath>
                                <g transform="matrix(1 0 0 1 0 0)" style={{ clippath: 'url(#SVGID_42_)' }}>

                                    <image style={{ overflow: 'visible',cursor:'pointer' }} width="215" height="311" xlinkHref={LandmarkFoundingWheel}
                                        onMouseOver={() =>
                                            setOver({ name: 'Landmark Founding Wheel', display: true, discription: "Landmark Founding Wheel description", image: LandmarkFoundingWheel })
                                        }
                                        onMouseOut={()=>{
                                          setOver({ display: false })
                                        }}
                                        transform="matrix(0.9833 0 0 0.9833 2260.6636 1832)">
                                    </image>
                                </g>
                            </g>
                        </g>


                        <g class="st1 svg-menu__path__seleccion" style={{ clipPath: 'url(#SVGID_4_)' }}>
                            <defs>
                                <rect id="SVGID_43_" x="2090.8" y="1152.1" width="411.3" height="421.2" />
                            </defs>
                            <clipPath id="SVGID_44_">
                                <use xlinkHref="#SVGID_43_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g class="st10" style={{ clipPath: 'url(#SVGID_44_)' }}>
                                <defs>
                                    <rect id="SVGID_45_" x="2090.8" y="1152.1" width="411.3" height="421.2" />
                                </defs>
                                <clipPath id="SVGID_46_">
                                    <use xlinkHref="#SVGID_45_" style={{ overflow: 'visible' }} />
                                </clipPath>
                                <g transform="matrix(1 0 0 1 0 0)" style={{ clippath: 'url(#SVGID_46_)' }}>

                                    <image style={{ overflow: 'visible',cursor:'pointer' }} width="416" height="426" xlinkHref={LandmarkStPaulBasilica}
                                        transform="matrix(0.9887 0 0 0.9887 2090.7534 1152.1025)"
                                        onMouseOver={() =>
                                            setOver({ name: 'Landmark StPaul Basilica', display: true, discription: "Landmark StPaul Basilica description", image: LandmarkStPaulBasilica })
                                        }
                                        onMouseOut={()=>{
                                          setOver({ display: false })
                                        }}
                                    >
                                    </image>
                                </g>
                            </g>
                        </g>
                        <g class="st1 svg-menu__path__seleccion" style={{ clipPath: 'url(#SVGID_4_)' }}>
                            <defs>
                                <rect id="SVGID_47_" x="2585.1" y="716.5" width="458.8" height="383.9" />
                            </defs>
                            <clipPath id="SVGID_48_">
                                <use xlinkHref="#SVGID_47_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g class="st11" style={{ clippath: 'url(#SVGID_48_)' }}>
                                <image style={{ overflow: 'visible',cursor:'pointer' }} width="447" height="374" xlinkHref={LandmarkParrucan}
                                    transform="matrix(1.0264 0 0 1.0264 2585.0649 716.4824)"
                                    onMouseOver={() =>
                                        setOver({ name: 'Landmark Parrucan', display: true, discription: "Landmark Parrucans description", image: LandmarkParrucan })
                                    }
                                    onMouseOut={()=>{
                                      setOver({ display: false })
                                    }}
                                >
                                </image>
                            </g>

                        </g>
                        <g class="st1 svg-menu__path__seleccion" style={{ clipPath: 'url(#SVGID_4_)' }}>
                            <defs>
                                <rect id="SVGID_51_" x="1766.7" y="915" width="297.5" height="277.9" />
                            </defs>
                            <clipPath id="SVGID_52_">
                                <use xlinkHref="#SVGID_51_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g style={{ clippath: 'url(#SVGID_52_)' }}>
                                <image style={{ overflow: 'visible',cursor:'pointer' }} width="289" height="270" xlinkHref={LandmarkCatacombs}
                                    transform="matrix(1.0294 0 0 1.0294 1766.7456 915.0498)"
                                    onMouseOver={() =>
                                        setOver({ name: 'Landmark Catacombs', display: true, discription: "Landmark Catacombs description", image: LandmarkCatacombs })
                                    }
                                    onMouseOut={()=>{
                                      setOver({ display: false })
                                    }}
                                >
                                </image>

                            </g>
                        </g>
                        <g class="st1 svg-menu__path__seleccion" style={{ clipPath: 'url(#SVGID_4_)' }}>
                            <defs>
                                <rect id="SVGID_53_" x="364.3" y="2603.6" width="1466.2" height="546.4" />
                            </defs>
                            <clipPath id="SVGID_54_">
                                <use xlinkHref="#SVGID_53_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g style={{ clippath: 'url(#SVGID_54_)' }}>
                                <label>test</label>
                                <image style={{ overflow: 'visible',cursor:'pointer' }} width="1433" height="534" xlinkHref={LandmarkVerdala} transform="matrix(1.0232 0 0 1.0232 364.2627 2603.626)"
                                    onMouseOver={() =>
                                        setOver({ name: 'Landmark Verdalas', display: true, discription: "Landmark Verdala description", image: LandmarkVerdala })
                                    }
                                    onMouseOut={()=>{
                                      setOver({ display: false })
                                    }}
                                >
                                </image>
                            </g>

                        </g>

                        {/* <g class="st1" style={{ clipPath: 'url(#SVGID_4_)'}}>
                            <defs>
                            <rect id="SVGID_47_" x="2585.1" y="716.5" width="458.8" height="383.9"/>
                            </defs>
                            <clipPath id="SVGID_48_">
                              <use xlinkHref="#SVGID_47_"  style={{overflow:'visible'}}/>
                            </clipPath>
                            <g class="st11" style={{ clipPath: 'url(#SVGID_48_)'}}>
                            <defs>
                              <rect id="SVGID_49_" x="2585.1" y="716.5" width="458.8" height="383.9"/>
                            </defs>
                            <clipPath id="SVGID_50_">
                              <use xlinkHref="#SVGID_49_" style={{overflow:'visible'}}/>
                            </clipPath>
                            </g>
                            <g style={{clippath:'url(#SVGID_50_)'}}>
                              
                                <image style={{overflow:'visible'}} width="447" height="374"  xlinkHref={LandmarkCatacombs}  
                                transform="matrix(1.0232 0 0 1.0232 364.2627 2603.626)">
                              </image>
                            </g>
                          </g> */}
                    </g>
                </g>

                <g>
                    <g>
                      <defs>
                        <rect id="SVGID_55_" x="-7212" y="3653" width="5108" height="3633" />
                      </defs>
                      <clipPath id="SVGID_56_">
                        <use xlinkHref="#SVGID_55_" style={{ overflow: 'visible' }} />
                      </clipPath>
                      <g class="st12" style={{ clipPath: 'url(#SVGID_56_)' }}>
                        <defs>
                          <rect id="SVGID_57_" x="-7212" y="3653" width="5108" height="3633" />
                        </defs>
                        <clipPath id="SVGID_58_">
                          <use xlinkHref="#SVGID_57_" style={{ overflow: 'visible' }} />
                        </clipPath>
                        <g class="st13" style={{ clipPath: 'url(#SVGID_58_)' }}>
                          <defs>
                            <rect id="SVGID_59_" x="-7212" y="3653" width="5108" height="3633" />
                          </defs>
                          <clipPath id="SVGID_60_">
                            <use xlinkHref="#SVGID_59_" style={{ overflow: 'visible' }} />
                          </clipPath>
                          <g style={{ clippath: 'url(#SVGID_60_)' }}>

                            <image style={{ overflow: 'visible',cursor:'pointer' }} width="5108" height="3633" xlinkHref={LandmarkFoundingWheel} transform="matrix(1 0 0 1 -7212 3653)">
                            </image>
                          </g>
                        </g>
                        <g class="st13" style={{ clipPath: 'url(#SVGID_58_)' }}>
                          <defs>
                            <rect id="SVGID_61_" x="-2716" y="6183" width="227.5" height="373.6" />
                          </defs>
                          <clipPath id="SVGID_62_">
                            <use xlinkHref="#SVGID_61_" style={{ overflow: 'visible' }} />
                          </clipPath>
                          <g class="st14" style={{ clipPath: 'url(#SVGID_62_)' }}>
                            <defs>
                              <rect id="SVGID_63_" x="-2716" y="6183" width="227.5" height="373.6" />
                            </defs>
                            <clipPath id="SVGID_64_">
                              <use xlinkHref="#SVGID_63_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g style={{ clippath: 'url(#SVGID_64_)' }}>

                              <image style={{ overflow: 'visible',cursor:'pointer' }} width="232" height="381" xlinkHref={LandmarkFoundingWheel} transform="matrix(0.9806 0 0 0.9806 -2716 6183.0391)">
                              </image>
                            </g>
                          </g>
                        </g>
                        <g class="st13" style={{ clipPath: 'url(#SVGID_58_)' }}>
                          <defs>
                            <rect id="SVGID_65_" x="-3018.6" y="4908.9" width="533.2" height="487.1" />
                          </defs>
                          <clipPath id="SVGID_66_">
                            <use xlinkHref="#SVGID_65_" style={{ overflow: 'visible' }} />
                          </clipPath>
                          <g class="st15" style={{ clipPath: 'url(#SVGID_66_)' }}>
                            <defs>
                              <rect id="SVGID_67_" x="-3018.6" y="4908.9" width="533.2" height="487.1" />
                            </defs>
                            <clipPath id="SVGID_68_">
                              <use xlinkHref="#SVGID_67_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g style={{ clippath: 'url(#SVGID_68_)' }}>

                              <image style={{ overflow: 'visible',cursor:'pointer' }} width="544" height="497" xlinkHref={LandmarkFoundingWheel} transform="matrix(0.9801 0 0 0.9801 -3018.5767 4908.8691)">
                              </image>
                            </g>
                          </g>
                        </g>
                        <g class="st13" style={{ clipPath: 'url(#SVGID_58_)' }}>
                          <defs>
                            <rect id="SVGID_69_" x="-3092.9" y="6413.2" width="378.9" height="375.8" />
                          </defs>
                          <clipPath id="SVGID_70_">
                            <use xlinkHref="#SVGID_69_" style={{ overflow: 'visible' }} />
                          </clipPath>
                          <g class="st16" style={{ clipPath: 'url(#SVGID_70_)' }}>
                            <defs>
                              <rect id="SVGID_71_" x="-3092.9" y="6413.2" width="378.9" height="375.8" />
                            </defs>
                            <clipPath id="SVGID_72_">
                              <use xlinkHref="#SVGID_71_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g style={{ clippath: 'url(#SVGID_72_)' }}>

                              <image style={{ overflow: 'visible',cursor:'pointer' }} width="369" height="366" xlinkHref={LandmarkFoundingWheel} transform="matrix(1.0267 0 0 1.0267 -3092.9316 6413.2178)">
                              </image>
                            </g>
                          </g>
                        </g>
                        <g class="st13" style={{ clipPath: 'url(#SVGID_58_)' }}>
                          <defs>
                            <rect id="SVGID_73_" x="-3592" y="5226.3" width="627.9" height="351.5" />
                          </defs>
                          <clipPath id="SVGID_74_">
                            <use xlinkHref="#SVGID_73_" style={{ overflow: 'visible' }} />
                          </clipPath>
                          <g class="st17" style={{ clipPath: 'url(#SVGID_74_)' }}>
                            <defs>
                              <rect id="SVGID_75_" x="-3592" y="5226.3" width="627.9" height="351.5" />
                            </defs>
                            <clipPath id="SVGID_76_">
                              <use xlinkHref="#SVGID_75_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g style={{ clippath: 'url(#SVGID_76_)' }}>

                              <image style={{ overflow: 'visible',cursor:'pointer' }} width="636" height="356" xlinkHref={LandmarkFoundingWheel} transform="matrix(0.9873 0 0 0.9873 -3592 5226.3018)">
                              </image>
                            </g>
                          </g>
                        </g>
                        <g class="st13" style={{ clipPath: 'url(#SVGID_58_)' }}>
                          <defs>
                            <rect id="SVGID_77_" x="-3445.5" y="6369.8" width="228.5" height="346.7" />
                          </defs>
                          <clipPath id="SVGID_78_">
                            <use xlinkHref="#SVGID_77_" style={{ overflow: 'visible' }} />
                          </clipPath>
                          <g transform="matrix(1 0 0 1 0 0)" style={{ clippath: 'url(#SVGID_78_)' }}>

                            <image style={{ overflow: 'visible',cursor:'pointer' }} width="236" height="358" xlinkHref={LandmarkFoundingWheel} transform="matrix(0.9683 0 0 0.9683 -3445.5195 6369.8438)">
                            </image>
                          </g>
                        </g>
                        <g class="st13" style={{ clipPath: 'url(#SVGID_58_)' }}>
                          <defs>
                            <rect id="SVGID_79_" x="-3817.6" y="5242.6" width="194.2" height="334.8" />
                          </defs>
                          <clipPath id="SVGID_80_">
                            <use xlinkHref="#SVGID_79_" style={{ overflow: 'visible' }} />
                          </clipPath>
                          <g class="st18" style={{ clipPath: 'url(#SVGID_80_)' }}>
                            <defs>
                              <rect id="SVGID_81_" x="-3817.6" y="5242.6" width="194.2" height="334.8" />
                            </defs>
                            <clipPath id="SVGID_82_">
                              <use xlinkHref="#SVGID_81_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g style={{ clippath: 'url(#SVGID_82_)' }}>

                              <image style={{ overflow: 'visible',cursor:'pointer' }} width="185" height="319" xlinkHref={LandmarkFoundingWheel} transform="matrix(1.0495 0 0 1.0495 -3817.5811 5242.6006)">
                              </image>
                            </g>
                          </g>
                        </g>
                        <g class="st13" style={{ clipPath: 'url(#SVGID_58_)' }}>
                          <defs>
                            <rect id="SVGID_83_" x="-4507.3" y="5168.5" width="225.3" height="347.5" />
                          </defs>
                          <clipPath id="SVGID_84_">
                            <use xlinkHref="#SVGID_83_" style={{ overflow: 'visible' }} />
                          </clipPath>
                          <g style={{ clippath: 'url(#SVGID_84_)' }}>

                            <image style={{ overflow: 'visible',cursor:'pointer' }} width="225" height="347" xlinkHref={LandmarkFoundingWheel} transform="matrix(1.0013 0 0 1.0013 -4507.3018 5168.5352)">
                            </image>
                          </g>
                        </g>
                        <g class="st13" style={{ clipPath: 'url(#SVGID_58_)' }}>
                          <defs>
                            <rect id="SVGID_85_" x="-4296.6" y="4788.3" width="275.1" height="367.4" />
                          </defs>
                          <clipPath id="SVGID_86_">
                            <use xlinkHref="#SVGID_85_" style={{ overflow: 'visible' }} />
                          </clipPath>
                          <g class="st19" style={{ clipPath: 'url(#SVGID_86_)' }}>
                            <defs>
                              <rect id="SVGID_87_" x="-4296.6" y="4788.3" width="275.1" height="367.4" />
                            </defs>
                            <clipPath id="SVGID_88_">
                              <use id="#SVGID_87_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g style={{ clippath: 'url(#SVGID_88_)' }}>

                              <image style={{ overflow: 'visible',cursor:'pointer' }} width="271" height="362" xlinkHref={LandmarkFoundingWheel} transform="matrix(1.015 0 0 1.015 -4296.5894 4788.2891)">
                              </image>
                            </g>
                          </g>
                        </g>
                        <g class="st13" style={{ clipPath: 'url(#SVGID_58_)' }}>
                          <defs>
                            <rect id="SVGID_89_" x="-4190" y="4519.5" width="493.6" height="256.8" />
                          </defs>
                          <clipPath id="SVGID_90_">
                            <use id="#SVGID_89_" style={{ overflow: 'visible' }} />
                          </clipPath>
                          <g class="st20" style={{ clipPath: 'url(#SVGID_90_)' }}>
                            <defs>
                              <rect id="SVGID_91_" x="-4190" y="4519.5" width="493.6" height="256.8" />
                            </defs>
                            <clipPath id="SVGID_92_">
                              <use id="#SVGID_91_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g style={{ clippath: 'url(#SVGID_92_)' }}>

                              <image style={{ overflow: 'visible',cursor:'pointer' }} width="496" height="258" xlinkHref={LandmarkFoundingWheel} transform="matrix(0.9952 0 0 0.9952 -4190.001 4519.4561)">
                              </image>
                            </g>
                          </g>
                        </g>
                        <g class="st13" style={{ clipPath: 'url(#SVGID_58_)' }}>
                          <defs>
                            <rect id="SVGID_93_" x="-4951.3" y="5485" width="211.4" height="305.8" />
                          </defs>
                          <clipPath id="SVGID_94_">
                            <use id="#SVGID_93_" style={{ overflow: 'visible' }} />
                          </clipPath>
                          <g class="st21" style={{ clipPath: 'url(#SVGID_94_)' }}>
                            <defs>
                              <rect id="SVGID_95_" x="-4951.3" y="5485" width="211.4" height="305.8" />
                            </defs>
                            <clipPath id="SVGID_96_">
                              <use id="#SVGID_95_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g transform="matrix(1 0 0 1 0 0)" style={{ clippath: 'url(#SVGID_96_)' }}>

                              <image style={{ overflow: 'visible',cursor:'pointer' }} width="215" height="311" xlinkHref={LandmarkFoundingWheel} transform="matrix(0.9833 0 0 0.9833 -4951.3364 5485)">
                              </image>
                            </g>
                          </g>
                        </g>
                        <g class="st13" style={{ clipPath: 'url(#SVGID_58_)' }}>
                          <defs>
                            <rect id="SVGID_97_" x="-5121.2" y="4805.1" width="411.3" height="421.2" />
                          </defs>
                          <clipPath id="SVGID_98_">
                            <use id="#SVGID_97_" style={{ overflow: 'visible' }} />
                          </clipPath>
                          <g class="st22" style={{ clipPath: 'url(#SVGID_98_)' }}>
                            <defs>
                              <rect id="SVGID_99_" x="-5121.2" y="4805.1" width="411.3" height="421.2" />
                            </defs>
                            <clipPath id="SVGID_100_">
                              <use id="#SVGID_99_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g transform="matrix(1 0 0 1 0 0)" style={{ clippath: 'url(#SVGID_100_)' }}>

                              <image style={{ overflow: 'visible',cursor:'pointer' }} width="416" height="426" xlinkHref={LandmarkFoundingWheel} transform="matrix(0.9887 0 0 0.9887 -5121.2466 4805.1025)">
                              </image>
                            </g>
                          </g>
                        </g>
                        <g class="st13" style={{ clipPath: 'url(#SVGID_58_)' }}>
                          <defs>
                            <rect id="SVGID_101_" x="-4626.9" y="4369.5" width="458.8" height="383.9" />
                          </defs>
                          <clipPath id="SVGID_102_">
                            <use id="#SVGID_101_" style={{ overflow: 'visible' }} />
                          </clipPath>
                          <g class="st23" style={{ clipPath: 'url(#SVGID_102_)' }}>
                            <defs>
                              <rect id="SVGID_103_" x="-4626.9" y="4369.5" width="458.8" height="383.9" />
                            </defs>
                            <clipPath id="SVGID_104_">
                              <use id="#SVGID_103_" style={{ overflow: 'visible' }} />
                            </clipPath>
                            <g style={{ clippath: '(#SVGID_104_)' }}>

                              <image style={{ overflow: 'visible',cursor:'pointer' }} width="447" height="374" xlinkHref={LandmarkFoundingWheel} transform="matrix(1.0264 0 0 1.0264 -4626.9351 4369.4824)">
                              </image>
                            </g>
                          </g>
                        </g>
                        <g class="st13" style={{ clipPath: 'url(#SVGID_58_)' }}>
                          <defs>
                            <rect id="SVGID_105_" x="-5445.3" y="4568" width="297.5" height="277.9" />
                          </defs>
                          <clipPath id="SVGID_106_">
                            <use id="#SVGID_105_" style={{ overflow: 'visible' }} />
                          </clipPath>
                          <g style={{ clippath: 'url(#SVGID_106_)' }}>

                            <image style={{ overflow: 'visible',cursor:'pointer' }} width="289" height="270" xlinkHref={LandmarkFoundingWheel} transform="matrix(1.0294 0 0 1.0294 -5445.2544 4568.0498)">
                            </image>
                          </g>
                        </g>
                        <g class="st13" style={{ clipPath: "url(#SVGID_58_)" }}>
                          <defs>
                            <rect id="SVGID_107_" x="-6847.7" y="6256.6" width="1466.2" height="546.4" />
                          </defs>
                          <clipPath id="SVGID_108_">
                            <use id="#SVGID_107_" style={{ overflow: 'visible' }} />
                          </clipPath>
                          <g style={{ clippath: 'url(#SVGID_108_)' }}>

                            <image style={{ overflow: 'visible',cursor:'pointer' }} width="1433" height="534" xlinkHref={LandmarkFoundingWheel} transform="matrix(1.0232 0 0 1.0232 -6847.7373 6256.626)"

                            >
                            </image>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>

            </svg>
        </div>
    )
}

export default Mapping
