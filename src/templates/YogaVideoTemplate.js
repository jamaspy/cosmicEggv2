/* eslint react/prop-types: 0 */
import React from "react";
import SEO from "../components/seo";
import Video from "../components/video/video";

import { graphql } from "gatsby";
import Layout from "../components/layout";

const YogaVideoTemplate = ({ data }) => {
  const videoData = data.contentfulOnDemandYogaVideo;
  const MUX_UPLOAD_ID = videoData.muxVideo.mux.playbackId;
  const MUX_URL = `https://stream.mux.com/${MUX_UPLOAD_ID}`;
  const MUX_POSTER = `https://image.mux.com/${MUX_UPLOAD_ID}/thumbnail.png?&fit_mode=pad&time=23`;
  const { title, description } = videoData;
  return (
    <>
      <Layout>
        <SEO title={title} />
        <div className=" flex flex-col items-center justify-center h-screen w-full bg-gradient-to-r from-green-900 via-gray-700 to-gray-300">
          <div className="flex flex-col items-center justify-center font-light text-gray-dark w-full text-gray-200 ">
            <div className="mt-3 w-2/3 rounded-lg shadow-lg overflow-hidden">
              <Video
                videoSrcURL={MUX_URL}
                videoTitle={title}
                posterImage={MUX_POSTER}
              />
            </div>
            <div className="w-2/3 text-center mt-2">
              <p className="text-4xl font-montserrat font-semibold ">{title}</p>
              <p className="text-lg font-montserrat">{description}</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query ContentfulOnDemandYogaVideoBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulOnDemandYogaVideo(slug: { eq: $slug }) {
      title
      slug
      description
      contentful_id
      createdAt(locale: "en-au")
      muxVideo {
        mux {
          playbackId
          ready
          id
          assetId
        }
      }
    }
  }
`;

export default YogaVideoTemplate;
