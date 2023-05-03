import React from 'react';
import {  graphql } from 'gatsby'
// import PageHero from '../components/hero/page-hero';
import Footer from '../../components/sections/footer/footer';
import '../../assets/css/js_composer.min.css';
import Container from '../../components/layouts/container';
import PageHero from '../../components/hero/page-hero';
// import PropertyMeta from '../../components/property/property-meta';
// import parse from 'html-react-parser'


const SinglePropertyTemplate = ({ data }) => {
	const post = data.wpPost;

	return (
	  <>
		{/* <PageHero
			title = {post.title}
		/> */}

        <PageHero
            title = {post.title}
        />

        <Container>
            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
        </Container>
        
		<Footer />

	  </>
	)
}
  
export default SinglePropertyTemplate

export function Head({ data }) {
	return (
	  <title>Verdala - {data.wpPost.title}</title>
	)
}

export const postQuery = graphql`
    query currentPostQuery($id: String!) {
        wpPost(id: { eq: $id }) {
            id
            title
            excerpt
            slug
            content
            featuredImage {
                node {
                    id
                    sourceUrl
                }
            }
        }
    }
`