const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWpPage {
            edges {
              node {
                id
                slug
                status
                template
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create Page pages.
        const pageTemplate = path.resolve("./src/templates/page.js");
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
              edge
            },
          });
        });
      })
      // ==== END PAGES ====

      // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWordpressPost {
                edges {
                  node {
                    id
                    slug
                    status
                    template
                    format
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            // console.log(result.errors);
            reject(result.errors);
          }
          const postTemplate = path.resolve("./src/templates/post.js");
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressPost.edges, edge => {
            createPage({
              path: `/posts/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: {
                id: edge.node.id,
              },
            });
          });
          resolve();
        });
      })
    // ==== END POSTS ====

    // ==== Properties (WORDPRESS NATIVE AND ACF) ====

    .then(() => {
      graphql(
        `
          {
            allWpPropertiess {
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
        `
      ).then(result => {
        if (result.errors) {
          // console.log(result.errors);
          reject(result.errors);
        } else {
          console.log(result)
        }
        const propTemplate = path.resolve("./src/templates/property/single-property.js");
        // We want to create a detailed page for each
        // post node. We'll just use the WordPress Slug for the slug.
        // The Post ID is prefixed with 'POST_'
        _.each(result.data.allWpPropertiess.edges, edge => {
          createPage({
            path: `/property/${edge.node.slug}/`,
            component: propTemplate,
            context: {
              id: edge.node.id,
            },
          });
        });
        resolve();
      });
    });

    // ==== END Properties ====
  });
};