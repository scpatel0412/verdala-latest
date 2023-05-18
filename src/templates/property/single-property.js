import React from 'react';
import {  graphql } from 'gatsby'
// import HomeHero from '../components/hero/home-hero';
import Footer from '../../components/sections/footer/footer';
import Container from '../../components/layouts/container';
import PropertyMeta from '../../components/property/property-meta';
import testImg from "../../assets/images/test-images/test-plan.png";
import EnquireForm from "../../components/sections/forms/enquireForm";
import * as Styles from "../../components/property/property.module.scss";
import '../../assets/css/js_composer.min.css';
// import parse from 'html-react-parser'


const SinglePropertyTemplate = ({ data }) => {
	// useTranslations is aware of the global context (and therefore also "locale")
	// so it'll automatically give back the right translations  

    // document.getElementsByClassName("global-header").classList.add("dark");

	const post = data.wpProperty;

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
            <section className="first-section">
                <div className={Styles.sglPropCont}>
                    <div className="row">
                        <div className="col-3">
                            <h1 className={Styles.titleText}>APT. {post.title}</h1>
                            <PropertyMeta
                                {...post}
                            />
                        </div>

                        <div className="col-2">
                            <div className={Styles.propPlan}>
                                {/* <img src={post.propertiesData.propertyPlanOnline.sourceUrl} alt="" /> */}
                                <img src={testImg} alt="" />
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="grid-layout col-grid-2 remove-gap">
                    
                </div> */}

            </section>
            {/* <EnquireForm /> */}
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