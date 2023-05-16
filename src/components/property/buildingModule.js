import React, { Component }     from 'react';
// import { withRouter }           from 'react-router-dom'
// import { Link }                 from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import PropertyRow              from './propertyRow';
import Dropdown             	from 'react-dropdown'
import Filter                   from '../../utils/filter';
import Events                   from '../../utils/eventHandler';
import { Lenis as ReactLenis }  from '@studio-freight/react-lenis';
// import Button                   from '../buttons/buttons';
import Building3DController     from './building3Dcontroller';

import 'react-dropdown/style.css';
import '../../assets/scss/building/filter.scss';
import '../../assets/scss/building/property.scss';
import '../../assets/scss/building/sequence.scss';
import Container from '../layouts/container';

class BuildingModule extends Component {
    constructor (props) {
        super(props);
        this.newSiteY       = 1;
        this.obj            = {siteY:0};
        this.prevInterval   = null;
        this.nextInterval   = null;
        
        this.buildingData = [
            {
                name: 'grand',
                delay: 30,
                stops: [0, 52, 111, 169],
                lastFrame: 219,
            },
            {
                name: 'royal',
                delay: 30,
                stops: [0, 55, 117, 173],
                lastFrame: 224,
            },
        ]
		
		this.filterStyle1 = [
			{ value: '-99', label: 'Floors' },
			{ value: '0', label: '0' },
			{ value: '1', label: '1' },
			{ value: '2', label: '2' },
			{ value: '3', label: '3' },
			{ value: '4', label: '4' },
			{ value: '5', label: '5' },
        ]

        this.filterStyle5 = [
			{ value: '-99', label: 'Floors' },
			{ value: '0', label: '0' },
			{ value: '1', label: '1' },
			{ value: '2', label: '2' },
			{ value: '3', label: '3' },
			{ value: '4', label: '4' },
			{ value: '5', label: '5' },
        ]
        
        // this.filterStyle3 = [
		// 	{ value: '--99', label: 'All' },
		// 	{ value: '1', label: '1' },
		// ]
        this.filterStyle6 = [
			{ value: '--99', label: 'Bedrooms' },
			{ value: '1', label: '1' },
			{ value: '2', label: '2' },
			{ value: '3', label: '3' },
		]
		
		this.filterStyle2 = [
			{ value: 'available', label: 'Available' },
			{ value: 'on-hold', label: 'On Hold' },
			{ value: 'sold', label: 'Sold' },
			{ value: '--99', label: 'Sold Status' },
        ]
        
        this.filterStyle4 = [
			{ value: 'grand', label: 'Verdala Grand' },
			{ value: 'royal', label: 'Verdala Royal' },
		]

        this.initProperties     = this.initProperties.bind(this);
        this.rotate             = this.rotate.bind(this);
        this.nextAnim           = this.nextAnim.bind(this);
        this.prevAnim           = this.prevAnim.bind(this);
        this.maskHover          = this.maskHover.bind(this);
        this.maskRemove         = this.maskRemove.bind(this);
        this.maskSelect         = this.maskSelect.bind(this);
        this.setInfo            = this.setInfo.bind(this);
        this.infoRemove         = this.infoRemove.bind(this);
        this.filter             = this.filter.bind(this);

        this.state      = {
            index: 0,
            stop: 0,
            images: [],
            loaded: false,
            showPage: false,
            animating: false,
            properties: null,
            filters: {},
            buildingData: null,
            windows: []
        };
    }

    componentDidMount() {   

        document.documentElement.style.overflowY = "scroll";

        console.log(this.props.properties);

        this.changeBuilding('grand');

        if ( this.props.properties ) {
            this.initProperties();
        }
    }

    componentDidUpdate(prevProps) {
		if (!prevProps.loaded && this.props.loaded) {

			this.initProperties();
		}
    }

    changeBuilding(building) {

        if ( this.state.buildingData ) {
            if ( this.state.buildingData.name !== building ) {
                let overlayGroup = document.querySelectorAll('.mask-overlay g');

                // Events.multipleEventsRemove(overlayGroup, 'click', this.maskSelect);    
                Events.multipleEventsRemove(overlayGroup, 'mouseenter', this.maskHover);
                Events.multipleEventsRemove(overlayGroup, 'mouseleave', this.maskRemove);

                this.loadBuildingImages(building);
                
                // window.history.pushState({},"", "/building/" + building);

                this.setState({
                    index: 0,
                    stop: 0,
                    animating: false
                })
            }
        } else {
            this.loadBuildingImages(building);
        }

        if ( building === "grand" ) {
            this.setState({
                buildingData: this.buildingData[0]
            }, () => {
                let overlayGroup = document.querySelectorAll('.mask-overlay g');
    
                // Events.multipleEvents(overlayGroup, 'click', this.maskSelect);    
                Events.multipleEvents(overlayGroup, 'mouseenter', this.maskHover);
                Events.multipleEvents(overlayGroup, 'mouseleave', this.maskRemove);
            })
        } else {
            this.setState({
                buildingData: this.buildingData[1]
            }, () => {
                let overlayGroup = document.querySelectorAll('.mask-overlay g');
    
                // Events.multipleEvents(overlayGroup, 'click', this.maskSelect);    
                Events.multipleEvents(overlayGroup, 'mouseenter', this.maskHover);
                Events.multipleEvents(overlayGroup, 'mouseleave', this.maskRemove);
            })
        }

    }
    
    loadBuildingImages(building) {
        this.images = [];

        if ( building === "grand" ) {
            for (var i = 1; i <= this.buildingData[0].lastFrame + 1; i++) {
                this.images.push(require('../../assets/images/stage-photos/grand/stage-' + i + '.jpg'),);
            }
        } else {
            for (var x = 1; x <= this.buildingData[1].lastFrame + 1; x++) {
                this.images.push(require('../../assets/images/stage-photos/royal/stage-' + x + '.jpg'),);
            }
        }

        this.setState({
            images: this.images,
        })
        
        setTimeout( function() {
            this.setState({
                loaded: true,
            })
        }.bind(this), 3000);
        
    }

    componentWillUnmount() {
        var overlayGroup = document.querySelectorAll('.mask-overlay g');

        // Events.multipleEventsRemove(overlayGroup, 'click', this.maskSelect);    
        Events.multipleEventsRemove(overlayGroup, 'mouseenter', this.maskHover);
        Events.multipleEventsRemove(overlayGroup, 'mouseleave', this.maskRemove);

        document.documentElement.style.overflowY = "hidden";
    }

    initProperties() {
        // Set first instance of properties
        
        this.setState({
            properties: this.props.properties
        }, () => {
            // Sort by Unit No
            this.state.properties.sort(function(a, b){
                if(parseInt(a.node.title) < parseInt(b.node.title)) { return 1; }
                if(parseInt(a.node.title) > parseInt(b.node.title)) { return -1; }
                return 0;
            })

            // this.filter("building", building);
            
            // start with available properties only
            // this.filter("sold_status", "available");
            
            // Mask Hover Handlers
            var overlayGroup = document.querySelectorAll('.mask-overlay g');
    
            // Events.multipleEvents(overlayGroup, 'click', this.maskSelect);    
            Events.multipleEvents(overlayGroup, 'mouseenter', this.maskHover);
            Events.multipleEvents(overlayGroup, 'mouseleave', this.maskRemove);
        })

    }

    maskHover(event) {
        var elem    = event.target;
        var maskId  = elem.id     

        this.setInfo(maskId, elem, false);
    }
    
    maskRemove(event) {
        var elem    = event.target;
        var maskId  = elem.id

        event.target.firstChild.style.fill      = "transparent";
        event.target.firstChild.style.stroke    = "transparent";

        this.infoRemove(maskId);
    }

    maskSelect(event) {
        var elem    = event.target.parentElement;
        var maskId  = elem.id;

        var result = this.props.properties.find(obj => {
            // console.log(obj);
            return parseInt(obj.node.title, 10) === parseInt(maskId.substring(1, maskId.length), 10);
        })

        if ( result && result.node.propertiesData.saleStatus === "sold") {
                   
            this.props.history.push({
                pathname: '/plan/' + result.node.title,
                state: {
                    propDetail: result,
                    transition: "fade",
                    timeout: 2250
                }
            });
        }
    }

    infoRemove(index) {
        var selectedProp = this.props.properties.find(obj => {
            // console.log(obj);
            return parseInt(obj.node.title, 10) === parseInt(index.substring(1, index.length), 10);
        })

        if (selectedProp) {
            var aptList = document.querySelector('.apartment-' + selectedProp.node.title);
    
            if ( aptList ) {
                aptList.classList.remove("active");
            }
    
            this.checkDuplicateWindow(selectedProp, this.state.windows, false)
        }
    }

    setInfo(index, elem, scroll = false) {

        let elementPos = elem.getBoundingClientRect();

        let result = this.props.properties.find(obj => {
            // console.log(index.substring(1, index.length), 10);
            // console.log(obj);
            return parseInt(obj.node.title, 10) === parseInt(index.substring(1, index.length), 10);
        })

        // console.log(result);

        if (result) {
            // if ( result.acf.sold_status === "sold" ) {
            //     elem.firstChild.style.fill      = "rgba(185, 185, 185, 0.6)";
            //     elem.firstChild.style.stroke    = "rgba(255,255,255,0.6)";   
            // } else {
                elem.firstChild.style.fill      = "rgba(255,255,255,0.8)";
                // elem.firstChild.style.stroke    = "rgba(255,255,255,0.8)";   
            // }

            // console.log(result);

            let aptList = document.querySelector('.apartment-' + result.node.title);

            if ( aptList ) {
                aptList.classList.add("active");
                
                if ( scroll ) {
                    aptList.scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                }
            }
            
        } else {
            elem.firstChild.style.fill      = "rgba(0, 0, 0, 0.6)";
            elem.firstChild.style.stroke    = "rgba(255,255,255,0.6)";  
        }

        
        let windows = this.state.windows;
        
        if ( result ) {
            
            if ( !this.checkDuplicateWindow(result, windows, true) ) {
                let xPos = (elementPos.x < 130) ? elementPos.right + 10 : elementPos.right + 10;

                let newWindow = {
                    infoShow: true,
                    selectedProp: result,
                    infoPos: {top: (elementPos.y - 45), left: xPos}
                }
    
    
                windows.push(newWindow);
    
                this.setState({
                    windows: windows
                });
            }
        }
    }

    checkDuplicateWindow(object, list, setValue) {

        // this.checkDuplicateWindow(result, windows, true) )
        
        if ( list.length > 0 ) {

            for (var i = 0; i < list.length; i++) {
                if (object) {
                    if (list[i].selectedProp.node.id === object.node.id) {
                        var windowsTmp          = list;
                        windowsTmp[i].infoShow  = setValue;
    
                        this.setState({
                            windows: windowsTmp
                        })
    
                        return true;
                    }
                }
            }
        }

        return false;
    }

    filter(field, value) {
        var currFilter  = this.state.filters;
		let filtered    = this.props.properties;
        
        // console.log(value);

        if ( value === "-99" ) {
            delete currFilter[field];
        } else {
            currFilter[field] = value;
        }

        for (var key in currFilter) {

            if (currFilter.hasOwnProperty(key)) {
                if ( key === "building" ) {
                    filtered = Filter.filterBuilding(filtered, key, currFilter);
                    
                    // if ( this.state.buildingData && (currFilter[key] !== this.state.buildingData.name) ) {
                    //     this.changeBuilding(currFilter[key]);
                    // }
                } else {
                    filtered = Filter.filterProperty(filtered, key, currFilter);
                }
            }
        }

        let remDup = [];
        let valueArr = filtered.map(function(item){ return item.node.title });

        filtered.some(function(item, idx){ 
            if ( valueArr.indexOf(item.node.title) === idx ) {
                remDup.push(item);
            }

            return null;
        });

        // console.log(remDup);

        this.setState({
            properties: remDup,
            filters: currFilter
        })
    }

    clearClasses() {
        var elems = document.querySelectorAll(".property-row-item.selected");

        [].forEach.call(elems, function(el) {
            el.classList.remove("selected");
        });
    }

    sort(field, element) {
        // element.stopPropagation();
        
        var elem = element.target;
        
        if ( !elem.classList.contains("property-row-item") ) {
            elem = elem.parentElement;
        }

        if ( elem.classList.contains("selected") ) {
            this.clearClasses();

            this.state.properties.sort(function(a, b){
                var testA;
                var testB;

                if (field === "property_number") {
                    testA = parseInt(a.node.title);
                    testB = parseInt(b.node.title);
                } else if (field === "size" || field === "externalArea") {
                    let a_gfa             = (a.node.propertiesData.internalArea) ? parseFloat(a.node.propertiesData.internalArea) : 0;
                    let a_external        = (a.node.propertiesData.externalArea) ? parseFloat(a.node.propertiesData.externalArea) : 0;
                    let b_gfa             = (b.node.propertiesData.internalArea) ? parseFloat(b.node.propertiesData.internalArea) : 0;
                    let b_external        = (b.node.propertiesData.externalArea) ? parseFloat(b.node.propertiesData.externalArea) : 0;

                    if ( field === "size" ) {
                        testA = a_gfa + a_external;
                        testB = b_gfa + b_external;
                    } else {
                        testA = a_external;
                        testB = b_external;
                    }

                } else {
                    testA = parseInt(a.node.propertiesData[field]);
                    testB = parseInt(b.node.propertiesData[field]);
                }

                if(testA > testB) { return -1; }
                if(testA < testB) { return 1; }
                return 0;
            })
            
        } else {
            this.clearClasses();
            
            elem.classList.add("selected");

            this.state.properties.sort(function(a, b){
                let testA;
                let testB;

                if (field === "property_number") {
                    testA = parseInt(a.node.title);
                    testB = parseInt(b.node.title);
                } else if (field === "size" || field === "externalArea") {
                    let a_gfa             = (a.node.propertiesData.internalArea) ? parseFloat(a.node.propertiesData.internalArea) : 0;
                    let a_external        = (a.node.propertiesData.externalArea) ? parseFloat(a.node.propertiesData.externalArea) : 0;
                    let b_gfa             = (b.node.propertiesData.internalArea) ? parseFloat(b.node.propertiesData.internalArea) : 0;
                    let b_external        = (b.node.propertiesData.externalArea) ? parseFloat(b.node.propertiesData.externalArea) : 0;

                    if ( field === "size" ) {
                        testA = a_gfa + a_external;
                        testB = b_gfa + b_external;
                    } else {
                        testA = a_external;
                        testB = b_external;
                    }

                } else {
                    testA = parseInt(a.node.propertiesData[field]);
                    testB = parseInt(b.node.propertiesData[field]);
                }

                if(testA < testB) { return -1; }
                if(testA > testB) { return 1; }
                return 0;
            })
        }

        this.setState({
            properties: this.state.properties
        })
    }
    
    rotate( next ) {

        if ( !this.state.animating ) {
            // let prevStop = this.state.stop;

            if ( next ) {

                this.setState({
                    stop: (this.state.stop === this.state.buildingData.stops.length-1) ? 0 : (this.state.stop + 1)
                })

                // if ( prevStop === this.state.buildingData.stops.length-1 && this.state.buildingData.name === "mercury-towers-p2" ) {
                //     this.prevInterval = setInterval(() => {
                //         this.prevAnim();
                //     },this.state.buildingData.delay)
                // } else {
                // }
                this.nextInterval = setInterval(() => {
                    this.nextAnim();
                },this.state.buildingData.delay)

                this.setState({
                    animating: true,
                })

            } else {

                this.setState({
                    stop: (this.state.stop === 0) ? this.state.buildingData.stops.length-1 : (this.state.stop - 1)
                })

                // if ( prevStop === 0 && this.state.buildingData.name === "royal" ) {
                //     this.nextInterval = setInterval(() => {
                //         this.nextAnim();
                //     },this.state.buildingData.delay)
                // } else {
                // }
                this.prevInterval = setInterval(() => {
                    this.prevAnim();
                },this.state.buildingData.delay)
                
                this.setState({
                    animating: true,
                })
            }
    
    
        }
    }

    nextAnim() {
            
        if (( this.state.index < this.state.buildingData.stops[this.state.stop]) || (this.state.stop === 0 && this.state.index !== this.state.buildingData.stops[this.state.stop]) ) {
            
            if ( this.state.index === this.state.buildingData.lastFrame ) {
                this.setState({index: 0});
            } else {
                this.setState({index: (this.state.index+1)});
            }
            // this.nextAnim();
        } else {
            this.setState({
                animating: false
            })
            
            clearInterval(this.nextInterval);
        }
    }
    
    prevAnim() {

        if ( (this.state.index > this.state.buildingData.stops[this.state.stop]) || (this.state.stop === this.state.buildingData.stops.length-1 && this.state.index !== this.state.buildingData.stops[this.state.stop])) {

            if ( this.state.index === 0 ) {
                this.setState({index: this.state.buildingData.lastFrame});
            } else {
                this.setState({index: (this.state.index-1)});
            }
            // this.prevAnim();
        } else {
            this.setState({
                animating: false
            })

            clearInterval(this.prevInterval);
        }

    }

    getDirection(a, b, arr) {
        let rHops = (b > a) ? (a + 1) + ((arr.length) - b) : b - a;
        let lHops = (a + 1) + ((arr.length - 1) - b);

        let dirTest = rHops < lHops;

        // console.log("Current Stop : " + a);
        // console.log("next Stop : " + b);

        // if ( a === 0 && !dirTest) {
        //     dirTest = true;
        // } else if ( a === arr.length-1 && dirTest ) {
        //     dirTest = false;
        // }
        

        if ( this.state.buildingData.name === "grand" ) {
            if ( a === 0 && !dirTest) {
                dirTest = true;
            } else if ( a === arr.length-1 && dirTest ) {
                dirTest = false;
            }
        }
        
        return dirTest;
    }

    apartmentController(sideId, id) {
        var selector        = "_" + parseInt(id, 10);
        var maskSelector    = document.querySelector("#mask-" + sideId + " #" + selector.toString());
        
        if ( sideId !== this.state.stop) {
            
            if ( this.state.animating ) {
            //     clearInterval(this.nextInterval);
            //     clearInterval(this.prevInterval);
                this.setState({
                    stop: sideId,
                    index: this.state.buildingData.stops[sideId],
                    animating: false
                })
            } else {
                let prevID    = this.state.stop;
                let dir       = this.getDirection(prevID, sideId, this.state.buildingData.stops);

                // if ( this.state.buildingData.name === "royal") {
                //     dir = !dir;
                // }

                this.setState({
                    stop: sideId,
                    animating: true
                }, () => {
                    if ( dir ) {
                        this.nextAnim();
    
                        this.nextInterval = setInterval(() => {
                            this.nextAnim();
                        },this.state.buildingData.delay)
                    } else {
                        this.prevAnim();
                        
                        this.prevInterval = setInterval(() => {
                            this.prevAnim();
                        },this.state.buildingData.delay)
                    }
                })
            }

            // const prevID = this.state.stop;
            
        } else {
            this.setState({
                stop: sideId,
                index: this.state.buildingData.stops[sideId],
                animating: false
            })
        }
        
        if (maskSelector) {
            // console.log("mark");

            maskSelector.firstChild.style.fill      = "rgba(239, 182, 151, 0.6)";
            maskSelector.firstChild.style.stroke    = "rgba(255,255,255,0.6)";

            this.setInfo(selector, maskSelector);
        }
        // }

    }

    apartmentClose(sideId, id) {
        var selector        = "_" + parseInt(id, 10);
        var maskSelector    = document.querySelector("#mask-" + sideId + " #" + selector.toString());

        this.infoRemove(selector);
        
        if (maskSelector) {
            maskSelector.firstChild.style.fill      = "transparent";
            maskSelector.firstChild.style.stroke    = "transparent";
        }
    }

    render() {
        // if ( this.state.loaded ) {

            return (
                <section id="buildingCont" className="property-main-container">
                    <div className="text-center">
                        <div className="building-selector">
                            <Dropdown onChange={(e) => this.changeBuilding(e.value)} options={this.filterStyle4} value={(this.state.filters.building) ? this.state.filters.building : this.filterStyle4[0] } placeholder={this.filterStyle4[0].label} />
                        </div>

                        {/* // <div className="dropdown-selector">
                        //     <div className="option">
                        //         <h1>Grand Mansions</h1>
                        //     </div>
                        //     <div className="option">
                        //         <h1>Royal Mansions</h1>
                        //     </div>
                        // </div> */}
                    </div>

                    <div className={"seq-cont " + ((this.state.animating) ? " animating" : "") + ((this.state.loaded) ? " loaded" : "")}>
                        <Building3DController
                            images =    {this.state.images}
                            windows =   {this.state.windows}
                            index =     {this.state.index}
                            // stop =      {this.state.stop}
                        >
                            {(this.state.buildingData && this.state.buildingData.name === "grand") ?
                                <>
                                    <div id="mask-3" className={"mask-overlay " + ((this.state.stop === 3) ? "active-mask" : "")}>
                                        <svg x="0px" y="0px"
                                            viewBox="0 0 1920.2 1080.3" style={{enableBackground: "new 0 0 1919.9 1080"}}>
                                        <g id="_672">
                                            <polygon id="_672_1_" fill="transparent" points="353.2,295.3 353.2,320 918.5,320 918.5,304 	"/>
                                        </g>
                                        <g id="_662">
                                            <polygon id="_662_1_" fill="transparent" points="253.8,346.7 253.8,384.7 771.8,372.7 771.8,346.7 	"/>
                                        </g>
                                        <g id="_661">
                                            <polygon id="_661_1_" fill="transparent" points="777.8,346.7 945.2,356.7 945.2,374.7 777.8,372.7 	"/>
                                        </g>
                                        <g id="_653">
                                            <polygon id="_653_1_" fill="transparent" points="562.8,402.5 562.8,438 250.8,452.5 250.8,411 	"/>
                                        </g>
                                        <g id="_652">
                                            <polygon id="_652_1_" fill="transparent" points="562.8,402.5 562.8,438 1025.3,442 1017.8,402.5 	"/>
                                        </g>
                                        <g id="_644">
                                            <polygon id="_644_1_" fill="transparent" points="242.3,476 478.8,473 478.8,512.5 424.8,512.5 424.3,517 
                                                245.8,519.5 	"/>
                                        </g>
                                        <g id="_643_1_">
                                            <polygon id="_643" fill="transparent" points="478.8,473 719.3,473 719.3,467.5 745.8,464.5 739.8,507.5 
                                                720.3,507.5 719.3,512.5 478.8,512.5 	"/>
                                        </g>
                                        <g id="_642">
                                            <polyline id="_642_1_" fill="transparent" points="745.8,464.5 1092.8,465.5 1092.8,509 739.8,507.5 745.8,464.5 
                                                    "/>
                                        </g>
                                        <g id="_635">
                                            <polygon id="_635_1_" fill="transparent" points="242.3,544 242.3,587 485.8,587 485.8,537 	"/>
                                        </g>
                                        <g id="_634">
                                            <polygon id="_634_1_" fill="transparent" points="485.8,537 727.8,537 719.8,532 739.8,532 739.8,587 485.8,587 	
                                                "/>
                                        </g>
                                        <g id="_633">
                                            <polygon id="_633_1_" fill="transparent" points="739.8,532 1114.8,534 1114.8,587 739.8,587 	"/>
                                        </g>
                                        <g id="_624">
                                            <polygon id="_624_1_" fill="transparent" points="618.8,611 618.8,661 242.3,661 206.8,611 	"/>
                                        </g>
                                        <g id="_623">
                                            <rect id="_623_1_" x="618.8" y="611" fill="transparent" width="516" height="50"/>
                                        </g>
                                        <g id="_615">
                                            <polygon id="_615_1_" fill="transparent" points="278.8,683 527.8,683 527.8,724 288.8,718 	"/>
                                        </g>
                                        <g id="_614">
                                            <polygon id="_614_1_" fill="transparent" points="527.8,683 899.8,687 899.8,733 527.8,724 	"/>
                                        </g>
                                        <g id="_613">
                                            <polygon id="_613_1_" fill="transparent" points="899.8,687 1127.8,687 1127.8,728 899.8,733 	"/>
                                        </g>
                                        </svg>
                                    </div>

                                    <div id="mask-2" className={"mask-overlay " + ((this.state.stop === 2) ? "active-mask" : "")}>
                                        <svg x="0px" y="0px"
                                            viewBox="0 0 1920 1080" style={{enableBackground: "new 0 0 1919.9 1080"}}>
                                        <g id="_571">
                                            <polygon id="_571_1_" fill="transparent" points="832.7,249.3 590.7,249.3 590.7,273.3 824.3,275.3 847.3,346.3 884.3,355.7 
                                                878.3,316 847.3,304.7 	"/>
                                        </g>
                                        <g id="_561">
                                            <polygon id="_561_1_" fill="transparent" points="502.3,308.3 505.3,351 824.7,351 847,408 847,359.7 825.9,306.6 	"/>
                                        </g>
                                        <g id="_551">
                                            <polygon id="_551_1_" fill="transparent" points="847,424.7 824.3,377.7 499.3,377.7 499.3,410.3 510,424.7 823.7,425.7 
                                                847,469.3 	"/>
                                        </g>
                                        <g id="_541">
                                            <polygon id="_541_1_" fill="transparent" points="499.3,453 502.3,502 824.7,505 847,529.7 847,484.7 824,453 	"/>
                                        </g>
                                        <g id="_531">
                                            <polygon id="_531_1_" fill="transparent" points="499.3,528.3 502.3,571 494.3,580.3 822,580.3 845.3,593 845.3,545.7 
                                                823.7,529.7 	"/>
                                        </g>
                                        <g id="_521">
                                            <polygon id="_521_1_" fill="transparent" points="463.7,606.7 483.3,614.3 504.3,657.3 463.7,657.3 463.7,706.7 830.3,701.7 
                                                845.3,692.3 844,606.7 	"/>
                                        </g>
                                        <g id="_671">
                                            <polygon id="_671_1_" fill="transparent" points="910,317.7 972.3,322.7 1041.7,314.7 1043.3,362.3 973,368.7 910,362 	"/>
                                        </g>
                                        <g id="_562">
                                            <polygon id="_562_1_" fill="transparent" points="910,364.3 972.7,370.3 972.7,426.3 911.7,420 	"/>
                                        </g>
                                        <g id="_661">
                                            <polygon id="_661_1_" fill="transparent" points="1043.3,362.3 1043.3,420.7 972.7,426.3 972.7,370.3 	"/>
                                        </g>
                                        <g id="_553">
                                            <polygon id="_553_1_" fill="transparent" points="912,430 972.7,434.7 972.7,491.3 912,485.3 	"/>
                                        </g>
                                        <g id="_651">
                                            <polygon id="_651_1_" fill="transparent" points="972.7,434.7 1043.3,430 1043.3,486.3 972.7,491.3 	"/>
                                        </g>
                                        <g id="_544">
                                            <polygon fill="transparent" points="912,489.3 972.7,495.3 972.7,545.7 912,540 	"/>
                                        </g>
                                        <g id="_641">
                                            <path id="_641_1_" fill="transparent" d="M972.7,495.3l70.7-7.7c0,0,1.3,53.7,0,53.7c-1.3,0-70.7,4.3-70.7,4.3V495.3z"/>
                                        </g>
                                        <g id="_534">
                                            <polygon fill="transparent" points="912,545.7 974,549.7 974,596 912,598.3 	"/>
                                        </g>
                                        <g id="_631v">
                                            <polygon fill="transparent" points="974,549.7 1043.9,543.3 1043.9,595.3 974,596 	"/>
                                        </g>
                                        <g id="_526">
                                            <polygon fill="transparent" points="912,603.3 978.3,601.3 978.3,654.3 913.7,654.3 	"/>
                                        </g>
                                        <g id="_621">
                                            <polygon fill="transparent" points="978.3,601.3 1043.9,598.3 1043.3,654.3 978.3,654.3 	"/>
                                        </g>
                                        <g id="_672">
                                            <polygon fill="transparent" points="1369,263.5 1369,280 1151.5,280 1107.5,349.5 1064.5,359 1071,319 1105.5,302.5 1137,263.5 	
                                                "/>
                                        </g>
                                        <g id="_662">
                                            <polygon fill="transparent" points="1152,314.7 1454,322.5 1454,359 1152,359 1108.5,409.5 1108.5,360.5 	"/>
                                        </g>
                                        <g id="_653">
                                            <polygon fill="transparent" points="1457.5,390 1454,430 1152.5,433.5 1108.5,477 1108.5,415 1152,372 	"/>
                                        </g>
                                        <g id="_644">
                                            <polygon fill="transparent" points="1108.5,484 1151.5,443.5 1454.5,454.5 1454,502.5 1151,507 1108.5,543.3 	"/>
                                        </g>
                                        <g id="_635">
                                            <polygon fill="transparent" points="1108.5,556 1151.5,526.5 1457.5,530 1454.5,581 1152,585.5 1108.5,596 	"/>
                                        </g>
                                        <g id="_624">
                                            <polygon fill="transparent" points="1108.5,630 1150,604.5 1501,604.5 1484.5,650 1149.5,642.5 1108.5,645.5 	"/>
                                        </g>
                                        <g id="_615">
                                            <polygon fill="transparent" points="1476,673.5 1147.5,654.3 1108.5,659 1108.5,695 1138,706 1462.5,714.5 	"/>
                                        </g>
                                        </svg>
                                    </div>

                                    <div id="mask-1" className={"mask-overlay " + ((this.state.stop === 1) ? "active-mask" : "")}>
                                        <svg x="0px" y="0px"
                                            viewBox="0 0 1921.1 1079" style={{enableBackground: "new 0 0 1919.9 1080"}}>
                                        <g id="_571">
                                            <polygon id="_571_1_" fill="transparent" points="1567.4,309.6 1057.6,307.6 1057.6,322.5 1540.1,325.5 
                                                1540.1,331.5 1567.4,331.5 	"/>
                                        </g>
                                        <g id="_562">
                                            <rect id="_562_1_" x="992.6" y="362.5" fill="transparent" width="276.5" height="10.5"/>
                                        </g>
                                        <g id="_561">
                                            <polygon id="_561_1_" fill="transparent" points="1269.1,362.5 1384.6,362.5 1393.6,355.5 1522.6,355.5 
                                                1576.6,362.5 1652.6,362.5 1652.6,394.5 1585.1,394.5 1585.1,376 1269.1,373 	"/>
                                        </g>
                                        <g id="_552">
                                            <rect id="_552_1_" x="907.1" y="404.5" fill="transparent" width="460" height="29.5"/>
                                        </g>
                                        <g id="_551">
                                            <polygon id="_551_1_" fill="transparent" points="1367.1,417.5 1655.1,417.5 1655.1,448.5 1405.1,448.5 1405.6,434 
                                                1367.1,434 	"/>
                                        </g>
                                        <g id="_543">
                                            <rect id="_543_1_" x="860.1" y="471.5" fill="transparent" width="356.5" height="41"/>
                                        </g>
                                        <g id="_542">
                                            <polygon id="_542_1_" fill="transparent" points="1216.6,471.5 1436.1,471.5 1438.6,512.5 1223.6,515 1224.1,512.5 
                                                1216.6,512.5 	"/>
                                        </g>
                                        <g id="_541">
                                            <polygon id="_541_1_" fill="transparent" points="1436.6,471.5 1658.6,481 1658.6,517 1438.6,512.5 	"/>
                                        </g>
                                        <g id="_533">
                                            <polygon id="_533_1_" fill="transparent" points="815.1,540 1137.1,539.5 1137.1,586 815.1,586 	"/>
                                        </g>
                                        <g id="_532">
                                            <polygon id="_532_1_" fill="transparent" points="1137.1,539.5 1511.1,540 1511.1,586 1137.1,586 	"/>
                                        </g>
                                        <g id="_531">
                                            <polygon id="_531_1_" fill="transparent" points="1511.1,540 1511.1,586 1666.1,586 1666.1,547 	"/>
                                        </g>
                                        <g id="_525">
                                            <polygon id="_525_1_" fill="transparent" points="774.1,638 675.1,661 675.1,685 1213.1,685 1213.1,611 823.1,611 
                                                821.1,643 	"/>
                                        </g>
                                        <g id="_511">
                                            <polyline id="_511_1_" fill="transparent" points="815.1,685 1213.1,685 1216.6,729 553.1,729 620.1,701 815.1,701 	
                                                "/>
                                        </g>
                                        <g id="_524">
                                            <polygon id="_524_1_" fill="transparent" points="1213.1,611 1213.1,685 1216.6,729 1343.1,729 1350.1,611 	"/>
                                        </g>
                                        <g id="_523">
                                            <polygon id="_523_1_" fill="transparent" points="1350.1,611 1343.1,729 1520.1,729 1520.1,611 	"/>
                                        </g>
                                        <g id="_522">
                                            <polygon id="_522_1_" fill="transparent" points="1520.1,611 1615.1,611 1601.1,729 1520.1,729 	"/>
                                        </g>
                                        <g id="_521">
                                            <polygon id="_521_2_" fill="transparent" points="1606.3,685 1675.1,685 1675.1,724 1602.2,719.7 	"/>
                                            <polygon id="_521_1_" fill="transparent" points="1679.8,617.5 1670.2,641.3 1619.8,640.5 1641.6,618.8 	"/>
                                        </g>
                                        </svg>
                                    </div>
                                    
                                    <div id="mask-0" className={"mask-overlay " + ((this.state.stop === 0) ? "active-mask" : "")}>
                                        <svg x="0px" y="0px"
                                            viewBox="0 0 1919.9 1080" style={{enableBackground: 'new 0 0 1919.9 1080;'}}>
                                        <g id="_671">
                                            <polyline id="_671_1_" fill="transparent" points="787.2,356 787.2,356 787.2,385.3 1070.6,385.3 1070.6,356 
                                                787.2,356 	"/>
                                        </g>
                                        <g id="_571">
                                            <path id="_571_1_" fill="transparent" d="M1070.6,356v29.3c0,0,169-0.5,173,0l19.8-17.5V356H1070.6z"/>
                                        </g>
                                        <g id="_672_1_">
                                            <polygon id="_672" fill="transparent" points="648.6,356 787.2,356 787.2,385.3 670.9,385.3 648.6,369.3 	"/>
                                        </g>
                                        <g id="_661">
                                            <path id="_661_1_" fill="transparent" d="M660.9,418v15h57v-7.5c0,0,221.7-0.8,236.3,0v-21.8h-67.3l0.3,12.3
                                                L660.9,418z"/>
                                        </g>
                                        <g id="_562">
                                            <polygon id="_562_1_" fill="transparent" points="954.2,403.6 1024.9,403.6 1024.9,416.3 1251.2,416.3 
                                                1251.2,424.3 954.2,425.5 	"/>
                                        </g>
                                        <g id="_652">
                                            <polygon id="_652_1_" fill="transparent" points="776.2,447.6 776.2,456.3 599.6,456.3 599.6,475.6 784.1,475.6 
                                                784.1,447.6 	"/>
                                        </g>
                                        <g id="_651">
                                            <rect id="_x36_51" x="784.1" y="447.6" fill="transparent" width="170.2" height="28"/>
                                        </g>
                                        <g id="_553">
                                            <polygon id="_553_1_" fill="transparent" points="954.2,447.6 1139.6,447.6 1139.6,477.8 1137.1,475.6 
                                                954.2,475.6 	"/>
                                        </g>
                                        <g id="_552">
                                            <polygon fill="transparent" points="1139.6,457.3 1338.6,457.3 1338.6,484.3 1158.6,484.3 1157.6,480.3 1139.6,480.3 
                                                1139.6,477.8 	"/>
                                        </g>
                                        <g id="_642">
                                            <polygon fill="transparent" points="533.6,509.3 780.1,504.8 780.1,532.8 767.1,532.8 766.6,540 533.6,540 	"/>
                                        </g>
                                        <g id="_641">
                                            <path id="_641_1_" fill="transparent" d="M780.1,504.8h177v28c0,0-148.5,3.5-177,0V504.8z"/>
                                        </g>
                                        <g id="_544">
                                            <polygon id="_544_1_" fill="transparent" points="957.1,504.8 1139.6,504.8 1139.6,534.4 957.1,532.8 	"/>
                                        </g>
                                        <g id="_543">
                                            <polygon id="_543_1_" fill="transparent" points="1139.6,504.8 1384.1,507.8 1384.1,534.4 1139.6,534.4 	"/>
                                        </g>
                                        <g id="_633">
                                            <rect id="_633_1_" x="523.6" y="558.8" fill="transparent" width="81.5" height="37.5"/>
                                        </g>
                                        <g id="_632">
                                            <rect id="_632_1_" x="605.1" y="558.8" fill="transparent" width="186" height="37.5"/>
                                        </g>
                                        <g id="_631">
                                            <rect id="_631_1_" x="791.1" y="558.8" fill="transparent" width="166" height="37.5"/>
                                        </g>
                                        <g id="_534">
                                            <rect id="_534_1_" x="957.1" y="558.8" fill="transparent" width="191.5" height="37.5"/>
                                        </g>
                                        <g id="_533">
                                            <polygon id="_533_1_" fill="transparent" points="1148.6,558.8 1399.6,561.8 1399.6,599.8 1198.6,599.8 
                                                1199.1,596.3 1148.6,596.3 	"/>
                                        </g>
                                        <g id="_623">
                                            <path id="_623_1_" fill="transparent" d="M523.6,617.8v31h-8.5v6.5c0,0,79,2.5,90,2v-39.5H523.6z"/>
                                        </g>
                                        <g id="_622">
                                            <path id="_622_1_" fill="transparent" d="M605.1,617.8h194.5v42c0,0-136-7.5-194.5-2.5V617.8z"/>
                                        </g>
                                        <g id="_621">
                                            <rect id="_621_1_" x="799.6" y="617.8" fill="transparent" width="163" height="42"/>
                                        </g>
                                        <g id="_526">
                                            <polygon id="_526_1_" fill="transparent" points="965.6,617.8 1148.6,617.8 1148.6,659.8 962.6,659.8 
                                                962.6,617.8 	"/>
                                        </g>
                                        <g id="_525">
                                            <rect id="_525_1_" x="1148.6" y="617.8" fill="transparent" width="235.5" height="42"/>
                                        </g>
                                        <g id="_613">
                                            <polygon id="_613_1_" fill="transparent" points="519.6,677.8 519.6,722.3 660.9,722.3 663.1,677.8 	"/>
                                        </g>
                                        <g id="_601">
                                            <polygon id="_601_1_" fill="transparent" points="660.9,722.3 591.3,830.3 162.1,830.3 278.1,754.8 404.6,729.3 
                                                633.6,736.8 648.1,722.3 	"/>
                                        </g>
                                        <g id="_612">
                                            <polygon id="_612_1_" fill="transparent" points="663.1,677.8 660.9,722.3 591.3,830.3 845.6,826.3 874.1,712.8 
                                                874.1,681.8 741.6,681.8 741.6,677.8 	"/>
                                        </g>
                                        <g id="_611">
                                            <polygon id="_611_1_" fill="transparent" points="874.1,681.8 1014.6,681.8 1014.6,723.3 1032.1,830.3 
                                                845.6,826.3 874.1,712.8 	"/>
                                        </g>
                                        <g id="_513">
                                            <polygon id="_513_1_" fill="transparent" points="1014.6,681.8 1014.6,723.3 1032.1,830.3 1215.6,827.3 
                                                1154.6,713.8 1154.1,681.8 	"/>
                                        </g>
                                        <g id="_512">
                                            <polygon id="_512_1_" fill="transparent" points="1154.1,681.8 1154.6,713.8 1215.6,827.3 1392.1,827.3 
                                                1289.1,712.8 1289.1,681.8 	"/>
                                        </g>
                                        <g id="_511">
                                            <polygon id="_511_1_" fill="transparent" points="1289.1,681.8 1289.1,712.8 1392.1,827.3 1704.1,827.3 
                                                1496.6,709.8 1399.6,709.8 1399.6,681.8 	"/>
                                        </g>
                                        </svg>
                                    </div>
                                </>
                            :
                                <>
                                <div id="mask-2" className={"mask-overlay " + ((this.state.stop === 2) ? "active-mask" : "")}>

                                </div>

                                <div id="mask-1" className={"mask-overlay " + ((this.state.stop === 1) ? "active-mask" : "")}>
                                   
                                </div>

                                <div id="mask-0" className={"mask-overlay " + ((this.state.stop === 0) ? "active-mask" : "")}>
                                
                                </div>

                                </>
                            }                
                        </Building3DController>
                            
						<div className="arrow-container">
                            <div onClick={() => (this.state.buildingData.name === "grand") ? this.rotate(false) : this.rotate(true)} className="rotation-button left-button">
                                <div className="arrow left-arrow">
                                    <div className="inner-arrow">
                                        <span></span>
                                    </div>
                                </div>
                            </div>

                            <div  onClick={() => (this.state.buildingData.name === "grand") ? this.rotate(true) : this.rotate(false)} className="rotation-button right-button">
                                <div className="arrow right-arrow">
                                    <div className="inner-arrow">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
						</div>
                    
						{/* <div className="buidling-loading-screen">
                            <LoadingScreen
                                loadingState    = {true}
                                remove          = {this.state.showPage}
                                // forceLoad       = {true}
                            />
						</div> */}
                    </div>

                    <div id="apartmentCont" className="apartment-list">
                        <Container>
                            <div className="row">
                                <div className="col-1">
                                    {this.state.properties &&
                                        <div className="filter-sticky-header">
                                            <div className="filter-container row align-bottom ">
                                                <div className="col-3 dropdown-container">
                                                    <div className="dropdown">
                                                        {/* <Dropdown onChange={(e) => this.filter("building", e.value)} options={this.filterStyle1} value={(this.state.filters.floorNumber) ? this.state.filters.floorNumber : this.filterStyle1[0] } placeholder={this.filterStyle1[0].label} /> */}
                                                        <Dropdown onChange={(e) => this.changeBuilding(e.value)} options={this.filterStyle4} value={(this.state.filters.building) ? this.state.filters.building : this.filterStyle4[0] } placeholder={this.filterStyle4[0].label} />
                                                    </div>

                                                    <div className="dropdown">
                                                        {(this.state.buildingData && this.state.buildingData.name === 'grand') ?
                                                            <Dropdown onChange={(e) => this.filter("floorNumber", e.value)} options={this.filterStyle1} value={(this.state.filters.floorNumber) ? this.state.filters.floorNumber : this.filterStyle1[0] } placeholder={this.filterStyle1[0].label} />
                                                            :
                                                            <Dropdown onChange={(e) => this.filter("floorNumber", e.value)} options={this.filterStyle5} value={(this.state.filters.floorNumber) ? this.state.filters.floorNumber : this.filterStyle5[0] } placeholder={this.filterStyle5[0].label} />
                                                        }
                                                    </div>

                                                    <div className="dropdown">
                                                        {(this.state.buildingData && this.state.buildingData.name === 'grand') ?
                                                            <Dropdown onChange={(e) => this.filter("bedrooms", e.value)} options={this.filterStyle6} value={(this.state.filters.bedrooms) ? this.state.filters.bedrooms : this.filterStyle6[0] } placeholder="All" />
                                                            :
                                                            <Dropdown onChange={(e) => this.filter("bedrooms", e.value)} options={this.filterStyle6} value={(this.state.filters.bedrooms) ? this.state.filters.bedrooms : this.filterStyle6[0] } placeholder="All" />
                                                        }
                                                        <div className="arrow-icon"></div>
                                                    </div>

                                                    {/* <div className="dropdown col"></div> */}
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>

                                <div className="col-3">
                                    <div className="property-table">

                                        <div className="property-scroll-outer" data-lenis-prevent>
                                            <div className="property-row header-row">
                                                <div className="property-row-item" onClick={(e) => this.sort("floorNumber", e)}><span>Floor</span></div>
                                                <div className="property-row-item" onClick={(e) => this.sort("property_number", e)}><span>Unit</span></div>
                                                <div className="property-row-item" onClick={(e) => this.sort("bedrooms", e)}><span>Bedrooms</span></div>
                                                <div className="property-row-item" onClick={(e) => this.sort("internalArea", e)}><span>Internal Area</span></div>
                                                <div className="property-row-item" onClick={(e) => this.sort("externalArea", e)}><span>External Area</span></div>
                                                {/* <div className="property-row-item" onClick={(e) => this.sort("price", e)}><span>Price</span></div> */}
                                                <div className="property-row-item"><span></span></div>
                                            </div>

                                            <div className={"property-scroll-inner " + ((this.state.properties && this.state.loaded) ? "loaded" : "")}>

                                                {(this.state.properties && this.state.properties.length === 0) ?
                                                    <div className="property-row">
                                                        <div className="property-row-item">
                                                            <p>There are no properties available matching your selection</p>
                                                        </div>
                                                    </div>
                                                    : 
                                                    null
                                                }

                                                {this.state.properties && this.state.properties.map( (property, key) => {
                                                    if ( property ) {

                                                        let propData = property.node.propertiesData;

                                                        let netArea         = (propData.internalArea) ? parseFloat(propData.internalArea) : 0;
                                                        // var gfa             = (property.acf.gfa_sqm) ? parseFloat(property.acf.gfa_sqm) : 0;
                                                        let externalArea     = (propData.externalArea) ? parseFloat(propData.externalArea) : 0;
                                                        
                                                        // if (property.acf.sold_status === "sold") {
                                                            return (
                                                                <AniLink 
                                                                    cover
                                                                    direction="left"
                                                                    duration={1}
                                                                    bg="#7B9E6B"
                                                                    to={"/property/" + property.node.title + "-2"}
                                                                >
                                                                    <div 
                                                                        key             = {key}
                                                                        // onMouseEnter    = {() => this.apartmentController(parseInt(property.acf.building_side - 1), property.node.title)}
                                                                        // onMouseLeave    = {() => this.apartmentClose(parseInt(property.acf.building_side - 1), property.node.title)}
                                                                        className       = {"apartment apartment-" + property.node.title + " "}
                                                                    >
                                                                        <PropertyRow
                                                                            floorNo     = {propData.floorNumber}
                                                                            propNo      = {property.node.title}
                                                                            bedrooms    = {propData.bedrooms}
                                                                            fArea       = {netArea}
                                                                            oArea       = {externalArea}
                                                                            price       = {0}
                                                                        />
                                                                    </div>
                                                                </AniLink>
                                                            )
                                                        // } else {
                                                        //     return (
                                                        //         // <Link to={"/plan/" + property.node.title}>
                    
                                                        //         <Link
                                                        //             key = {key}
                                                        //             to = {{
                                                        //                 pathname: "/plan/" + property.node.title,
                                                        //                 state: {
                                                        //                     propDetail: property
                                                        //                 }
                                                        //             }}            
                                                        //         >
                    
                                                        //             <div 
                                                        //                 key             = {key}
                                                        //                 onMouseEnter    = {() => this.apartmentController(parseInt(property.acf.building_side - 1), property.node.title)}
                                                        //                 onMouseLeave    = {() => this.apartmentClose(parseInt(property.acf.building_side - 1), property.node.title)}
                                                        //                 className       = {"apartment apartment-" + property.node.title + ((property.acf.sold_status === "on-hold") ? " onhold" : "")}
                                                                        
                                                        //             >
                                                        //                 <PropertyRow
                                                        //                     floorNo     = {propData.floorNumber}
                                                        //                     propNo      = {property.node.propertiesData.title}
                                                        //                     bedrooms    = {propData.bedrooms}
                                                        //                     fArea       = {netArea}
                                                        //                     oArea       = {externalArea}
                                                        //                     price       = {0}
                                                        //                 />
                                                        //             </div>
                                                        //         </Link>
                                                        //     )
                                                        // }
                                                    } else {
                                                        return null;
                                                    }

                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </section>
            )
        // } else {
        //     // Loading Animation

        //     return (
        //         <div>
        //             <h1>Loading ...</h1>
        //         </div>
        //     )
        // }
    }
}

export default BuildingModule;