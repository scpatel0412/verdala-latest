module.exports = {
  siteMetadata: {
    title: `Verdala`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "Vision",
        link: "/vision",
      },
      {
        name: "Residences",
        link: "/the-residences",
      },
      {
        name: "Lifestyle & Amenities",
        link: "/lifestyle-amenities",
      },
      {
        name: "Neighbourhood",
        link: "/neighbourhood",
      },
      {
        name: "Apartments",
        link: "/apartments",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://verdalastage.bison-studio.com/graphql",
        html: {
          useGatsbyImage: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
        useACF: true,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-transition-link",
  ],
};
