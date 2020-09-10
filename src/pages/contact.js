import React from "react";
import Layout from "../components/layout";
import Hero from "../components/styledComponents/StyledHero";
import Banner from "../components/Banner";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";
import Form from "../components/contact/ContactForm";
const ride = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "CONTACT_BANNER" } }) {
        nodes {
          name
          childImageSharp {
            fluid(quality: 90, maxWidth: 1080) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <Hero img={data.allFile.nodes[0].childImageSharp.fluid}>
        <Banner home={false} title="Contact Us" />
      </Hero>
      <Form />
    </Layout>
  );
};

export default ride;
