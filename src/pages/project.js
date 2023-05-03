import React from "react"
import Container from '../components/layouts/container';
import { graphql } from "gatsby"
import PropertyList from "../components/property/property-list";
import SecondaryText from "../components/typography/secondaryText";

const Project = ({ data }) => {
    return (
        <>
            <section className="first-section">
                <Container>
                    <div className="row">
                        <div className="col-2">
                            <img src={data.wpProject.featuredImage.node.sourceUrl} alt={data.wpProject.featuredImage.node.altText}  />
                        </div>

                        <div className="col-3">
                            <div className="row text-center">
                                <div className="col-1"><SecondaryText text="residence" /></div>
                                <div className="col-1"><SecondaryText text="Floor" /></div>
                                <div className="col-1"><SecondaryText text="Bedrooms" /></div>
                                <div className="col-1"><SecondaryText text="Area" /></div>
                                <div className="col-1"><SecondaryText text="External" /></div>
                                <div className="col-1"><SecondaryText text="Price" /></div>
                                <div className="col-1"></div>
                            </div>

                            {data.allWpProperty.edges.map( (property) => {
                                return (
                                    <PropertyList
                                        {...property}
                                    />
                                )
                            } )}
                        </div>
                    </div>
                </Container>
            </section>

            <section>
                <Container>
                    
                </Container>
            </section>

            {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
        </>
    )
}

export const query = graphql`
  {
    wpProject {
        id
        title
        featuredImage {
          node {
              altText
            sourceUrl
          }
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
`

export default Project