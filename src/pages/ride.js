import React, { useContext } from "react";
import Layout from "../components/layout";
import Hero from "../components/styledComponents/StyledHero";
import Banner from "../components/Banner";
import { useStaticQuery, graphql, navigate } from "gatsby";
import SEO from "../components/seo";
import VideoCard from "../components/video/VideoCard";
import { GlobalStateContext } from "../context/GlobalContextProvider";
const Ride = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "RIDE_BANNER" } }) {
        nodes {
          name
          childImageSharp {
            fluid(quality: 90, maxWidth: 1080) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      rides: allContentfulOnDemandVideo(
        sort: { order: DESC, fields: createdAt }
      ) {
        nodes {
          title
          description
          slug
          video {
            mux {
              playbackId
            }
          }
        }
      }
    }
  `);

  const allRides = data?.rides?.nodes;
  const state = useContext(GlobalStateContext);

  return state.netlifyLoggedIn ? (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Ride"
      />
      <Hero img={data.allFile.nodes[0].childImageSharp.fluid}>
        <Banner home={false} title="Ride" />
      </Hero>
      <div className="w-full border flex flex-row flex-wrap justify-center m-auto">
        {allRides.map((ride, index) => (
          <VideoCard
            key={index}
            title={ride.title}
            description={ride.description}
            slug={ride.slug}
            thumbnailID={ride?.video?.mux?.playbackId}
            mostRecent={index === 0}
          />
        ))}
      </div>
    </Layout>
  ) : (
    <div>{typeof window !== `undefined` ? navigate("/login/") : null}</div>
  );
};

export default Ride;
