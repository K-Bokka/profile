import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { IndexPageDataQuery } from "../../graphql-types"

const IndexPage: React.FC<PageProps<IndexPageDataQuery>> = ({ data, path }) => (
  <Layout>
    <SEO title="Home"/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image/>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br/>
    <p>You're currently on the page "{path}" which was built on {data.site.buildTime}.</p>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexPageData {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
