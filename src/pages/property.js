import React from "react"
import { graphql } from "gatsby"

const Page = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allWpProperty {
      nodes {
        title
        slug
      }
    }
  }
`

export default Page