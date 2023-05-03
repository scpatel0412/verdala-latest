import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class PostTemplate extends Component {
    render() {
        const siteMetadata = this.props.data.site.siteMetadata
        const post = this.props.data.wordpressPost

        return (
            <div>
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        )
    }
}


export default PostTemplate;

// export const pageQuery = graphql`
//     query currentPostQuery($id: String!) {
//         wordpressPost(id: { eq: $id }) {
//             title
//             content
//             acf {
//                 seo_title
//                 seo_description
//             }
//         }
//         site {
//             siteMetadata {
//                 title
//                 subtitle
//             }
//         }
//     }
// `