import React from 'react';
import PageNavigation from '../components/header/page-navigation';
import { useStaticQuery, graphql } from 'gatsby'
// import HomeHero from '../components/hero/home-hero';
import PageHero from '../components/hero/page-hero';
import Footer from '../components/sections/footer/footer';
import '../assets/css/js_composer.min.css';
// import PropertyCard from '../components/property/property-card';
import Container from '../components/layouts/container';
import NewsCard from '../components/news/news-card';
// import parse from 'html-react-parser'


const News = ({ pageTitle, children }) => {
	// useTranslations is aware of the global context (and therefore also "locale")
	// so it'll automatically give back the right translations  

	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
            allWpPost {
                edges {
                    node {
                        id
                        title
                        excerpt
                        slug
                        featuredImage {
                            node {
                                id
                                sourceUrl
                            }
                        }
                    }
                }
            }
		}
	`)

    console.log(data.allWpPost.edges);

	return (
	  <>
		<PageHero
			title = "News"
		/>

		<PageNavigation
			links = {
				["The Verdala Legacy", "then and now", "ARCHITECTURE", "The Team"]
			}
		/>

        <Container
            className = "filter-container"
        >
            
        </Container>

        <Container>
            <div>
                <h3 className="text-color">{data.allWpPost.edges.length} posts found</h3>
            </div>

            <div className="grid-layout col-grid-4 remove-gap">
                {data.allWpPost.edges.map( (post) => {
                    return(
                        <NewsCard
                            {...post}
                        />
                    )
                } )}
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
  
export default News

export function Head() {
	return (
	  <title>Verdala - News</title>
	)
}
