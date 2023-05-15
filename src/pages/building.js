import React from "react"
// import Container from '../components/layouts/container';
import { graphql } from "gatsby"
// import SecondaryText from "../components/typography/secondaryText";
// import ContactForm from "../components/sections/forms/contactForms";
import BuildingModule from "../components/property/buildingModule";
// import MyHeader from "../components/header/header";

const Building = ({ data }) => {
    // MyHeader.toggleIsItOn();
    // changeBg()
    return (
        <>
            <section className="first-section">
                    <BuildingModule
                        properties = {data.allWpProperty.edges}
                        loaded = {true}
                    />
                {/* <Container>
                </Container> */}
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

export default Building