import React, { useContext } from "react";
import Hero from "../styledComponents/StyledHero";
import Banner from "../Banner";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GlobalStateContext } from "../../context/GlobalContextProvider";
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
  const state = useContext(GlobalStateContext);

  return (
    <>
      <Hero img={data.allFile.nodes[0].childImageSharp.fluid} home={true}>
        <Banner home={true}>
          {state && !state.netlifyLoggedIn && (
            <Link
              className="border uppercase text-white text-2xl p-5 rounded-lg hover:bg-gray-800 hover:shadow-2xl font-montserrat font-semibold"
              style={{ transition: "all 0.3s linear" }}
              to="/signup/"
            >
              Join The Crew
            </Link>
          )}
        </Banner>
      </Hero>
    </>
  );
};

export default Heading;
