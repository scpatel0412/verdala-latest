import React, { useState, useEffect, useRef, useLayoutEffect } from "react"
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Container from "../../layouts/container";
import SectionTitle from "../../partials/section-title";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as pageintro from "./page.module.scss";

// gsap.registerPlugin(ScrollTrigger);

const PageIntro = (props) => {

    const ref           = useRef(null);
    const thirdCircle   = useRef();
    const [homePage, setHomePage] = useState({});

    // const lenis = useLenis(({scroll}) => {
    //     // called every scroll

    //     console.log
    // })

    useEffect(() => {
        if (typeof props.data !== "undefined") {
            setHomePage(props.data.about);
            
            // const element = ref.current;
            

        }
        
        // gsap.to("#thirdCircle", {
        //     x: 100,
        //     duration: 2,
        //     ease: "bounce",
        //     // delay: 1,
        //     scrollTrigger: {
        //       trigger: "#thirdCircle",
        //       start: "10% bottom",
        //       markers: true
        //     }
        // });
        
    }, [props]);

    // useLayoutEffect(() => {
    //     if ( homePage !== undefined ) {
            
    //         // if ( thirdCircle ) {
                
    //             setTimeout(() => {
    //                 const element = ref.current;
    //                 // console.log(element.querySelector("#thirdCircle"));

    //                 gsap.set(
    //                     '.anim-scroll-up',
    //                     {
    //                         opacity: 0,
    //                         y: 50,
    //                     }
    //                 );
                        
    //                 let imageSections = gsap.utils.toArray('.anim-scroll-image img');

    //                 imageSections.forEach((section) => {
    //                     gsap.to(
    //                         section,
    //                         {
    //                             scale: 1.1,
    //                             scrollTrigger: {
    //                                 trigger: section,
    //                                 start: "top bottom",
    //                                 end: "bottom top",
    //                             //   stagger: 1,
    //                                 scrub: true,
    //                                 // markers: true
    //                             },
    //                         }
    //                     );
    //                 })


    //                 let sections = gsap.utils.toArray('.anim-parallax');

    //                 sections.forEach((section) => {

    //                     gsap.fromTo(
    //                         section,
    //                         {
    //                             y: 30
    //                         },
    //                         {
    //                             y: -30,
    //                             scrollTrigger: {
    //                                 trigger: section,
    //                                 start: "top bottom",
    //                                 end: "bottom center",
    //                                 scrub: true,
    //                                 markers: true
    //                             },
    //                         }
    //                     );
                    
    //                 })

    //                 ScrollTrigger.batch(".anim-scroll-up", {
    //                     //interval: 0.1, // time window (in seconds) for batching to occur. 
    //                     //batchMax: 3,   // maximum batch size (targets)
    //                     onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, duration: 1, ease: "Cubic.easeOut", stagger: 0.5}),
    //                     // onEnter: batch => batch.forEach((card, index) => gsap.to(card.children, {opacity: 1, y: 0, scale: 1, stagger: 0.5, delay: index * 0.3})),
    //                     onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: 50, duration: 1, ease: "Cubic.easeOut", overwrite: true}),
    //                     onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, duration: 1, ease: "Cubic.easeOut", stagger: 0.5, overwrite: true}),
    //                     start: 'top 85%'
    //                     // onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
    //                     // you can also define things like start, end, etc.
    //                 });
    //             }, 2000);

    //             // gsap.set(thirdCircle, {
    //             //     opacity: 0.5,
    //             //     y: -20, 
    //             // })

    //             // gsap.set(element.querySelector("#thirdCircle"), {
    //             //     opacity: 0.5,
    //             //     y: -20,
    //             // })
                
    //         // }
    
    //     }
    //   }, [])

    useEffect(() => {
        // const element = ref.current;
        // // console.log(element.querySelector("#thirdCircle"));

        
    }, []);

    return (
        <>
            {homePage !== undefined ? <>
                <section ref={ref} className={pageintro.secpageintro}>
                    <Container>
                        {/* <section id="firstSection" >
                            <h1 ref={thirdCircle} id="thirdCircle">Text Anim</h1>
                        </section> */}

                        <SectionTitle
                            number="01"
                            text={homePage?.sub_title}
                            title={homePage?.title}
                            ptext={homePage?.description}
                        />
                    </Container>
                </section>
            </>
                : null}
        </>
    )
}

export default PageIntro;