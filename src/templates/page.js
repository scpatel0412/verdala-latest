// import React, {Component} from "react";
// import { graphql } from 'gatsby'

// class PageTemplate extends Component {
//     render() {
//         const siteMetadata = this.props.data.wordpressPage.acf;
//         const currentPage = this.props.data.wordpressPage;

//         return (
//             <div>
//                 <h1>Test Page Template</h1>
                
//                 {/* <WpSeo
//                     pageObject      = {currentPage}
//                     pageHeaders     = {true}
//                 />
//                  */}
//                 <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
//                 <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>

//                 <p dangerouslySetInnerHTML={{__html: currentPage.date}} />
//                 <p dangerouslySetInnerHTML={{__html: currentPage.slug}} />
//             </div>
//         )
//     }
// }

// export default PageTemplate

// export const pageQuery = graphql`
//     query currentPageQuery($id: String!) {
//         wordpressPage(id: { eq: $id }) {
//             title
//             content
//             slug
//             id
//             date(formatString: "MMMM DD, YYYY")
//             acf {
//                 seo_title
//                 seo_description
//             }
//         }
//         site {
//             id
//             siteMetadata {
//                 title
//                 subtitle
//             }
//         }
//     }
// `