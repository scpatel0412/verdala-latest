import React, { useEffect, useState } from "react";

import Container from "../components/layouts/container";
//import { graphql } from "gatsby";
import SecondaryText from "../components/typography/secondaryText";
import ContactForm from "../components/sections/forms/contactForms";
import ButtonArrow from "../assets/svgs/button-arrow.svg";
// import { ContactPageData } from "../queries/contact-queries";
import axios from "axios";
// import MyHeader from "../components/header/header";

const Contact = ({ data }) => {
  const [alldata, setAllData] = useState({});
  const [ContactPageOffice, setContactPageOffice] = useState([]);
  const [ContactPageDaily, setContactPageDaily] = useState([]);
  const [contactpagetime, setContactPageTime] = useState([]);
  const [btitle, setBTitle] = useState([]);
  const [newdata, setNewData] = useState([]);
  const [newaddress, setNewAddress] = useState([]);

  // console.log(
  //   "newdata",
  //   newdata.map((el) => el.contact_info.contact_detail)
  // );

  useEffect(() => {
    if (typeof alldata !== "undefined") {
    }
    axios
      .get("https://verdalastage.bison-studio.com/wp-json/acf/v3/pages/738")
      .then((res) => {
        setAllData(res.data.acf);
        setNewData(res.data.acf.contact_data);
      })
      .catch((err) => console.log(err));
  }, [alldata.length]);

  useEffect(() => {
    if (Object.keys(alldata).length > 0) {
      setContactPageOffice(alldata.contact_data[0].contact_title);
      setContactPageDaily(alldata.contact_data[1].contact_title);
      setContactPageTime(alldata.contact_data[1].contact_info.contact_detail);
      setBTitle(alldata.contact_data[0].contact_info.button.title);

      const address = alldata.contact_data[0].contact_info.contact_detail;
      const array = address.split(",");
      setNewAddress(array);
    }
  }, [alldata]);

  // const contactDATAS = alldata.contact_data.map((res) =>
  //  console.log("MapRes", res)
  //  );

  // console.log("dfsdf", contactDATAS);
  // const address =
  //   contactdata.wpPage.contactPageCustomSections.contactData[0].contactInfo
  //     .contactDetail;
  // const array2 = address.split(",");
  return (
    <>
      <section className="first-section">
        <Container>
          {/* <h1>{alldata.contact_data[0]}</h1> */}
          <div className="contact-title">
            <h1>{alldata.page_title}</h1>
          </div>
          <div className="crow">
            <div className="col-6 col-lg-12">
              <div className="contact-detail-1">
                <div className="contact-details-row crow">
                  <div className="col-4">
                    <SecondaryText
                      styleClass="inherit-color"
                      text={ContactPageOffice}
                    />
                  </div>
                  <div className="col-8">
                    {newaddress.map((el) => {
                      return <SecondaryText text={el + ","} />;
                    })}
                    <div className="map-route">
                      <div className="flex">
                        <SecondaryText text={btitle} />
                        <div className="arrow">
                          <ButtonArrow />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="contact-detail-2">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-1">
                          <div className="d-flex justify-content-between align-items-center">
                            <SecondaryText
                              text={
                                btitle
                              }
                            />
                          </div>
                          <div className="">
                            <div className="">
                              <ButtonArrow />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}

                <div className="contact-details-row crow">
                  <div className="col-4">
                    <SecondaryText
                      styleClass="inherit-color"
                      text={ContactPageDaily}
                    />
                  </div>

                  <div className="col-8">
                    <SecondaryText text={contactpagetime} />
                  </div>
                </div>

                <div className="contact-details-row crow">
                  <div className="col-4 col-sm-12"></div>
                  <div className="col-8 col-sm-12">
                    <div className="contact-us">
                      <SecondaryText text={alldata.phone} />
                      <SecondaryText text={alldata.email} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-12">
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

// export const query = graphql`
//   {
//     wpProject {
//       id
//       title
//       featuredImage {
//         node {
//           altText
//           sourceUrl
//         }
//       }
//     }
//     allWpProperty {
//       edges {
//         node {
//           id
//           title
//           slug
//           propertiesData {
//             propertyPlanOnline {
//               id
//               sourceUrl
//             }
//             floorArea
//             floorNumber
//             bedrooms
//             internalArea
//             externalArea
//             price
//             saleStatus
//             views
//           }
//         }
//       }
//     }
//   }
// `;

export default Contact;
