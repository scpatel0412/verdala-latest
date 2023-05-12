import React, { Component } from 'react';

import { withCookies } from 'react-cookie';
import VerdalaLogo from '../../assets/svgs/verdala-logo.svg'

// import MouseFollow from '../mouseFollowComponent/mouseFollow';

const LoadingScreen = (props) => {
	return(
		<div className={ "backlay " + ((props.active) ? "animate-logo " : "hide") }>
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
            loading = LoadingScreen( this.state );
        } else {
            loading = LoadingScreen( this.state );
            // loading = null;
        }

        return (
            loading 
        );
        
    }
}

export default withCookies(Loading);