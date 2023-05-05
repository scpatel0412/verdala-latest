import React, { Component } from 'react';
import MaskInfo             from './maskInfo';
// import Header 			    from '../header/header';
// // import DataApi              from '../../utils/data-api';
// import BuildingSelector     from '../building/buildingSelect';
// import WpSeo                from '../../utils/wp-seo';

// import BuildingMask         from '../../assets/images/masks/buildingSelect.svg';
// import BuildingPlan         from '../../assets/images/building/buildingPlan/building-plan.jpg';

class Building3DController extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images:     [],
            windows:    [],
            index:      0,
            loaded:     false
        };
    }
    
    componentDidMount() {
        this.setState({
            windows:    this.props.windows,
            index:      this.props.index,
            loaded:     true
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.windows !== this.props.windows || prevProps.index !== this.props.index) {
            this.setState({
                windows:    this.props.windows,
                index:      this.props.index,
            })
		}
	}

    render() {
        if ( this.state.loaded ) {
            return (
                <div className="inner-seq-cont">
                    {/* INFO TABS */}
                    {(this.state.windows) && this.state.windows.map( (window, key) => {        
                        return (
                            <MaskInfo
                                key      = {key}
                                propInfo = {window.selectedProp}
                                position = {window.infoPos}
                                show     = {window.infoShow}
                            />
                        )
                    })}

                    <div className="seq-images">
                        {this.props.images.map( (image, index) => {
                            return (
                                <img src={image.default} key={index} className={"building-seq " + ((this.state.index === index) ? "active-seq" : "")} alt="building sequence"/>
                            )
                        })}
                    </div>

                    <div className="masks-container">
                        {this.props.children}
                    </div>

                    
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Building3DController;