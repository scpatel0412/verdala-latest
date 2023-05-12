import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

// import { TweenLite, Power4 } from "gsap";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const BisAnimate = ({ children, location }) => {

    const component = useRef();
    const myRef = useRef({
        location: null,
    })

    function setAnimProps() {
        // a gsap.context() lets us use scoped selector text and makes cleanup way easier. See https://greensock.com/docs/v3/GSAP/gsap.context()
        let ctx = gsap.context(() => {

            setTimeout(() => {
                // const element = ref.current;
                // console.log(element.querySelector("#thirdCircle"));

                let lineSections = gsap.utils.toArray('.anim-text-enter');
        
                lineSections.forEach((section) => {
                    let splitLine = SplitText.create(section, {type:"lines"});

                    gsap.from(splitLine.lines, { // <- selector text, scoped to this component!
                        scaleY: 0.5,
                        opacity: 0,
                        y: 20,
                        ease: "Expo.easeOut",
                        duration: 2,
                        // delay: 1,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            // end: "bottom top",
                        //   stagger: 1,
                            scrub: true,
                            // markers: true
                        },
                    });
                })


                // gsap.from(splitLine.lines, { // <- selector text, scoped to this component!
                //     scaleY: 0.5,
                //     opacity: 0,
                //     y: 20,
                //     ease: "Expo.easeOut",
                //     duration: 2,
                //     // delay: 1,
                //     stagger: 0.1,
                //     scrollTrigger: {
                //         trigger: splitLine.lines,
                //         start: "top 85%",
                //         // end: "bottom top",
                //     //   stagger: 1,
                //         scrub: true,
                //         // markers: true
                //     },
                // });

                let split = SplitText.create(".anim-banner .title-cont h1", {type:"chars"});
            
                gsap.from(split.chars, { // <- selector text, scoped to this component!
                    opacity: 0,
                    y: 200,
                    ease: "Expo.easeOut",
                    duration: 2,
                    delay: 1,
                    stagger: 0.02
                });
        
                gsap.set(
                    '.anim-scroll-up',
                    {
                        opacity: 0,
                        y: 50,
                    }
                );

                gsap.set(
                    '.anim-banner .title-cont',
                    {
                        opacity: 1,
                    }
                );
    
                gsap.fromTo(
                    ".anim-banner .title-cont",
                    {
                        y: 0
                    },
                    {
                        y: -100,
                        ease: "Cubic.easeOut",
                        scrollTrigger: {
                            trigger: ".anim-banner .title-cont",
                            // start: "top 80%",
                            // end: "bottom top",
                        //   stagger: 1,
                            scrub: true,
                            // markers: true
                        },
                    }
                );                
                
                return () => split.revert(); // context cleanup
            }, 2000);

            

            setTimeout(() => {
                let imageSections = gsap.utils.toArray('.anim-scroll-image img');
        
                imageSections.forEach((section) => { 
                    gsap.to(
                        section,
                        {
                            scale: 1.1,
                            scrollTrigger: {
                                trigger: section,
                                start: "top bottom",
                                end: "bottom top",
                            //   stagger: 1,
                                scrub: true,
                                // markers: true
                            },
                        }
                    );
                })
    
                gsap.fromTo(
                    ".anim-banner .bg-img",
                    {
                        scale: 1
                    },
                    {
                        scale: 1.05,
                        ease: "Cubic.easeOut",
                        scrollTrigger: {
                            trigger: ".anim-banner .bg-img",
                            start: "top top",
                            end: "bottom top",
                        //   stagger: 1,
                            scrub: true,
                            // markers: true
                        },
                    }
                );
                
                let imageSlide = gsap.utils.toArray('.anim-image-enter-slide');
        
                imageSlide.forEach((section) => { 
                    gsap.from(
                        section,
                        {
                            width: "50%",
                            scrollTrigger: {
                                trigger: section,
                                start: "top bottom",
                                end: "bottom top",
                            //   stagger: 1,
                                scrub: true,
                                // markers: true
                            },
                        }
                    );
                })
    
                gsap.fromTo(
                    ".anim-banner .bg-img",
                    {
                        scale: 1
                    },
                    {
                        scale: 1.05,
                        ease: "Cubic.easeOut",
                        scrollTrigger: {
                            trigger: ".anim-banner .bg-img",
                            start: "top top",
                            end: "bottom top",
                        //   stagger: 1,
                            scrub: true,
                            // markers: true
                        },
                    }
                );

                // anim-parallax-low

                let sections = gsap.utils.toArray('.anim-parallax');
        
                sections.forEach((section) => {

                    // console.log(section);
                    // console.log(section.getAttribute('data-parallax'));

                    let speed = (section.hasAttribute("data-parallax")) ? section.getAttribute('data-parallax') : 50

                    gsap.fromTo(
                        section,
                        {
                            y: -speed
                        },
                        {
                            y: speed,
                            overwrite: true,
                            scrollTrigger: {
                                trigger: section,
                                // start: "top bottom",
                                // end: "bottom center",
                                scrub: true,
                                // markers: true
                            },
                        }
                    );
                
                })
        
                ScrollTrigger.batch(".anim-scroll-up", {
                    //interval: 0.1, // time window (in seconds) for batching to occur. 
                    //batchMax: 3,   // maximum batch size (targets)
                    onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, duration: 1, ease: "Cubic.easeOut", stagger: 0.5}),
                    // onEnter: batch => batch.forEach((card, index) => gsap.to(card.children, {opacity: 1, y: 0, scale: 1, stagger: 0.5, delay: index * 0.3})),
                    onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: 50, duration: 1, ease: "Cubic.easeOut", overwrite: true}),
                    onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, duration: 1, ease: "Cubic.easeOut", stagger: 0.5, overwrite: true}),
                    start: 'top 85%'
                    // onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
                    // you can also define things like start, end, etc.
                });
            }, 3000)

            
        }, component); // <- scopes all selector text inside the context to this component (optional, default is document)

        
            
        return () => ctx.revert(); // useLayoutEffect cleanup
    }

    useEffect(() => {
        setAnimProps();
    })

    useLayoutEffect(() => {
        // set the location on initial load
        if (!myRef.current.location) myRef.current.location = location
        // then make sure dialog is closed on route change
        else if (myRef.current.location !== location) {
            setAnimProps();

            myRef.current.location = location
        }
    })

    

    return (
        <>
            <div className="anim-wrapper" ref={component}>
                {children}
            </div>
        </>
    )
};

export default BisAnimate;