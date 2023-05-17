import React, { Component, useRef } from 'react';

import { withCookies } from 'react-cookie';
import { gsap } from "gsap";
import VerdalaLogo from '../../assets/svgs/Verdala-Loading-Logo.svg'

// import MouseFollow from '../mouseFollowComponent/mouseFollow';

const LoadingScreen = (props, ref) => {
	return(
		<div ref={ref} className={ "backlay " + ((props.active) ? "animate-logo " : "hide") }>
            <div className="loading-container ">
                <div className="loading-wrapper">
                    <div className="loading">
                        <VerdalaLogo />
                    </div>
                </div>
            </div>
        </div>
	);
}

class Loading extends Component {
    constructor(props) {
        super(props);

        const { cookies } = props;

        this.loadingScreen = React.createRef();

        this.state = {
            loadingVisible: cookies.get('loadingVisible') || false,
            active: false,
            loadingScreen: false
        };

    }

    componentDidMount() {
        
        this.setState({
            active: true
        })

        // gsap
        // .timeline()
        // .set(this.transitionCover, { y: directionFrom })
        // .to(this.transitionCover, {
        //     y: "0%",
        //     ease: "power1.easeInOut",
        //     duration: seconds / 2,
        // })
        // .to(this.transitionCover, {
        //     y: directionTo,
        //     ease: "power1.easeOut",
        //     duration: seconds / 3,
        // }, "+=1.5");

    }

    componentWillMount() {

        if ( this.state.loadingVisible ) {
            this.setState({
                loadingScreen: false
            })
            
        } else {
            this.setState({
                loadingScreen: true
            })

            this.props.cookies.set('loadingVisible', true, { path: '/' });
            
        }
    }

    render() {
        // var addClass = (this.state.active) ? "animate-logo " : "";

        // var class = "hide";

        let loading;

        if ( this.state.loadingScreen ) {
            loading = LoadingScreen( this.state, this.loadingScreen );
        } else {
            loading = LoadingScreen( this.state, this.loadingScreen );
            // loading = null;
        }

        return (
            loading 
        );
        
    }
}

export default withCookies(Loading);