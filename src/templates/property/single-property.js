import React from 'react';
import {  graphql } from 'gatsby'
// import HomeHero from '../components/hero/home-hero';
import Footer from '../../components/sections/footer/footer';
import '../../assets/css/js_composer.min.css';
import Container from '../../components/layouts/container';
import PropertyMeta from '../../components/property/property-meta';
// import parse from 'html-react-parser'


const SinglePropertyTemplate = ({ data }) => {
	// useTranslations is aware of the global context (and therefore also "locale")
	// so it'll automatically give back the right translations  

    // document.getElementsByClassName("global-header").classList.add("dark");

	const post = data.wpProperty;

    console.log(data);

	return (
	  <>
		{/* <PageHero
			title = "Residencess"
		/> */}

        {/* <Container
            className = "filter-container"
        >
            <h1>{post.title}</h1>
        </Container> */}

        <Container>
            <div className="row">
                <div className="col-3">
                    <h1>Apartment</h1>
                    <PropertyMeta
                        {...post}
                    />
                </div>

                <div className="col-2">
                    <div className="property-plan">
                        <img src={post.propertiesData.propertyPlanOnline.sourceUrl} alt="" />
                    </div>
                </div>
            </div>

            <div className="grid-layout col-grid-2 remove-gap">
                
            </div>
        </Container>

	  	{/* <HomeHero /> */}
		{/* <PageIntro />
		<PageImageCols /> */}

		{/* <div dangerouslySetInnerHTML={{__html: data.wpPage.content + data.wpPage.styleString}}></div> */}
        
		<Footer />

	  </>
	)
}
  
export default SinglePropertyTemplate

export function Head() {
	return (
	  <title>Verdala - Residences</title>
	)
}

export const postQuery = graphql`
    query currentPostQuery($id: String!) {
        wpProperty(id: { eq: $id }) {
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
`