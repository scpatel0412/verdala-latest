import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React, { Component } from 'react';
// import '../../assets/scss/properties/row.scss';
// import Building from '../building/building';

class PropertyRow extends Component {
    
    
    render() {
        if ( this.props.header ) {
            return (
                <div></div>
                // <div className="property-row header-row">
                //     <div onClick={() => Building.sort("floor_number")} className="property-row-item"><span>Floor</span></div>
                //     <div className="property-row-item"><span>Unit</span></div>
                //     <div className="property-row-item"><span>Rooms</span></div>
                //     <div className="property-row-item"><span>Size</span></div>
                //     <div className="property-row-item"><span>Balcony</span></div>
                //     <div className="property-row-item"><span>Price</span></div>
                //     <div className="property-row-item"><span></span></div>
                // </div>
            );
        } else {
            return (
                <div className={"property-row"}>
                    {/* {console.log(this.props.fArea)} */}
                    <div className="property-row-item"><span>{this.props.floorNo}</span></div>
                    <div className="property-row-item"><span>{this.props.propNo}</span></div>
                    <div className="property-row-item"><span>{this.props.bedrooms}</span></div>
                    {(this.props.fArea) ?
                        <div className="property-row-item"><span>{parseInt(this.props.fArea)}m<sup>2</sup></span></div>  
                    :    
                        <div className="property-row-item"><span>-</span></div>  
                    }

                    {(this.props.oArea) ?
                        <div className="property-row-item"><span>{parseInt(this.props.oArea)}m<sup>2</sup></span></div>  
                    :    
                        <div className="property-row-item"><span>-</span></div>  
                    }
                    {/* <div className="property-row-item"><span>{(this.props.sold) ? "Sold" : ("€" + this.props.price)}</span></div> */}
                    <AniLink
                        cover
                        direction="left"
                        duration={1}
                        bg="#7B9E6B"
                        to={this.props.link}
                    >
                        <div className="property-row-item button-row"><div className="inner-button"><span></span></div></div>
                    </AniLink>
                    <div className="property-row-item button-row locate-button"><div className="inner-button"><span></span></div></div>
                </div>
            );
        }
    }
}

export default PropertyRow;
