const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const result = await graphql(`
    query {
      allWpPage {
        edges {
          node {
            id
            slug
            status
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
      allWpPost {
        edges {
            node {
                id
                title
                excerpt
                slug
            }
        }
      }
    }
  `)
  
  const postTemplate = path.resolve(`src/templates/news/single-news.js`);
  const propTemplate = path.resolve(`src/templates/property/single-property.js`);

  // result.data.allWpPage.edges.forEach(edge => {

  //   let pageTemplate = path.resolve(`src/pages/${edge.node.slug}.js`);

  //   if (pageTemplate) { 
  //     createPage({
  //       path: `${edge.node.slug}`,
  //       component: pageTemplate,
  //       context: {
  //         id: edge.node.id,
  //         edge
  //       },
  //     })
  //   } 
  // })
    
  result.data.allWpProperty.edges.forEach(edge => {
    createPage({
      path: `property/${edge.node.slug}`,
      component: propTemplate,
      context: {
        id: edge.node.id,
        edge
      },
    })
  })

  result.data.allWpPost.edges.forEach(edge => {
    createPage({
      path: `news/${edge.node.slug}`,
      component: postTemplate,
      context: {
        id: edge.node.id,
        edge
      },
    })
  })
}