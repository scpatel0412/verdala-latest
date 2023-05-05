import React, { Component }     from 'react';
// import { withRouter }           from 'react-router-dom'
import { Link }                 from "gatsby";
import PropertyRow              from './propertyRow';
// import Dropdown             	from 'react-dropdown'
import Filter                   from '../../utils/filter';
import Events                   from '../../utils/eventHandler';
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
                delay: 40,
                stops: [0, 150, 200],
                lastFrame: 224,
            },
        ]
		
		this.filterStyle1 = [
			{ value: '-1', label: 'Any' },
			{ value: '3', label: '3' },
			{ value: '4', label: '4' },
			{ value: '5', label: '5' },
			{ value: '6', label: '6' },
			{ value: '7', label: '7' },
			{ value: '8', label: '8' },
			{ value: '9', label: '9' },
			{ value: '13', label: '13' },
			{ value: '14', label: '14' },
			{ value: '15', label: '15' },
			{ value: '16', label: '16' },
			{ value: '17', label: '17' },
			{ value: '18', label: '18' },
			{ value: '19', label: '19' },
			{ value: '20', label: '20' },
			{ value: '21', label: '21' },
			{ value: '22', label: '22' },		
			{ value: '23', label: '23' },		
			{ value: '24', label: '24' },		
			{ value: '25', label: '25' },		
			{ value: '26', label: '26' },		
			{ value: '27', label: '27' },		
			{ value: '28', label: '28' },		
			{ value: '29', label: '29' },		
			{ value: '30', label: '30' },		
			{ value: '31', label: '31' }		
        ]

        this.filterStyle5 = [
			{ value: '-1', label: 'Any' },
			{ value: '2', label: '2' },
			{ value: '3', label: '3' },
			{ value: '4', label: '4' },
			{ value: '5', label: '5' },
			{ value: '6', label: '6' },
			{ value: '7', label: '7' },
			{ value: '8', label: '8' },
        ]
        
        this.filterStyle3 = [
			{ value: '-1', label: 'All' },
			{ value: '1', label: '1' },
		]
        this.filterStyle6 = [
			{ value: '-1', label: 'All' },
			{ value: '1', label: '1' },
			{ value: '2', label: '2' },
			{ value: '3', label: '3' },
		]
		
		this.filterStyle2 = [
			{ value: 'available', label: 'Available' },
			{ value: 'on-hold', label: 'On Hold' },
			{ value: 'sold', label: 'Sold' },
			{ value: '-1', label: 'All' },
        ]
        
        this.filterStyle4 = [
			{ value: 'grand', label: 'Verdala Grand' },
			{ value: 'mercury-towers-p2', label: 'Verdala Royal' },
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
                
                window.history.pushState({},"", "/floorplans-availability/" + building);

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

        if ( result && result.acf.sold_status === "sold") {
                   
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

        // if ( this.props.properties[index - 1] ) {
            let windows = this.state.windows;

            if ( result ) {
                if ( !this.checkDuplicateWindow(result, windows, true) ) {
                    let xPos = (elementPos.x < 130) ? elementPos.right + 10 : elementPos.x - 130;

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
        
        // }
    }

    checkDuplicateWindow(object, list, setValue) {
        if ( list.length > 0 ) {
            for (var i = 0; i < list.length; i++) {
                if (object) {
                    if (list[i].selectedProp.id === object.id) {
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

        if ( value === "-1" ) {
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
                } else if (field === "size" || field === "external_area") {
                    var a_gfa             = (a.acf.gfa_sqm) ? parseFloat(a.acf.gfa_sqm) : 0;
                    var a_external_ne     = (a.acf.external_ne) ? parseFloat(a.acf.external_ne) : 0;
                    var a_external_e      = (a.acf.external_e) ? parseFloat(a.acf.external_e) : 0;
                    var a_external_se     = (a.acf.external_se) ? parseFloat(a.acf.external_se) : 0;
                    var a_external_sw     = (a.acf.external_sw) ? parseFloat(a.acf.external_sw) : 0;
                    var b_gfa             = (b.acf.gfa_sqm) ? parseFloat(b.acf.gfa_sqm) : 0;
                    var b_external_ne     = (b.acf.external_ne) ? parseFloat(b.acf.external_ne) : 0;
                    var b_external_e      = (b.acf.external_e) ? parseFloat(b.acf.external_e) : 0;
                    var b_external_se     = (b.acf.external_se) ? parseFloat(b.acf.external_se) : 0;
                    var b_external_sw     = (b.acf.external_sw) ? parseFloat(b.acf.external_sw) : 0;

                    if ( field === "size" ) {
                        testA = a_gfa + a_external_ne + a_external_e + a_external_se + a_external_sw;
                        testB = b_gfa + b_external_ne + b_external_e + b_external_se + b_external_sw;
                    } else {
                        testA = a_external_ne + a_external_e + a_external_se + a_external_sw;
                        testB = b_external_ne + b_external_e + b_external_se + b_external_sw;
                    }

                } else {
                    testA = parseInt(a.acf[field]);
                    testB = parseInt(b.acf[field]);
                }

                if(testA > testB) { return -1; }
                if(testA < testB) { return 1; }
                return 0;
            })
            
        } else {
            this.clearClasses();
            
            elem.classList.add("selected");

            this.state.properties.sort(function(a, b){
                var testA;
                var testB;

                if (field === "property_number") {
                    testA = parseInt(a.node.title);
                    testB = parseInt(b.node.title);
                } else if (field === "size" || field === "external_area") {
                    var a_gfa             = (a.acf.gfa_sqm) ? parseFloat(a.acf.gfa_sqm) : 0;
                    var a_external_ne     = (a.acf.external_ne) ? parseFloat(a.acf.external_ne) : 0;
                    var a_external_e      = (a.acf.external_e) ? parseFloat(a.acf.external_e) : 0;
                    var a_external_se     = (a.acf.external_se) ? parseFloat(a.acf.external_se) : 0;
                    var a_external_sw     = (a.acf.external_sw) ? parseFloat(a.acf.external_sw) : 0;
                    var b_gfa             = (b.acf.gfa_sqm) ? parseFloat(b.acf.gfa_sqm) : 0;
                    var b_external_ne     = (b.acf.external_ne) ? parseFloat(b.acf.external_ne) : 0;
                    var b_external_e      = (b.acf.external_e) ? parseFloat(b.acf.external_e) : 0;
                    var b_external_se     = (b.acf.external_se) ? parseFloat(b.acf.external_se) : 0;
                    var b_external_sw     = (b.acf.external_sw) ? parseFloat(b.acf.external_sw) : 0;

                    if ( field === "size" ) {
                        testA = a_gfa + a_external_ne + a_external_e + a_external_se + a_external_sw;
                        testB = b_gfa + b_external_ne + b_external_e + b_external_se + b_external_sw;
                    } else {
                        testA = a_external_ne + a_external_e + a_external_se + a_external_sw;
                        testB = b_external_ne + b_external_e + b_external_se + b_external_sw;
                    }

                } else {
                    testA = parseInt(a.acf[field]);
                    testB = parseInt(b.acf[field]);
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
            let prevStop = this.state.stop;

            if ( next ) {

                this.setState({
                    stop: (this.state.stop === this.state.buildingData.stops.length-1) ? 0 : (this.state.stop + 1)
                })

                if ( prevStop === this.state.buildingData.stops.length-1 && this.state.buildingData.name === "mercury-towers-p2" ) {
                    this.prevInterval = setInterval(() => {
                        this.prevAnim();
                    },this.state.buildingData.delay)
                } else {
                    this.nextInterval = setInterval(() => {
                        this.nextAnim();
                    },this.state.buildingData.delay)
                }

                this.setState({
                    animating: true,
                })

            } else {

                this.setState({
                    stop: (this.state.stop === 0) ? this.state.buildingData.stops.length-1 : (this.state.stop - 1)
                })

                if ( prevStop === 0 && this.state.buildingData.name === "mercury-towers-p2" ) {
                    this.nextInterval = setInterval(() => {
                        this.nextAnim();
                    },this.state.buildingData.delay)
                } else {
                    this.prevInterval = setInterval(() => {
                        this.prevAnim();
                    },this.state.buildingData.delay)
                }
                
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

                if ( this.state.buildingData.name === "mercury-towers-p2") {
                    dir = !dir;
                }

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
                        <h1>Grand Mansions</h1>
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
                                    <svg x="0px" y="0px"
                                        viewBox="0 0 1920 1440" style={{enableBackground: "new 0 0 1920 1440"}}>
                                    <g id="_826">
                                        <path fill="transparent" d="M1434.5,486.5c5.9-0.8,144.5,4.4,144.5,4.4s16.9,14.4,22,15.3c5.1,0.8,72.5-0.4,73.2,2.6s0,23.7,0,23.7
                                            l-239.8-2.6l-0.3-30.3"/>
                                    </g>
                                    <g id="_731">
                                        <path fill="transparent" d="M1543.9,534.7c0,0,137.3-1.1,130.6,1.5s-57,11.6-57,13.1s-1.5,20.6,0.4,20.6s57.7-2.6,56.6,0
                                            c-1.1,2.6,1.2,23.3,0.2,24c-0.9,0.8-130.8,1.5-130.8,1.5V534.7z"/>
                                    </g>
                                    <g id="_639">
                                        <path fill="transparent" d="M1545.4,656.7c0,0,129.3,2.3,129.6,0c0.3-2.3,2.1-22.5-0.5-22.9s-55.5,0-55.5,0v-24
                                            c0,0,60.6-10.1,56-10.9c-4.6-0.8-129.6,0-129.6,0V656.7z"/>
                                    </g>
                                    <g id="_539">
                                        <path fill="transparent" d="M1545.4,661.6c0,0,134.3-3.4,129.1-1.5c-5.2,1.9-55.1,8.6-55.1,10.1s0.8,25.2,0.8,25.2s58.2,0,58.2,2.3
                                            c0,2.3,1.1,22.3,0,22.4s-132.9,0-132.9,0V661.6z"/>
                                    </g>
                                    <g id="_440">
                                        <path fill="transparent" d="M1545.4,730.6c0,0-1.5,43.2,0,43.5c1.5,0.4,106.2,2.6,108.1,0s4.1-21.3,1.5-21.1
                                            c-2.6,0.1-36.4-1.8-36.4-1.8l0.8-19.1L1545.4,730.6z"/>
                                    </g>
                                    <g id="_441">
                                        <path fill="transparent" d="M1542,730.6h-134c0,0,14.3,6,19.5,11.6c5.3,5.6,12.8,18.8,12.8,27.8c0,9,0,5.4,0,5.4l101.7-2V730.6z"/>
                                    </g>
                                    <g id="_341">
                                        <polygon fill="transparent" points="1522.9,783.6 1522.9,832 1441.8,832 1441.8,780.6 1520.6,780.6 	"/>
                                    </g>
                                    <g id="_241">
                                        <path fill="transparent" d="M1522.9,839.9l-81.1-1.9c0,0,0.4,28.9,0,34.9c-0.4,6-4.9,17.3-4.9,17.3h86V839.9z"/>
                                    </g>
                                    <g id="_340">
                                        <path fill="transparent" d="M1525.9,830.1c3.4,0,119.4,2.6,123.9,1.9c4.5-0.8,6.5-3.4,6.5-3.4s-0.1-21.4-1.6-22.3
                                            c-1.5-0.9-51.8-5.4-51.8-5.4l-0.8-18.4h-76.2V830.1z"/>
                                    </g>
                                    <g id="_240">
                                        <path fill="transparent" d="M1525.9,840.3c3.4,0,98.4-2.3,98.4-2.3s-1.9,16.1,0,16.1s29.3,4.1,30.4,7.5s3.5,20.6,1.6,23.3
                                            c-1.9,2.6-13.1,5.6-44.1,5.3c-31-0.4-86.2,0-86.2,0V840.3z"/>
                                    </g>
                                    <g id="_540">
                                        <polygon fill="transparent" points="1541.8,661.6 1437.3,661.6 1435.8,720.1 1542,720.1 	"/>
                                    </g>
                                    <g id="_640">
                                        <path fill="transparent" d="M1541.8,657.7c-3.9-1.4-104.6,0-104.6,0v-59.1h104.6V657.7z"/>
                                    </g>
                                    <g id="_732">
                                        <polygon fill="transparent" points="1539.4,594 1539.4,534.4 1435.8,534.4 1437.3,594 	"/>
                                    </g>
                                    <g id="_541">
                                        <rect x="1220.3" y="661.6" fill="transparent" width="212.9" height="58.5"/>
                                    </g>
                                    <g id="_641">
                                        <rect x="1220.3" y="598.5" fill="transparent" width="212.9" height="59.1"/>
                                    </g>
                                    <g id="_733">
                                        <rect x="1220.3" y="534.4" fill="transparent" width="209.5" height="59.6"/>
                                    </g>
                                    <g id="_827">
                                        <path fill="transparent" d="M1220.3,529.8c0,0,1.5-40.9,0-43c-1.5-2.1,209.5,0,209.5,0v43H1220.3z"/>
                                    </g>
                                    <g id="_442">
                                        <path fill="transparent" d="M1232.3,735.5h95.7c0,0,19.9,4.2,23.7,17.9c3.8,13.7,4.1,29,4.1,29h-120.9L1232.3,735.5z"/>
                                    </g>
                                    <g id="_342">
                                        <rect x="1234.9" y="785.8" fill="transparent" width="119.4" height="58.2"/>
                                    </g>
                                    <g id="_242">
                                        <path fill="transparent" d="M1234.9,847.8h120.9l2.3,33.8h67.6c0,0-2.3,21-27.8,22.9c-25.5,1.9-162.9,2.3-162.9,2.3V847.8z"/>
                                    </g>
                                    <g id="_415">
                                        <rect x="1023.6" y="735.5" fill="transparent" width="208.7" height="46.9"/>
                                    </g>
                                    <g id="_615">
                                        <rect x="1069.4" y="598.5" fill="transparent" width="146.8" height="61"/>
                                    </g>
                                    <g id="_715">
                                        <path fill="transparent" d="M1214.7,534.4h-144.7c0,0-0.8,61.1,0,61.1s146.2,0,146.2,0L1214.7,534.4z"/>
                                    </g>
                                    <g id="_315">
                                        <polygon fill="transparent" points="1232.5,785.8 1023.6,785.8 1023.6,844 1232.3,844 	"/>
                                    </g>
                                    <g id="_215">
                                        <rect x="1023.6" y="847.8" fill="transparent" width="206.6" height="57.4"/>
                                    </g>
                                    <g id="_216">
                                        <rect x="918.8" y="847.8" fill="transparent" width="100.6" height="57.4"/>
                                    </g>
                                    <g id="_316">
                                        <rect x="918.8" y="785.8" fill="transparent" width="100.6" height="56.7"/>
                                    </g>
                                    <g id="_416">
                                        <rect x="918.8" y="735.5" fill="transparent" width="100.6" height="45"/>
                                    </g>
                                    <g id="_417">
                                        <polygon fill="transparent" points="816.7,780.6 914.3,780.6 915.8,735.5 814.8,735.5 	"/>
                                    </g>
                                    <g id="_317">
                                        <polyline fill="transparent" points="817.1,785.8 915.8,785.8 915.8,842.5 814.8,841.4 814.8,785.8 	"/>
                                    </g>
                                    <g id="_217">
                                        <polygon fill="transparent" points="913.8,846.8 812.8,848.3 812.8,905.7 913.8,905.7 	"/>
                                    </g>
                                    <g id="_218">
                                        <polygon fill="transparent" points="808.8,847.8 708.6,847.8 711.6,905.2 808.8,906.7 	"/>
                                    </g>
                                    <g id="_318">
                                        <path fill="transparent" d="M810.7,842.5c-1.5-0.4-102.1,0-102.1,0v-56.7h102.1V842.5z"/>
                                    </g>
                                    <g id="_418">
                                        <polyline fill="transparent" points="810.7,780.6 810.7,735.5 708.6,735.5 708.6,780.6 810.7,782.5 	"/>
                                    </g>
                                    <g id="_419">
                                        <path fill="transparent" d="M703.4,780.6H603.1c0,0,0.4-45,2.3-45s99.9,0,99.9,0L703.4,780.6z"/>
                                    </g>
                                    <g id="_319">
                                        <polygon fill="transparent" points="703.7,785.8 603.1,785.8 603.1,842.5 703.7,844 	"/>
                                    </g>
                                    <g id="_219">
                                        <path fill="transparent" d="M703.7,847.8H603.1c0,0-1.5,55.9,0,55.9s102.1,1.6,102.1,1.6L703.7,847.8z"/>
                                    </g>
                                    <g id="_220">
                                        <path fill="transparent" d="M496.5,847.8c1.5,1.2,101,0,101,0v57.4h-92.4c0,0-9.8-15.6-10.1-19.9c-0.4-4.3-1.5-37.5-1.5-37.5"/>
                                    </g>
                                    <g id="_320">
                                        <polygon fill="transparent" points="495.7,844 496.1,785.8 597.5,785.8 597.5,844 	"/>
                                    </g>
                                    <g id="_420">
                                        <path fill="transparent" d="M495.7,780.6c0,0-1.5-20.6,0-25.9c1.5-5.3,6-19.1,6-19.1h100.7l-5,46.9H495.7"/>
                                    </g>
                                    <g id="_421">
                                        <path fill="transparent" d="M493.5,780.6c-4.1,0.4-153.5,0-153.5,0s-2.3-16.9,1.5-22.5c3.8-5.6,21-20.3,26.7-20.6s129.9,0,129.9,0
                                            s-4.1,14.3-4.5,22.9"/>
                                    </g>
                                    <g id="_321">
                                        <polyline fill="transparent" points="493.5,785.8 340.7,785.8 340.7,844 493.5,844 	"/>
                                    </g>
                                    <g id="_221">
                                        <path fill="transparent" d="M490.9,847.8H339.3c0,0-1.2,30.4,1.4,36c2.6,5.6,8.3,21.8,40.9,22.9s118.6,0,118.6,0s-9-22.5-9.4-26.7"
                                            />
                                    </g>
                                    <g id="_516">
                                        <path fill="transparent" d="M1051.9,662.7H918.8l2.4,57.3c0,0,92.5,2.7,102.3,0.6s32.8-15.6,33.4-30.5s0-27.3,0-27.3"/>
                                    </g>
                                    <g id="_616">
                                        <path fill="transparent" d="M1057.2,657.7c-3.1-1.8-138.4,0-138.4,0v-59.1h138.4V657.7z"/>
                                    </g>
                                    <g id="_716">
                                        <rect x="918.8" y="534.4" fill="transparent" width="138.4" height="57.9"/>
                                    </g>
                                    <g id="_816">
                                        <path fill="transparent" d="M810.7,529.8v-44.9c0,0,177.3,1,205.2,1.5c18.3,0.3,37.7,0.8,38.9,21c1.1,20.2,0,22.5,0,22.5H810.7z"/>
                                    </g>
                                    <g id="_717">
                                        <path fill="transparent" d="M915.8,534.4H810.7c0,0-3.6,59.2,0,57.8c3.6-1.4,105.1,0,105.1,0V534.4z"/>
                                    </g>
                                    <g id="_617">
                                        <path fill="transparent" d="M914,598.5c-2.6-0.4-103.2,0-103.2,0s-3.2,58.6-1.6,59.1c1.6,0.5,104.8,0,104.8,0V598.5z"/>
                                    </g>
                                    <g id="_517">
                                        <path fill="transparent" d="M914,662.7c-1.9-0.8-104.8,0-104.8,0l4.2,57.3h102.5l-1.9-55.4"/>
                                    </g>
                                    <g id="_518">
                                        <path fill="transparent" d="M804.3,662.4c-1.5-0.8-102.9-1.5-102.9-1.5l2.3,59.2h105L804.3,662.4z"/>
                                    </g>
                                    <g id="_618">
                                        <polygon fill="transparent" points="805.1,657.7 701.5,657.7 701.5,598.5 805.1,598.4 	"/>
                                    </g>
                                    <g id="_718">
                                        <rect x="701.5" y="534.4" fill="transparent" width="103.6" height="57.9"/>
                                    </g>
                                    <g id="_817">
                                        <polygon fill="transparent" points="805.1,529.8 806.6,484.9 703.5,484.9 701.5,529.8 	"/>
                                    </g>
                                    <g id="_719">
                                        <rect x="594.5" y="534.4" fill="transparent" width="102.9" height="57.9"/>
                                    </g>
                                    <g id="_619">
                                        <polygon fill="transparent" points="697.3,598.4 592.6,596.6 592.6,657.7 697.3,657.9 	"/>
                                    </g>
                                    <g id="_519">
                                        <path fill="transparent" d="M697.3,662.4H592.6c0,0-0.8,57.9,0,57.6c0.8-0.2,106.2,0,106.2,0L697.3,662.4z"/>
                                    </g>
                                    <g id="_520">
                                        <path fill="transparent" d="M587,662.4l-103.6-1.5c0,0-2.6,27,0,34.9s2.3,24.3,2.3,24.3l101.4,0V662.4z"/>
                                    </g>
                                    <g id="_620">
                                        <polygon fill="transparent" points="587,657.7 482.2,656.3 482.2,598.4 587,596.6 	"/>
                                    </g>
                                    <g id="_720">
                                        <rect x="484.5" y="534.4" fill="transparent" width="104.4" height="57.9"/>
                                    </g>
                                    <g id="_818">
                                        <path fill="transparent" d="M698.8,529.8H484.5c0,0-0.4-35.7,2.3-40.2s18.4-4.7,18.4-4.7h193.7V529.8z"/>
                                    </g>
                                    <g id="_819">
                                        <path fill="transparent" d="M482.2,484.9c-3,0.6-128.7,0-128.7,0s-54.4-3.2-63.8,0c-9.4,3.2-24.8,9.2-25.2,24.3
                                            c-0.4,15-1.9,20.4,0,20.7c1.9,0.3,214.7-0.3,216.2,0c1.5,0.3,0.3-35.7,1.5-39.1"/>
                                    </g>
                                    <g id="_721">
                                        <polygon fill="transparent" points="480.7,534.4 266.4,534.4 263.6,592.3 480.7,594.7 	"/>
                                    </g>
                                    <g id="_621">
                                        <polygon fill="transparent" points="479.2,598.4 263.6,596.6 261.9,655.9 479.2,655.9 	"/>
                                    </g>
                                    <g id="_521">
                                        <path fill="transparent" d="M479.2,660.8H263.6c0,0-5.8,31.9,0,39c5.8,7.1,5.8,19.3,32.8,20.1s184.3,0,184.3,0L479.2,660.8z"/>
                                    </g>
                                    <g id="_515">
                                        <path fill="transparent" d="M1216.2,662.7c-1.9,1.1-146.8,0-146.8,0v26.5c0,0-3.4,24.5-25.6,36h172.4V662.7z"/>
                                    </g>
                                    <g id="_815">
                                        <path fill="transparent" d="M1216.2,532.6h-146.8c0,0,1.4-21.4,0-26.7c-1.4-5.3-6.6-17.2-14.1-23.9l160.9,3V532.6z"/>
                                    </g>
                                    </svg>

                                </div>

                                <div id="mask-1" className={"mask-overlay " + ((this.state.stop === 1) ? "active-mask" : "")}>
                                    <svg x="0px" y="0px"
                                        viewBox="0 0 1920 1440" style={{enableBackground: "new 0 0 1920 1440"}}>
                                    <g id="_435">
                                        <path fill="transparent"  d="M1466.9,793.3c0,0,235.9,7.9,236.5,2.3c0.6-5.6,0-32.7,0-32.7s-12.4-10.7-33.2-11.3
                                            c-20.8-0.6-36,0-36,0v-14.1h-175.7c0,0,6.2,11.8,6.2,19.7C1464.7,765.2,1466.9,793.3,1466.9,793.3z"/>
                                    </g>
                                    <g id="_335">
                                        <path fill="transparent"  d="M1465.3,797.6l171.2,3.6v20.8c0,0,69.8,7.3,69.8,14.1s4.5,23.1,0,27.6c-4.5,4.5-12.4,4.5-43.4,5.6
                                            s-197.7,0-197.7,0"/>
                                    </g>
                                    <g id="_235">
                                        <path fill="transparent"  d="M1465.3,873.9h171.2v15.8c0,0,64.7,6.2,67.3,19.1c2.6,13,5.9,27,0,29.3s-240.7,0-240.7,0
                                            s5.1-24.3,5.6-31.6C1469.2,899.2,1465.3,873.9,1465.3,873.9z"/>
                                    </g>
                                    <g id="_236">
                                        <path fill="transparent"  d="M1461.3,871.3c0,0,3.7,37.5,1.7,49.6c-2,12.1-4.5,16.1-4.5,16.1l-297,0.4l2.8-66.2H1461.3z"/>
                                    </g>
                                    <g id="_336">
                                        <polygon fill="transparent"  points="1461.7,866.5 1463,797.6 1164,797.6 1164,866.5 	"/>
                                    </g>
                                    <g id="_436">
                                        <path fill="transparent"  d="M1460.9,753.5c-0.9-7.9-5.3-16-5.3-16h-294.2c0,0,2.5,15.2,2.5,23.4c0,8.2,0,31.5,0,31.5h299"/>
                                    </g>
                                    <g id="_237">
                                        <path fill="transparent"  d="M1160.1,871.3l-2.3,67.7c0,0-255.9,1.4-263.5,0.1c-7.6-1.3-33.2-10.9-35.8-27.8s0-40,0-40H1160.1z"/>
                                    </g>
                                    <g id="_337">
                                        <rect fill="transparent"  x="859.3" y="797.6" width="300.8" height="68.9"/>
                                    </g>
                                    <g id="_437">
                                        <path fill="transparent"  d="M1160.1,792.5c-1.4,0-300.8,0-300.8,0s-4.5-22.2,2.8-31c7.3-8.7,22.2-21.1,30.7-22.2
                                            s264.9-1.7,264.9-1.7L1160.1,792.5z"/>
                                    </g>
                                    <g id="_238">
                                        <path fill="transparent"  d="M811.5,866.5c-1.7-0.3-134.3,0-134.3,0s1.1,66.7,2,66.7s93.8,0,93.8,0s32.9-3.7,38.6-32.1"/>
                                    </g>
                                    <g id="_338">
                                        <rect fill="transparent"  x="677.2" y="793.9" width="134.3" height="67"/>
                                    </g>
                                    <g id="_438">
                                        <path fill="transparent"  d="M811.5,788.6c0,0,2.3-11,0-20.3c-2.3-9.3-18.6-32.1-39.4-32.4c-20.8-0.3-91.8,0-91.8,0
                                            s-2.8,12.1-3.1,21.7c-0.3,9.6,0,32.9,0,32.9h134.3"/>
                                    </g>
                                    <g id="_439">
                                        <path fill="transparent"  d="M672.9,790.5c0,0-0.7-32.4,0-40c0.3-3.5,5.6-14.8,5.6-14.8H547.4c0,0-4.2,15.2-4.5,27.4
                                            s-1.1,27.4-1.1,27.4"/>
                                    </g>
                                    <g id="_339">
                                        <polygon fill="transparent"  points="673.5,793.9 542.9,793.9 541.7,860.9 673.5,860.9 	"/>
                                    </g>
                                    <g id="_239">
                                        <polyline  fill="transparent"points="672.4,866.4 541.7,866.5 541.7,933.3 674.9,933.3 	"/>
                                    </g>
                                    <g id="_240">
                                        <path fill="transparent"  d="M538.4,866.4v66.9c0,0-357,2.3-364.6,0.3s-16-0.6-15.5-8.5c0.6-7.9,1.7-27,1.7-27s30.4-6.5,31-11.3
                                            c0.6-4.8-1.1-20.4-1.1-20.4H538.4z"/>
                                    </g>
                                    <g id="_340">
                                        <path fill="transparent"  d="M538.4,859.2c0,0-358.1,3.4-364.9,1.7c-6.8-1.7-13.2-2.3-13.2-6.5s0-25.3,0-25.3s-1.4-5.3,27-6.2
                                            s15.8,0,15.8,0l2-29h333.4V859.2z"/>
                                    </g>
                                    <g id="_440">
                                        <path fill="transparent"  d="M538.5,790.5c8.2,0-371,0.3-374.7-2.3c-3.7-2.5-3.7-23.5-2.5-25.1s42.5,0.3,42.5-5.6
                                            c0-5.9,1.1-21.8,1.1-21.8h338.8c0,0-3.8,10-3.8,15.9"/>
                                    </g>
                                    <g id="_539">
                                        <path fill="transparent"  d="M545.4,711.9v-57.4H233.3c0,0,8.3,28.5,0,30s-56.3,3.8-57.1,6c-0.8,2.3,0,21.4,0,21.4H545.4z"/>
                                    </g>
                                    <g id="_639">
                                        <path fill="transparent"  d="M545.4,651.1c-1.1,0-369.5,0-369.5,0s-3.7-22.1,0-22.9c3.7-0.8,58.5-2.6,58.5-2.6l0.9-33.2h310V651.1z"
                                            />
                                    </g>
                                    <g id="_731">
                                        <path fill="transparent"  d="M545.4,589.5c0,0-369.8,1.1-369.5-0.4c0.3-1.5-0.8-20.6,2.6-21.8c3.4-1.1,54.1,2.6,56-1.5
                                            c1.9-4.1-1.5-33.9,0.8-34.6c2.2-0.8,310.2-0.3,310.2-0.3V589.5z"/>
                                    </g>
                                    <g id="_826">
                                        <path fill="transparent"  d="M426.3,526.4c0,0-247.7,3.4-248.1,0.8c-0.4-2.6-4.1-50.3,0-49.9c4.1,0.4,243.8-2,246.8-2.7L426.3,526.4
                                            z"/>
                                    </g>
                                    <g id="_825">
                                        <path fill="transparent"  d="M426.3,526.4c0,0-1.9-29.3,0-38.3c2-9,6.2-14.4,6.2-14.4H609c0,0,22.5,6.2,24.2,21.1
                                            c1.7,14.9,2,31.5,2,31.5H426.3z"/>
                                    </g>
                                    <g id="_730">
                                        <polygon fill="transparent"  points="636.3,531.2 635.2,589.5 550.7,589.5 550.7,531.2 	"/>
                                    </g>
                                    <g id="_638">
                                        <polygon fill="transparent"  points="635.2,593.4 550.7,593.4 549.4,651.1 635.2,650 	"/>
                                    </g>
                                    <g id="_538">
                                        <path fill="transparent"  d="M635.2,654.4v31.6c0,0-11.5,25.7-22,25.8s-62.5,0-62.5,0s-0.4-18.5-1.3-21.6s0-35.9,0-35.9H635.2z"/>
                                    </g>
                                    <g id="_729">
                                        <path fill="transparent"  d="M925.2,531.2H668.8c0,0,29.3,0.1,29.7,11.7c0.4,11.6-3.4,11.6-3.4,11.6s-46.6-1.9-48.1,2.3
                                            s-0.4,27.4,0,27.4c0.4,0,28.5-2.6,54.8-2.6c26.3,0,223.4-2.6,223.4-2.6"/>
                                    </g>
                                    <g id="_637">
                                        <path fill="transparent"  d="M925.2,584.2l-1.1,63.4H646.3c0,0-3-22.1,0-22.9c3-0.8,50.7,3.2,51.1-2.5s4.1-22.2,0-24.1
                                            c-4.1-1.9-51.8-11.3-46.9-12C655.3,585.4,925.2,584.2,925.2,584.2z"/>
                                    </g>
                                    <g id="_537">
                                        <path fill="transparent"  d="M924.1,651.1H648.5c0,0,46.6,7.5,47.3,12c0.8,4.5,6,24.8,1.1,24.8s-48.1-1.5-48.4,2.6
                                            c-0.4,4.1-5.3,24.8,0,25.2c5.3,0.4,276.7,0.2,276.7,0.2L924.1,651.1z"/>
                                    </g>
                                    <g id="_728">
                                        <polyline  fill="transparent"points="929.7,579 929.7,533.1 1307.8,530.5 1307.8,579 1058.1,579 	"/>
                                    </g>
                                    <g id="_636">
                                        <rect fill="transparent"  x="929.7" y="584.2" width="381.2" height="63.4"/>
                                    </g>
                                    <g id="_536">
                                        <path fill="transparent"  d="M1311.1,652.9c-2.3,1.9-381.4-1.9-381.4-1.9v64.7h381.2L1311.1,652.9z"/>
                                    </g>
                                    <g id="_535">
                                        <path fill="transparent"  d="M1314.9,652.6c1.5,1.5,312.3-4.9,304.8-1.5c-7.5,3.4-66.1,7.1-66.4,12c-0.4,4.9-5.6,28.5-0.8,28.9
                                            c4.9,0.4,85.6,0,85.6,0s-11.3,24-23.7,24.6c-12.4,0.6-299.6,0-299.6,0"/>
                                    </g>
                                    <g id="_635">
                                        <path fill="transparent"  d="M1314.9,647.7c0,0-2.3-62.7-1.5-63.4c0.8-0.8,309.3-1.5,305.6,0s-65.7,12.8-66.1,18
                                            c-0.4,5.3-0.4,20.6-0.4,20.6s68.7-1.9,69.1,0.8c0.4,2.6,0,24,0,24"/>
                                    </g>
                                    <g id="_727">
                                        <path fill="transparent"  d="M1314.9,579h305.6c0,0,4.9-24.8,0-24.8s-68.7,0-68.7,0s-0.9-10.1,2.1-19.3c1.3-3.9-14.3-4.6-14.3-4.6
                                            l-226.2-0.9"/>
                                    </g>
                                    </svg>
                                </div>

                                <div id="mask-0" className={"mask-overlay " + ((this.state.stop === 0) ? "active-mask" : "")}>
                                    <svg x="0px" y="0px"
                                            viewBox="0 0 1920 1440" style={{enableBackground: "new 0 0 1920 1440"}}>
                                    <g id="_322">
                                        <polygon fill="transparent" points="1600.3,1008.6 1595.5,1008.6 1451.9,958.5 1448.7,848.7 1600.3,884.7 	"/>
                                    </g>
                                    <g id="_323">
                                        <polygon fill="transparent" points="1443.8,848.7 1311.4,819.4 1311.4,909.1 1443.8,954.2 	"/>
                                    </g>
                                    <g id="_324">
                                        <polygon fill="transparent" points="1306,819.4 1306,907.2 1213.3,876.1 1213.3,798 	"/>
                                    </g>
                                    <g id="_325">
                                        <polygon fill="transparent" points="1206.6,798 1136.7,782.6 1136.7,848.7 1206.6,873.4 	"/>
                                    </g>
                                    <g id="_326">
                                        <polygon fill="transparent" points="1131.8,782.6 1096.2,771.7 1096.2,835.9 1131.8,847.2 	"/>
                                    </g>
                                    <g id="_426">
                                        <path fill="transparent" d="M1142.7,722.5l-25.9-2.5c0,0-15.3-2-18.7,14.9c-3.4,16.9-1.8,33-1.8,33l35.6,9.8v-28.9
                                            C1131.8,748.8,1134.5,731.5,1142.7,722.5z"/>
                                    </g>
                                    <g id="_425">
                                        <path fill="transparent" d="M1219.3,729.6l-74.3-7.1c0,0-9,15.1-9.8,26.3s0,28.9,0,28.9l73.9,13.1v-34.2
                                            C1209.1,756.7,1212.5,734.5,1219.3,729.6z"/>
                                    </g>
                                    <g id="_424">
                                        <path fill="transparent" d="M1317.7,740.9c0.9-0.8-95.7-9.8-95.7-9.8s-9,12-10.1,25.5c-1.1,13.5,0,34.2,0,34.2l94.2,18.6v-31.7
                                            C1306,777.7,1307.5,750.3,1317.7,740.9z"/>
                                    </g>
                                    <g id="_423">
                                        <path fill="transparent" d="M1457.8,755.5l-135.1-14.1c0,0-10.3,11.8-11.2,25.3c-0.9,13.5-2.6,42.7-2.6,42.7l135,28.8v-41.7
                                            C1443.8,796.6,1448.8,773.5,1457.8,755.5z"/>
                                    </g>
                                    <g id="_422">
                                        <path fill="transparent" d="M1600.3,870.1l-6.5,3.4l-145-32.7c0,0-1.7-44.2,1.4-52.1s11.5-32.9,11.5-32.9l67.6,6.8
                                            c0,0,47,8.2,61.1,45.3S1600.3,870.1,1600.3,870.1z"/>
                                    </g>
                                    <g id="_522">
                                        <path fill="transparent" d="M1457.8,722.5c0,0-6.5-34.9-9-44.2c-2.5-9.3,0-61.7,0-61.7l278.8-14.4l3.4,16.9
                                            c0,0-23.7,54.1-16.9,92.9c0,0-22,32.4-74.3,29.3c-52.4-3.1-178.2-18.9-178.2-18.9"/>
                                    </g>
                                    <g id="_622">
                                        <polygon fill="transparent" points="1448.7,501.8 1730.9,450.2 1727.5,593 1448.7,610.7 	"/>
                                    </g>
                                    <g id="_722">
                                        <polygon fill="transparent" points="1448.7,492.8 1447.6,385.8 1728.4,296.8 1726.1,439.8 	"/>
                                    </g>
                                    <g id="_723">
                                        <polygon fill="transparent" points="1443.8,387.3 1311.6,429.7 1314.7,520.5 1443.8,496.1 	"/>
                                    </g>
                                    <g id="_724">
                                        <polygon id="fff" fill="transparent" points="1307.1,431.4 1307.1,520.5 1213.7,537.5 1213.7,461.2 	"/>
                                    </g>
                                    <g id="_623">
                                        <polygon fill="transparent" points="1443.8,502.3 1311.6,526.8 1311.6,618.1 1443.8,610.7 	"/>
                                    </g>
                                    <g id="_624">
                                        <polygon fill="transparent" points="1307.1,527.4 1211.7,545.7 1211.7,623.4 1307.1,618.1 	"/>
                                    </g>
                                    <g id="_625">
                                        <polygon fill="transparent" points="1207.8,546 1164.4,553.9 1164.4,626.8 1207.8,624.8 	"/>
                                    </g>
                                    <g id="_525">
                                        <path fill="transparent" d="M1207.8,629.6v41.1c0,0,9.3,32.1,9.3,35.2c0,0-26.5,0.6-31-1.1c-4.5-1.7-22.8-13.3-23.1-32.8
                                            c-0.3-19.5,0-42.3,0-42.3H1207.8z"/>
                                    </g>
                                    <g id="_524">
                                        <path fill="transparent" d="M1211.3,628.5l95.9-5.1v48.5l1.7,41.6l-87.6-7.5c0,0-9.8-30-10-34.1
                                            C1211.1,667.9,1211.3,628.5,1211.3,628.5z"/>
                                    </g>
                                    <g id="_523">
                                        <path fill="transparent" d="M1443.8,618.1l-132.1,5.3l1.1,90.1l141.9,9c0,0-9.9-47.6-10.9-52.2
                                            C1442.9,665.6,1443.8,618.1,1443.8,618.1z"/>
                                    </g>
                                    <g id="_820">
                                        <path fill="transparent" d="M1448.7,378.4v-54.1c0,0,7.1-49.6,17.8-54.6c10.7-5.1,189.8-86.2,189.8-86.2s58.6-16.3,77.1,24.2
                                            c0,0,13,46.2-2.5,79.4L1448.7,378.4z"/>
                                    </g>
                                    <g id="_821">
                                        <path fill="transparent" d="M1443.8,379.9l-132.1,42.5c0,0-1.1-40.5,0-45.6c1.1-5.1,14.1-43.9,14.1-43.9l136.3-61.1
                                            c0,0-14.9,29.8-16,49.8S1443.8,379.9,1443.8,379.9z"/>
                                    </g>
                                    <g id="_822">
                                        <path id="ff" fill="transparent" d="M1163,472.8l144.2-47.1c0,0-1.1-45.2,0-50c1.1-4.8,13.8-39.4,15.8-41.7l-134.3,58.8
                                            c0,0-26.7,19.1-27,55.5C1161.3,484.6,1163,472.8,1163,472.8z"/>
                                    </g>
                                    <g id="_725">
                                        <path fill="transparent" d="M1153.7,509.1l-18,3.1c0,0-7.6,10.1-7.6,25.3s1.4,34.1,1.4,34.1l24.2-5.1V509.1z"/>
                                        <path fill="transparent" d="M1125.8,571.6c-0.3-2.3-0.8-33.8,0-38.3c0.8-4.5,4.8-20,7.3-20.6l-56.9,16.3c0,0-6.8,7.9-7,16.9
                                            c-0.3,9,0,35.5,0,35.5L1125.8,571.6z"/>
                                        <polygon fill="transparent" points="1207.8,462.9 1163,477.3 1164.4,549.4 1207.8,542 	"/>
                                    </g>
                                    <g id="_629">
                                        <polygon fill="transparent" points="962.5,586.4 1019.1,587.6 1019.1,637.8 962.5,637.8 	"/>
                                    </g>
                                    <g id="_628">
                                        <path fill="transparent" d="M1021.1,587.9c0,0,31.3-0.6,37.4-1.5c6.2-1,9-3.2,9-3.2l-2,54.6h-44.5V587.9z"/>
                                    </g>
                                    <g id="_627">
                                        <path fill="transparent" d="M1069.1,584.5c0.7-0.3,56.7-9.2,56.7-9.2v59.5l-58.3,2.8L1069.1,584.5z"/>
                                    </g>
                                    <g id="_626">
                                        <polygon fill="transparent" points="1128.1,575.4 1153.7,570.5 1153.7,632.7 1128.1,634.4 	"/>
                                    </g>
                                    <g id="_526">
                                        <path fill="transparent" d="M1153.7,636.6l-25.6,1.1v36.9c0,0,0.3,19.4,5.1,20.3c4.8,0.8,29.7,0,29.7,0s-9.4-17.9-9.2-27.1
                                            C1154,658.6,1153.7,636.6,1153.7,636.6z"/>
                                    </g>
                                    <g id="_527">
                                        <path fill="transparent" d="M1125.8,637.8c-1.4,0.3-56.7,2.7-56.7,2.7l1.3,52.2l60,2.6c0,0-3.9-4-4.5-8.5s0-47.6,0-47.6"/>
                                    </g>
                                    <g id="_528">
                                        <polyline fill="transparent" points="1067.5,692 1021.1,691.1 1021.1,640.4 1067.5,640.4 1067.5,692 	"/>
                                    </g>
                                    <g id="_529">
                                        <polygon fill="transparent" points="1019.1,641.8 962.5,640.4 962.5,689.5 1019.1,689.5 	"/>
                                    </g>
                                    <g id="_427">
                                        <path fill="transparent" d="M1089.4,750.7l-18-1.9v-53.5l93,2.8l5.3,7.9c0,0-51.1,0.4-60.4,4.5c-9.4,4.1-19.9,21.6-19.9,30.9
                                            C1089.4,750.7,1089.4,750.7,1089.4,750.7z"/>
                                    </g>
                                    <g id="_428">
                                        <path fill="transparent" d="M1022.5,694l45,1.3v51.6c0,0-11.5-3.3-14.6-3s-30.4-0.3-30.4-0.3L1022.5,694z"/>
                                    </g>
                                    <g id="_429">
                                        <path fill="transparent" d="M1019.1,694h-55.2v51.6c0,0,14.9-2.3,23.9-2.3c9,0,31.3,0,31.3,0V694z"/>
                                    </g>
                                    <g id="_327">
                                        <path fill="transparent" d="M1088.4,754c0,0-15.7-3.7-17-2.3c-1.3,1.4-2.3,51-2.3,51l19.3,4.5V754z"/>
                                    </g>
                                    <g id="_328">
                                        <path fill="transparent" d="M1067.5,802.2v-50.7c0,0-2.8-3.2-9-3.3c-6.2-0.1-36-1.2-36-1.2l-0.7,49.5c0,0,16.2-1.5,20.4-0.7
                                            S1048.8,795.7,1067.5,802.2z"/>
                                    </g>
                                    <g id="_329">
                                        <path fill="transparent" d="M1018.5,746.9l-54.6,1.9v53.4c0,0,11.1-4.9,16.3-5.1c5.2-0.1,38.3-1,38.3-1V746.9z"/>
                                    </g>
                                    <g id="_227">
                                        <polygon fill="transparent" points="1088.4,811.8 1069.1,805.9 1069.1,856.8 1088.4,866.1 	"/>
                                    </g>
                                    <g id="_228">
                                        <path fill="transparent" d="M1067.5,805.9c0,0-5.3-3.7-14.1-3.7c-8.7,0-31-1.4-31-1.4v49c0,0,17.2-0.6,26.2,1.4
                                            c9,2,18.9,4.8,18.9,4.8V805.9z"/>
                                    </g>
                                    <g id="_229">
                                        <path fill="transparent" d="M1018.5,800.8c0,0-29.8-1.7-36.9,0c-7,1.7-17.7,3.7-17.7,3.7v23.9c0,0,0,5.9-1.4,9.6
                                            c-1.4,3.7,0,16.3,0,16.3s11.8-4.5,20.3-4.2s36.3-0.3,36.3-0.3L1018.5,800.8z"/>
                                    </g>
                                    <g id="_230">
                                        <path fill="transparent" d="M961.9,804.7l-68.6,12.1c0,0-0.3,40.8-1.1,45.9c-0.8,5.1-2.5,8.2-2.5,8.2L960,856
                                            c0,0-0.1-20.3,1.9-23.9C963.9,828.4,961.9,804.7,961.9,804.7z"/>
                                    </g>
                                    <g id="_330">
                                        <polygon fill="transparent" points="960,750.7 893,756.7 893,814 960,802.2 	"/>
                                    </g>
                                    <g id="_430">
                                        <path fill="transparent" d="M858.3,706c2.5,0.5,100-4.3,100-4.3l1.7,45.2l-67,4.6c0,0-4.5-28.5-13.8-34.9
                                            C872.6,712.1,858.3,706,858.3,706z"/>
                                    </g>
                                    <g id="_231">
                                        <path fill="transparent" d="M836.1,841.9l48.1-5.9c0,0,2,20.6,0,27.9c-2,7.3-10.1,33.2-25.9,36.6s-22.2,3.9-22.2,3.9"/>
                                    </g>
                                    <g id="_232">
                                        <path fill="transparent" d="M831.6,842.7l-95.4,17.2c0,0,1.4,32.4,0,36.3c-1.4,3.9-5.6,28.4-7.3,36.6l105.3-28.4L831.6,842.7z"/>
                                    </g>
                                    <g id="_331">
                                        <path fill="transparent" d="M836.1,836v-63.5l24.5-1.1c0,0,11.2-0.6,19.1-2.1c5.3-1,3.1-1.7,3.1-1.7l0.1,62.2L836.1,836z"/>
                                    </g>
                                    <g id="_431">
                                        <path fill="transparent" d="M836.1,767c0,0,1.1-23.7,0-29.6c-1.1-5.9-8.7-20-8.7-20l25.3-2c0,0,23.9,0.3,27.9,17.7
                                            c3.9,17.5,3.2,31,2.3,30.7C882,763.6,836.1,767,836.1,767z"/>
                                    </g>
                                    <g id="_432">
                                        <path fill="transparent" d="M830.1,768.5c0,0,1.2-28.6,0.4-32.8s-5.1-18.3-5.1-18.3l-96.6,5.1c0,0,4.5,7.6,4.8,15.2s0.6,42,0.6,42
                                            L830.1,768.5z"/>
                                    </g>
                                    <g id="_332">
                                        <polygon fill="transparent" points="735.3,783.6 830.8,774.6 830.8,837.8 736.1,856 	"/>
                                    </g>
                                    <g id="_433">
                                        <path fill="transparent" d="M606.9,729.6c0,0,6.2,12.4,6.8,24.2s0,38.6,0,38.6l116.8-12.7c0,0,0.8-31.8,0-37.2s-3.4-19.4-4.8-19.7
                                            C724.3,722.5,606.9,729.6,606.9,729.6z"/>
                                    </g>
                                    <g id="_333">
                                        <path fill="transparent" d="M613.9,797.4c1.4,0,116.9-12.4,116.9-12.4v71l-116.9,20.6V797.4z"/>
                                    </g>
                                    <g id="_233">
                                        <path fill="transparent" d="M613.9,882.2l118.3-20.6c0,0,1.4,22.2,0,31.5c-1.4,9.3-5.6,39.7-5.6,39.7l-121.4,30.4v-8.7
                                            c0,0,7.9-10.4,8.7-20"/>
                                    </g>
                                    <g id="_530">
                                        <path fill="transparent" d="M917.1,636.6h37.5c0,0,2.6,25.1,0,31.8c-2.6,6.8-10.5,23-18.2,25.6c-7.7,2.6-23.9,1.3-23.9,1.3v-18.6
                                            c0,0,5.6-8.6,6-16.9"/>
                                    </g>
                                    <g id="_531">
                                        <path fill="transparent" d="M912.6,636.6l-76.5-2.3v64.2l74.6-3l0.6-19.5c0.1-2.2,0.8-4.3,2.1-6.1c0.9-1.2,2-3,2.9-5.2
                                            c2.3-5-1-28.2-1-28.2"/>
                                    </g>
                                    <g id="_630">
                                        <polygon fill="transparent" points="917.1,632.7 954.1,632.7 954.1,575.4 918.3,574.1 	"/>
                                    </g>
                                    <g id="_631">
                                        <polygon fill="transparent" points="913.8,632.7 836.1,630.4 835,566 915.2,572.4 	"/>
                                    </g>
                                    <g id="_726">
                                        <path fill="transparent" d="M952.1,572.2l-116-10.7c0,0,2.2-20.6,1-25.4s-5.8-31-5.8-31s91.2,10.8,93.5,11.1
                                            c2.3,0.3,21.4,1.4,25.3,16.9S952.1,572.2,952.1,572.2z"/>
                                        <g>
                                            <path fill="transparent" d="M957.6,533c0,0,40.5,5.1,66.8,3.3s51.8-7.2,51.8-7.2s-8.4,7-8.7,16.9c-0.3,9.9,0,35.5,0,35.5
                                                s-11.9,6.6-46.5,4.9c-34.5-1.6-58.6-3.2-58.6-3.2S962.5,541.8,957.6,533z"/>
                                        </g>
                                    </g>
                                    <g id="_727">
                                        <path fill="transparent" d="M606.9,537.1c0,0-76.9-8.7-117-9.8s-69.8,0-95.7,2.6c-25.9,2.6-231,20.6-231,20.6s1.2-32.2,3.1-37.8
                                            c1.9-5.6,2.9-22.2,7.8-24.5c4.9-2.3,241.5-34.9,261-35.3c19.5-0.4,70.6,1.5,103.6,6.8c33,5.3,281.7,46,281.7,46s7.4,9.1,7,27.3
                                            s0,24.1,0,24.1"/>
                                    </g>
                                    <g id="_633">
                                        <polygon fill="transparent" points="614.5,544.2 733.1,555.5 733.1,627.2 614.5,624.2 	"/>
                                    </g>
                                    <g id="_632">
                                        <polygon fill="transparent" points="831.3,564.6 735.6,556.1 735.6,627.2 831.3,630.2 	"/>
                                    </g>
                                    <g id="_532">
                                        <path fill="transparent" d="M832.5,634.4l-1.2,0l-95.7-1.7v69c0,0,60,0,95.7-2.8"/>
                                    </g>
                                    <g id="_533">
                                        <polygon fill="transparent" points="614.5,629 733.1,632.7 733.1,703.1 614.5,707.6 	"/>
                                    </g>
                                    <g id="_534">
                                        <path fill="transparent" d="M611.1,707.6c-21.8,2.3-62.4,3.1-95.9,5.1c-33.5,2-73.2,1.4-92.1,1.4S263.5,706,263.5,706
                                            c0.6-7-5.8-41.7-6.4-45s-1.5-30.8-1.5-30.8s148-4.2,218.1-4.8s135.2,3.7,135.2,3.7"/>
                                    </g>
                                    <g id="_535">
                                        <path fill="transparent" d="M251.9,630.2c-3.9,1.1-92.9,2.5-92.9,2.5s-3.4,34.6,0,44.2c3.4,9.6,1.1,19.7,16.9,24.8
                                            c15.8,5.1,86.2,5.9,86.2,5.9s-0.2-18.9-2.3-23.7c-2.1-4.9-6.8-30.2-6.6-35.1c0.2-4.9-0.4-18.6-0.4-18.6"/>
                                    </g>
                                    <g id="_635">
                                        <polygon fill="transparent" points="252.4,625.3 160.1,627.2 160.1,559.2 252.4,550.6 	"/>
                                    </g>
                                    <g id="_434">
                                        <path fill="transparent" d="M389.5,807.8c0,0,2.5-28.2-0.8-38.7c-3.4-10.5-13.2-29.7-32.9-34.2c-20-4.6-118.6-8.4-118.6-8.4
                                            s-7.7,16.1-8.5,29.6c-0.8,13.5,0,32.9,0,32.9L389.5,807.8z"/>
                                        <path fill="transparent" d="M610.5,792.3c0,0,1.3-34.6,0-38.9c-1.3-4.2-5.3-22.5-6.9-23.1c-1.7-0.6-72.9,2.5-72.9,2.5
                                            s-31,7.6-39.4,24.6s-8.1,15.9-8.7,27.5c-0.6,11.5,0,22.8,0,22.8"/>
                                    </g>
                                    <g id="_334">
                                        <polygon fill="transparent" points="228.6,798.3 388.1,816.3 388.1,900.2 228.6,870.3 	"/>
                                        <polygon fill="transparent" points="610.5,798.3 482.5,812 482.5,900.2 610.5,878.2 	"/>
                                    </g>
                                    <g id="_234">
                                        <path fill="transparent" d="M229.1,878.2L389,909l0.6,50.1c0,0-2.7,21.3-10.8,27.2c-8.2,5.9-12.2,7.3-19,6.1
                                            c-6.8-1.3-119.7-34.2-119.7-34.2s2.1-5.6,1.7-11.3c-0.3-3.8-11.9-21-12.7-26.2c-1-6.5,0-30.4,0-30.4"/>
                                        <path fill="transparent" d="M482.7,906.4l127-22.2c0,0,1.7,41.1,0,49.8c-1.7,8.7-3.1,13.2-4.5,16.3c-1.4,3.1-1.7,10.4-1.4,13
                                            c0.3,2.5-64.8,18-64.8,18s-29.3,7-38.6-1.7s-17.2-15.8-17.7-31.8C482.2,931.7,482.7,906.4,482.7,906.4z"/>
                                    </g>
                                    <g id="_435">
                                        <path fill="transparent" d="M222.6,727.9V789c0,0-113.5-9.3-112.3-13c1.1-3.7-2.3-27,1.4-29c3.7-2,37.7-9.6,38.3-12.1
                                            s0.3-11.8,0.3-11.8l72.4,3.4"/>
                                    </g>
                                    <g id="_335">
                                        <path fill="transparent" d="M225.6,794.9l-49.5-5.9v18.9c0,0-15.7-0.3-18.7,1.4c-3,1.7-1.3,6.5-6.9,6.8s-36,0.6-38.3,2.5
                                            c-2.3,2,0,30.1,0,30.1s111.5,23.7,112.1,22.5C224.8,870.1,225.6,794.9,225.6,794.9z"/>
                                    </g>
                                    <g id="_235">
                                        <path fill="transparent" d="M225.6,876.2l-49-9.9v11.5c0,0-30.7,0.8-44.2,6.5c-13.5,5.6-23.1,5.9-21.3,10.7
                                            c1.8,4.8,1.3,20.8,0,23.4c-1.3,2.5,3.8,4.8,9.4,6.8c5.6,2,115.4,32.9,115.4,32.9s3.1-11.8-1.4-18.3c-4.5-6.5-13.5-17.7-12.1-26.7"
                                            />
                                    </g>
                                    <g id="_823">
                                        <path fill="transparent" d="M1153.7,471l-80.5,27v27c0,0,79.1-18,80.5-22.1C1155.1,498.8,1153.7,471,1153.7,471z"/>
                                    </g>
                                    <g id="_824">
                                        <path fill="transparent" d="M1069.1,498c0,0-29.6,12.4-37.5,12.8c-7.9,0.4-36,2-36,2s-4.1,7.8,0,10.8s6.8,0.2,7.1,3.8
                                            c0.4,3.7,0.8,5.6,0.8,5.6s30.3,0.3,40.9-1.6s27.1-6.4,27.1-6.4v-27"/>
                                    </g>
                                    <g id="_634">
                                        <path id="f" fill="transparent" d="M611.1,544.2c0,0-91.9-10.5-114.1-11.3c-22.1-0.8-39.8-4.1-87.1,0
                                            c-47.3,4.1-154.3,17.6-154.3,17.6v74.7c0,0,173.4-5.3,188.5-5.3s167,5.3,167,5.3V544.2z"/>
                                    </g>
                                    <g id="_222">
                                        <path fill="transparent" d="M1600,1013.8h-5.3l-146-50.7v50.7c0,0,3.8,13.9,3.4,19.9c-0.4,6-3.4,38.7-3.4,38.7l78.5,38.7
                                            c0,0,45.8,21.8,66.1-15c0,0,6-11.3,6.8-36.4C1600.7,1034.5,1600,1013.8,1600,1013.8z"/>
                                    </g>
                                    <g id="_223">
                                        <path fill="transparent" d="M1444.2,961.3v54.8c0,0,5.3,10.1,4.5,18c-0.8,7.9-4.5,36.8-4.5,36.8l-134.8-65.3c0,0,8.3-21.4,3.8-34.5
                                            c-4.5-13.1-1.9-56.7-1.9-56.7L1444.2,961.3z"/>
                                    </g>
                                    <g id="_224">
                                        <path fill="transparent" d="M1306.9,913.1v36.3c0,0,3.9,19.4,4.5,27.9c0.6,8.4-4.5,26.7-4.5,26.7l-100.2-48.4c0,0,7.6-16,5.1-26.5
                                            s0-49.6,0-49.6L1306.9,913.1z"/>
                                    </g>
                                    <g id="_225">
                                        <path fill="transparent" d="M1137.9,854.3l70.1,25.3c0,0-0.6,38.6,0,40.3c0.6,1.7,3.4,26.5-3.7,34.4l-66.4-31.5c0,0,2.8-8.7,0-18.4
                                            C1135.1,894.5,1137.9,854.3,1137.9,854.3z"/>
                                    </g>
                                    <g id="_226">
                                        <path fill="transparent" d="M1133.4,852l-36.3-12.4c0,0-2,33.2,0,41.7c2,8.4,10.7,28.1,22.5,33c11.8,5,17.1,7.5,17.1,7.5
                                            s1.4-10.7,0-17S1131.7,885.5,1133.4,852z"/>
                                    </g>
                                    </svg>
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
                                                        <label className="secondary-text">Building</label>
                                                        {/* <Dropdown onChange={(e) => this.filter("building", e.value)} options={this.filterStyle4} value={(this.state.filters.building) ? this.state.filters.building : this.filterStyle4[0] } placeholder={this.filterStyle4[0].label} /> */}
                                                        <div className="arrow-icon"></div>
                                                    </div>

                                                    <div className="dropdown">
                                                        <label className="secondary-text">Floor</label>

                                                        {/* {(this.state.buildingData && this.state.buildingData.name === 'grand') ?
                                                            <Dropdown onChange={(e) => this.filter("floor_number", e.value)} options={this.filterStyle1} value={(this.state.filters.floor_number) ? this.state.filters.floor_number : this.filterStyle1[0] } placeholder={this.filterStyle1[0].label} />
                                                            :
                                                            <Dropdown onChange={(e) => this.filter("floor_number", e.value)} options={this.filterStyle5} value={(this.state.filters.floor_number) ? this.state.filters.floor_number : this.filterStyle5[0] } placeholder={this.filterStyle5[0].label} />
                                                        } */}

                                                        <div className="arrow-icon"></div>
                                                    </div>

                                                    <div className="dropdown">
                                                        <label className="secondary-text">Bedrooms</label>
                                                        {/* {(this.state.buildingData && this.state.buildingData.name === 'grand') ?
                                                            // <Dropdown onChange={(e) => this.filter("floor_number", e.value)} options={this.filterStyle1} value={(this.state.filters.floor_number) ? this.state.filters.floor_number : this.filterStyle1[0] } placeholder={this.filterStyle1[0].label} />
                                                            <Dropdown onChange={(e) => this.filter("bedrooms", e.value)} options={this.filterStyle3} value={(this.state.filters.bedrooms) ? this.state.filters.bedrooms : this.filterStyle3[0] } placeholder="All" />
                                                            :
                                                            <Dropdown onChange={(e) => this.filter("bedrooms", e.value)} options={this.filterStyle6} value={(this.state.filters.bedrooms) ? this.state.filters.bedrooms : this.filterStyle6[0] } placeholder="All" />
                                                        } */}
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

                                        <div className="property-scroll-outer">
                                            <div className="property-row header-row">
                                                <div className="property-row-item" onClick={(e) => this.sort("floor_number", e)}><span>Floor</span></div>
                                                <div className="property-row-item" onClick={(e) => this.sort("property_number", e)}><span>Unit</span></div>
                                                <div className="property-row-item" onClick={(e) => this.sort("bedrooms", e)}><span>Bedrooms</span></div>
                                                <div className="property-row-item" onClick={(e) => this.sort("size", e)}><span>Internal Area</span></div>
                                                <div className="property-row-item" onClick={(e) => this.sort("external_area", e)}><span>External Area</span></div>
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
                                                                <Link to={"/property/" + property.node.title + "-2"}>
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
                                                                </Link>
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
