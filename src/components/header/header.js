import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { gsap } from 'gsap';
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import TransitionLink, { TransitionPortal } from 'gatsby-plugin-transition-link'
import Searchicn from '../../assets/svgs/search.svg'
import * as headerStyles from "./header.module.scss"
import VerdalaLogo from '../../assets/svgs/verdala-logo.svg'
import Container from "../layouts/container"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.toggleClass = this.toggleClass.bind(this)
        this.verticalAnimation = this.verticalAnimation.bind(this)

        this.layoutContents = React.createRef()
        this.transitionCover = React.createRef()
    }
    toggleClass() {
        console.log("first")
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };
    verticalAnimation = ({ length }, direction) => {
        const directionTo = direction === 'up' ? '-100%' : '100%'
        const directionFrom = direction === 'up' ? '100%' : '-100%'
    
        // convert ms to s for gsap
        const seconds = length
    
        return gsap.timeline()
          .set(this.transitionCover, { y: directionFrom })
          .to(this.transitionCover, {
            y: '0%',
            ease: "power1.easeInOut",
            duration: seconds / 2,
          })
          .to(this.transitionCover, {
            y: directionTo,
            ease: "power1.easeIn",
            duration: seconds / 2,
        })
    }

    test2(entry, node) {
        // var elemsImg    = node.querySelectorAll('.vc_single_image-img, .wpb_wrapper');

        // var tlImg = gsap.timeline();       

        // tlImg.from(elemsImg, {
        //     opacity: 0, 
        //     y: '-=50',
        //     duration: 2,
        //     stagger: 0.1,
        // })

        // return tlImg;
    }

    test(entry, node) {
        // var elems       = node.querySelectorAll('h1,h2,h3, p, a, pre');
        // var elemsImg    = node.querySelectorAll('.vc_single_image-img, .wpb_wrapper');

        var tl = gsap.timeline();

        tl.from('h1,h2,h3, p, a, pre', { 
            opacity: 0, 
            y: '-=50',
            stagger: 0.1,
            duration: 0.5,
        }).from('.vc_single_image-img img', {
            opacity: 0, 
            // x: '-=50',
            stagger: 0.1,
        }).to('h1,h2,h3, p, a, pre', {
            opacity: 1,
            y: '0',
        }, 5).to('img', {
            opacity: 1,
            // x: '0',
            duration: 2,
        }, 5)

        return tl;
    }

    message(message) {
        console.log(message)
    }

    componentDidMount() {
        // console.log(this.props.data);

        console.log(this.transitionCover);
    }

    render() {

        const data = StaticQuery(graphql`
            query {
                site {
                    siteMetadata {
                        title
                        menuLinks {
                            name
                            link
                        }
                    }
                }
            }
        `)

        // console.log(data);

        return (
            <>
            
            <Container>
                <div className="header_inner">
                <a href="/">
                    <VerdalaLogo />
                </a>

    
                <nav ref={n => (this.layoutContents = n)} className={this.state.active ? 'active': null} >
                    <ul>
                        <span className="closebtn" onClick={this.toggleClass} >X</span>
                        <StaticQuery
                            query = {graphql`
                                query {
                                    site {
                                        siteMetadata {
                                            title
                                            menuLinks {
                                                name
                                                link
                                            }
                                        }
                                    }
                                }
                            `}

                            render = {data => {
                                return (
                                    <>
                                        {data.site.siteMetadata.menuLinks.slice(1).map((item, key) => {
                                            return (
                                                <li key={key} 
                                                style={{textDecoration : window.location.pathname == `${item.link}/` ? 'underline' : ''}}
                                                >                            
                                                    {/* <AniLink paintDrip to={item.link}
                                                    >
                                                        {item.name}
                                                    </AniLink> */}
                                                    <TransitionLink to={item.link}
                                                        exit={{
                                                            length: 1,
                                                            trigger: ({ exit }) => this.verticalAnimation(exit, 'up'),
                                                            state: { test: 'exit state' },
                                                        }}
                    
                                                        entry={{
                                                            delay: 0.5,
                                                            trigger: ({ entry, node }) => {this.test(entry, node)},
                                                        }}
                                                    >
                                                        {item.name}
                                                    </TransitionLink>
                                                </li>
                                            )
                                        })}
                                    </>
                                )
                            }}
                        />
                    </ul>
                    </nav>
                    <div className="headerbtns">
                        <div className={`button ${headerStyles.searchbtnwrap}`}>
                            <div className="inner-button search-btn">
                                <Searchicn /> <span className={headerStyles.searchtxt}>Search Apartment</span>
                            </div>
                        </div>
                        <div className={headerStyles.menu_togglebtn}  onClick={this.toggleClass} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </Container>

            <TransitionPortal>
                <div
                    className="test-cover"
                    ref={n => (this.transitionCover = n)}
                    style={{
                        position: 'fixed',
                        background: '#f8f8f1',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        transform: 'translateY(100%)',
                    }}
                />
            </TransitionPortal>
        </>
        )
    }

}

export default Header;
  
// export default function MyHeader(props) {
//     return (
//         <StaticQuery
//             query={graphql`
//                 query {
//                     site {
//                         siteMetadata {
//                             title
//                             menuLinks {
//                                 name
//                                 link
//                             }
//                         }
//                     }
//                 }
//             `}
//             render={data => <Header data={data} {...props} />}
//         />
//     )
// }

// export const pageQuery = graphql`
//     query {
//         site {
//             siteMetadata {
//                 title
//                 menuLinks {
//                     name
//                     link
//                 }
//             }
//         }
//     }
// `