import React from "react"
import Container from '../components/layouts/container';
import { graphql } from "gatsby"
import SecondaryText from "../components/typography/secondaryText";
import ContactForm from "../components/sections/forms/contactForms";
// import MyHeader from "../components/header/header";

const Contact = ({ data }) => {
    // MyHeader.toggleIsItOn();
    // changeBg()

    return (
        <>
            <section className="first-section">
                <Container>
                    <div className="lg-text">
                        <h1>Let's Talk</h1>
                    </div>

                    <div className="row align-center">
                        <div className="col-1">
                            <div className="contact-details-row row">
                                <div className="col-1">
                                    <SecondaryText styleClass="inherit-color" text="Office" />
                                </div>

                                <div className="col-1">
                                    <SecondaryText text="Verdala" />
                                    <SecondaryText text="St George's Road" />
                                    <SecondaryText text="Paceville, St Julians" />
                                    <SecondaryText text="STJ 3202" />
                                </div>
                            </div>

                            <div className="contact-details-row row">
                                <div className="col-1">
                                    <SecondaryText styleClass="inherit-color" text="Daily" />
                                </div>

                                <div className="col-1">
                                    <SecondaryText text="From 9:00 - 17:00" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-1">
                                    <SecondaryText styleClass="inherit-color" text="Contact" />
                                </div>

                                <div className="col-1">
                                    <SecondaryText text="+356 22222222" />
                                    <SecondaryText text="info@verdala.com.mt" />
                                </div>
                            </div>
                        </div>

                        <div className="col-1">
                            <div className="contact-form">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
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

export default Contact