import React, { Component }     from 'react';


class MaskInfo extends Component {

    render() {    
        const position = {
            top: this.props.position.top,
            left: this.props.position.left
        }

        let propData = this.props.propInfo.node.propertiesData;

        let netArea         = (propData.internalArea) ? parseFloat(propData.internalArea) : 0;
        // var gfa             = (property.acf.gfa_sqm) ? parseFloat(property.acf.gfa_sqm) : 0;
        // let externalArea     = (propData.externalArea) ? parseFloat(propData.externalArea) : 0;

        // var netArea         = (this.props.propInfo.acf.net_area) ? parseFloat(this.props.propInfo.acf.net_area) : 0;
        // var gfa             = (this.props.propInfo.acf.gfa_sqm) ? parseFloat(this.props.propInfo.acf.gfa_sqm) : 0;
        // var external_ne     = (this.props.propInfo.acf.external_ne) ? parseFloat(this.props.propInfo.acf.external_ne) : 0;
        // var external_e      = (this.props.propInfo.acf.external_e) ? parseFloat(this.props.propInfo.acf.external_e) : 0;
        // var external_se     = (this.props.propInfo.acf.external_se) ? parseFloat(this.props.propInfo.acf.external_se) : 0;
        // var external_sw     = (this.props.propInfo.acf.external_sw) ? parseFloat(this.props.propInfo.acf.external_sw) : 0;

        // var fArea           = gfa + external_ne + external_e + external_se + external_sw;

        return (
            <div style={position} className={"mask-info " + ((propData.saleStatus === "sold") ? "sold-info " : "") + ((this.props.show) ? "show " : "hide ")}>
                <div className="inner-info">
                        <div className="property-no">
                            <span>{this.props.propInfo.node.title}</span>
                        </div>
                    {((propData.saleStatus === "sold") ? 
                        <div className="inner-text">
                            <span>Sold</span>
                        </div>
                    : 
                        <div className="inner-text">
                            {(netArea) ?
                                <span>{parseInt(netArea)}m<sup>2</sup></span>
                                :
                                <span>-</span>
                            }

                            {(propData.bedrooms) ? 
                                <span>{propData.bedrooms} {(propData.bedrooms > 1) ? "Bedrooms" : "Bedroom" }</span>
                                :
                                <span>-</span>
                            }

                            {(propData.saleStatus === "on-hold") ? 
                                <span>On Hold</span>
                                :
                                ""
                            }
                        </div>
                    )}
                </div>
            </div>   
        );
    }
}

export default MaskInfo;