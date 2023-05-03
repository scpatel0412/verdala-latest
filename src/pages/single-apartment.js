import React from 'react';
// import PageNavigation from '../components/header/page-navigation';
// import { useStaticQuery, graphql } from 'gatsby'
// import HomeHero from '../components/hero/home-hero';
// import PageHero from '../components/hero/page-hero';
import Footer from '../components/sections/footer/footer';
import '../assets/css/js_composer.min.css';
// import PropertyCard from '../components/property/property-card';
import Container from '../components/layouts/container';
// import parse from 'html-react-parser'


const SingleApartment = ({ pageTitle, children }) => {
	// useTranslations is aware of the global context (and therefore also "locale")
	// so it'll automatically give back the right translations  

    // document.getElementsByClassName("global-header").classList.add("dark");

	// const data = useStaticQuery(graphql`
	// 	query {
    //         wpProperty(slug: {eq: "121-2"}) {
    //             id
    //             title
    //             slug
    //             propertiesData {
    //             propertyPlanOnline {
    //                 id
    //                 sourceUrl
    //             }
    //             floorArea
    //             floorNumber
    //             bedrooms
    //             internalArea
    //             externalArea
    //             price
    //             saleStatus
    //             views
    //             }
    //         }
	// 	}
	// `)

	return (
	  <>
		{/* <PageHero
			title = "Residencess"
		/> */}

        <Container
            className = "filter-container"
        >
            
        </Container>

        <Container>
            {/* <div>
                <h3 className="text-color">{data.allWpProperty.edges.length} Apartments found</h3>
            </div>

            <div className="grid-layout col-grid-2 remove-gap">
                {data.allWpProperty.edges.map( (property) => {
                    return (
                        <PropertyCard
                            {...property}
                        />
                    )
                } )}
            </div> */}
        </Container>

	  	{/* <HomeHero /> */}
		{/* <PageIntro />
		<PageImageCols /> */}

		{/* <div dangerouslySetInnerHTML={{__html: data.wpPage.content + data.wpPage.styleString}}></div> */}
        
		<Footer />

	  </>
	)
}
  
export default SingleApartment

export function Head() {
	return (
	  <title>Verdala - Residences</title>
	)
}
