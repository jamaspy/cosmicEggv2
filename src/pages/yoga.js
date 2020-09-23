import React, { useContext } from "react";
import Layout from "../components/layout";
import Hero from "../components/styledComponents/StyledHero";
import Banner from "../components/Banner";
import { useStaticQuery, graphql, navigate } from "gatsby";
import SEO from "../components/seo";
import VideoCard from "../components/video/VideoCard";
import { GlobalStateContext } from "../context/GlobalContextProvider";
const Yoga = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "YOGA_BANNER" } }) {
        nodes {
          name
          childImageSharp {
            fluid(quality: 90, maxWidth: 1080) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      flows: allContentfulOnDemandYogaVideo(
        sort: { fields: createdAt, order: ASC }
      ) {
        nodes {
          title
          description
          slug
          muxVideo {
            mux {
              playbackId
            }
          }
        }
      }
    }
  `);

  const allFlows = data?.flows?.nodes;
  const state = useContext(GlobalStateContext);

  return state.netlifyLoggedIn ? (
    <Layout>
      <SEO keywords={[`yoga`, `flow`, `namaste`, `peaceful`]} title="Yoga" />
      <Hero img={data.allFile.nodes[0].childImageSharp.fluid}>
        <Banner home={false} title="Yoga" />
      </Hero>
      <div className="w-full border flex flex-row flex-wrap justify-center m-auto">
        {allFlows.map((flow, index) => (
          <VideoCard
            key={index}
            title={flow.title}
            yoga={true}
            description={flow.description}
            slug={flow.slug}
            thumbnailID={flow?.muxVideo?.mux?.playbackId}
          />
        ))}
      </div>
    </Layout>
  ) : (
    <div>{typeof window !== `undefined` ? navigate("/login/") : null}</div>
  );
};

export default Yoga;
