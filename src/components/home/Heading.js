import React from "react";
import Hero from "../styledComponents/StyledHero";
import Banner from "../Banner";
import { useStaticQuery, graphql } from "gatsby";

const Heading = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "HOME_BANNER" } }) {
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
    <>
      <Hero img={data.allFile.nodes[0].childImageSharp.fluid} home={true}>
        <Banner home={true} />
      </Hero>
    </>
  );
};

export default Heading;
