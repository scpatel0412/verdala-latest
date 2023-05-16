import React, { Component } from "react";
import PageNavigation from "../components/header/page-navigation";
import { graphql } from "gatsby";
import Filter                   from '../utils/filter';
// import HomeHero from '../components/hero/home-hero';
import Footer from "../components/sections/footer/footer";
import PropertyCard from "../components/property/property-card";
import Container from "../components/layouts/container";
import Dropdown from "react-dropdown";
// import Dropdown             from 'react-dropdown'
import "../assets/css/js_composer.min.css";
import * as propStyles from "../components/property/property.module.scss";
import PageHeroCompact from "../components/hero/page-hero-compact";
// import parse from 'html-react-parser'

class Apartments extends Component {
  constructor(props) {
    super(props);

    // this.inputFieldHandler 	= this.inputFieldHandler.bind(this);
    // this.sendForm		 	= this.sendForm.bind(this);
    // this.validateForm		= this.validateForm.bind(this);
    this.filter = this.filter.bind(this);

    this.filterStyle1 = [
      { value: "-99", label: "Floors" },
      { value: "0", label: "0" },
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
    ];

    this.filterStyle6 = [
			{ value: '--99', label: 'Bedrooms' },
			{ value: '1', label: '1' },
			{ value: '2', label: '2' },
			{ value: '3', label: '3' },
		]

    this.state = {
      values: {},
      filters: {},
    };
  }

  componentDidMount() {
    this.setState({
      properties: this.props.data.allWpProperty.edges,
      unfilteredProps: this.props.data.allWpProperty.edges,
    });

    // console.log(this.props.data.allWpProperty.edges);
  }

  filter(field, value) {
    let currFilter  = this.state.filters;
    let filtered    = this.state.unfilteredProps;
        
    if ( field !== 'all' ) {

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
    } else {
      this.setState({
        filters: {},
        properties: this.state.unfilteredProps
      })
    }
        

  }

  render() {
    return (
      <>
        <PageHeroCompact title="Residences"  />

        <PageNavigation
          links={[
            "The Verdala Legacy",
            "then and now",
            "ARCHITECTURE",
            "The Team",
          ]}
        />

        <div className={propStyles.filterBar}>
          <Container className="filter-container">
            <div className="inner-filter">
              <Dropdown 
                onChange={(e) => this.filter("floorNumber", e.value)} 
                  options={this.filterStyle1} value={(this.state.filters.floorNumber) ? this.state.filters.floorNumber : this.filterStyle1[0] } 
                  placeholder={this.filterStyle1[0].label} 
                  arrowClosed={<span className="arrow-closed" />}
                  arrowOpen={<span className="arrow-open" />}
              />
              
              <Dropdown 
                onChange={(e) => this.filter("bedrooms", e.value)} 
                options={this.filterStyle6} 
                value={(this.state.filters.bedrooms) ? this.state.filters.bedrooms : this.filterStyle6[0] } 
                placeholder={this.filterStyle6[0].label}
                arrowClosed={<span className="arrow-closed" />}
                arrowOpen={<span className="arrow-open" />}
              />

              {/* <Dropdown
                onChange={(e) => this.filter("floorNumber", e.value)}
                options={this.filterStyle1}
                value={
                  this.state.filters.building
                    ? this.state.filters.building
                    : this.filterStyle1[0]
                }
                placeholder={this.filterStyle1[0].label}
                arrowClosed={<span className="arrow-closed" />}
                arrowOpen={<span className="arrow-open" />}
              /> */}
              <Dropdown
                onChange={(e) => this.filter("building", e.value)}
                options={this.filterStyle1}
                value={
                  this.state.filters.building
                    ? this.state.filters.building
                    : this.filterStyle1[0]
                }
                placeholder={this.filterStyle1[0].label}
                arrowClosed={<span className="arrow-closed" />}
                arrowOpen={<span className="arrow-open" />}
              />
              <Dropdown
                onChange={(e) => this.filter("building", e.value)}
                options={this.filterStyle1}
                value={
                  this.state.filters.building
                    ? this.state.filters.building
                    : this.filterStyle1[0]
                }
                placeholder={this.filterStyle1[0].label}
                arrowClosed={<span className="arrow-closed" />}
                arrowOpen={<span className="arrow-open" />}
              />
              <Dropdown
                onChange={(e) => this.filter("building", e.value)}
                options={this.filterStyle1}
                value={
                  this.state.filters.building
                    ? this.state.filters.building
                    : this.filterStyle1[0]
                }
                placeholder={this.filterStyle1[0].label}
                arrowClosed={<span className="arrow-closed" />}
                arrowOpen={<span className="arrow-open" />}
              />
              <Dropdown
                onChange={(e) => this.filter("building", e.value)}
                options={this.filterStyle1}
                value={
                  this.state.filters.building
                    ? this.state.filters.building
                    : this.filterStyle1[0]
                }
                placeholder={this.filterStyle1[0].label}
                arrowClosed={<span className="arrow-closed" />}
                arrowOpen={<span className="arrow-open" />}
              />
              <Dropdown
                onChange={(e) => this.filter("building", e.value)}
                options={this.filterStyle1}
                value={
                  this.state.filters.building
                    ? this.state.filters.building
                    : this.filterStyle1[0]
                }
                placeholder={this.filterStyle1[0].label}
                arrowClosed={<span className="arrow-closed" />}
                arrowOpen={<span className="arrow-open" />}
              />
            </div>
          </Container>
        </div>

        <Container>
          <div className="filter-selection-cont">
            <div className="align-center row">
              <div className="col-1">
                <div className="align-center row">
                  <div className="col">
                    <h3 className="text-color">
                      {this.state.properties && this.state.properties.length}{" "}
                      Apartments found
                    </h3>
                  </div>

                  <div className="col">
                    <div className="clear-filters" onClick={() => this.filter('all', -99)}>
                      <span>Clear Filters</span>

                      <div className="Dropdown-arrow-wrapper">
                        <span className="arrow-closed"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-1 text-right">
                <div className="sorting-filter">
                  <span>Ascending Price</span>
                </div>
              </div>
            </div>
          </div>

          <div className={propStyles.gridLayout}>
            {this.state.properties &&
              this.state.properties.map((property) => {
                return <PropertyCard {...property} />;
              })}
          </div>
        </Container>

        {/* <HomeHero /> */}
        {/* <PageIntro />
                <PageImageCols /> */}

        {/* <div dangerouslySetInnerHTML={{__html: data.wpPage.content + data.wpPage.styleString}}></div> */}

        <Footer />
      </>
    );
  }
}

export default Apartments;

// export function Head() {
// 	return (
// 	  <title>Verdala - Residences</title>
// 	)
// }

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWpProperty {
      edges {
        node {
          id
          title
          slug
          propertiesData {
            propertyPlanOnline {
              id
              sourceUrl
            }
            floorArea
            floorNumber
            bedrooms
            internalArea
            externalArea
            price
            saleStatus
            views
          }
        }
      }
    }
  }
`;
