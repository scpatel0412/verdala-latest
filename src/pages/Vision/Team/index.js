import React, { useContext, useState, useEffect } from 'react'
import { ResizeContext } from '../../../components/resize'
import SmallScreenTeam from './smallScreenTeam'
import * as Pagegeneric from "../../../components/sections/page/page.module.scss";

const Team = (props) => {
    const onClickTeam = (item) => {
        setCurrentTeamName(item)
    }
    const { width } = useContext(ResizeContext)
    const mobileScreen = width <= 699
    let headerheight1 = 0;
    if (typeof document !== "undefined") {
        headerheight1 = document.querySelector("header");
    }

    const [visionPage, setVisionPage] = useState({});
    const [currentTeamName, setCurrentTeamName] = useState(0);

    useEffect(() => {
        if (typeof props !== "undefined") {
            setVisionPage(props?.data?.the_team);
        }
    }, [props]);
   
    useEffect(() => {
        if (typeof document !== "undefined") {
            let mainNavLinks = document.querySelectorAll(".sticky-inner ul li a");
            // let mainSections = document.querySelectorAll(".scroll-container >  div");
            // let headerheight1 = document.querySelector("header");
            // let lastId;
            // let cur = [];

            if (typeof window !== "undefined") {
                window.addEventListener("scroll", (event) => {
                    let fromTop = window.pageYOffset;
                    mainNavLinks.forEach((link) => {
                        let section = document.querySelector(link.hash);
                        let headerheight = 0;
                        if (typeof document !== "undefined") {
                            headerheight = document.querySelector("header");
                        }
                        if (
                            section?.offsetTop !== null &&
                            headerheight.offsetHeight !== null &&
                            section?.offsetHeight !== null
                        ) {
                            if (
                                section?.offsetTop - headerheight?.offsetHeight <= fromTop &&
                                section?.offsetTop -
                                headerheight.offsetHeight +
                                section?.offsetHeight >
                                fromTop
                            ) {
                                link.parentElement.classList.add("active");
                            } else {
                                link.parentElement.classList.remove("active");
                            }
                        }
                    });
                });
            }
        }
    }, [props]);
    return (
        <>
            {(visionPage != undefined) ? (         
                <>
                    <section className={` vision-tab-inspried-sec page-generic ${Pagegeneric.secgeneric}`}>
                        <div className="team-section team-section-vison" id="theteam">
                            <div className="count-col">
                                <span className="count-number">03</span>
                                <p className="count-title">{visionPage?.sub_title}</p>
                            </div>
                            <div className="team-content">
                                <h2>{visionPage?.title}</h2>
                                <p>{visionPage?.description}</p>
                            </div>
                        </div>
                        {mobileScreen ?
                            (
                                <>
                                    <SmallScreenTeam data={visionPage?.team_data} />
                                </>
                            )
                            : <>

                                    <div className="crow">
                                        <div
                                            className="col-3 col-lg-4 sticky-menu sticky-mobile"
                                            style={{ top: headerheight1 ? headerheight1.offsetHeight : "" }}
                                        >
                                            <div
                                                className="sticky-menu"
                                                style={{ top: headerheight1 ? headerheight1.offsetHeight : "" }}
                                            >
                                                <div className="sticky-inner">
                                                    <div className="team-tab-title">
                                                        <ul>
                                                            {visionPage?.team_data?.map(
                                                                (item, index2) => {
                                                                    return (
                                                                        <div key={index2}>
                                                                            <li
                                                                                className={`anim-scroll-up ${currentTeamName === index2 && "active"}`}
                                                                            >
                                                                                <a
                                                                                    className={`#team-${index2}`}
                                                                                    data-splitting
                                                                                    onClick={() => onClickTeam(index2)}
                                                                                    href={`#team-${index2}`}
                                                                                >
                                                                                    {item.team_name}
                                                                                </a>
                                                                            </li>
                                                                        </div>
                                                                    );
                                                                }
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-9 col-lg-8">
                                            <div className="scroll-container">
                                                {visionPage?.team_data?.map(
                                                    (i, index2) => {
                                                        return (
                                                            <div id={`team-${index2}`} key={index2}>
                                                                <div className="team-tab-image vison-team-tab">
                                                                    {i?.team_members?.map((items,index) => {
                                                                        return (
                                                                            <>
                                                                                <div key={index} className='vison-team-tab-image'><img src={items?.url} /></div>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>
                            </>}
                    </section>
                </>
            ) : null}
        </>

    )
}

export default Team
