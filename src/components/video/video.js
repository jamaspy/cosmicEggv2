/* eslint react/prop-types: 0 */
import React, { useRef } from "react";

import { Player, BigPlayButton } from "video-react";
import HLSSource from "./HSLSource";
// import PropTypes from "prop-types";
//import { useIdentityContext } from "react-netlify-identity";
const Video = ({ videoSrcURL, videoTitle, posterImage, videoID }) => {
  const videoRef = useRef();
  //const user = useIdentityContext();

  return (
    <>
      <Player
        fluid={true}
        autoPlay={false}
        poster={posterImage}
        id={videoID}
        ref={videoRef}
      >
        <BigPlayButton position="center" />
        <HLSSource
          isVideoChild
          src={videoSrcURL}
          playerName={videoID}
          videoRef={videoID}
          //user={user}
          videoTitle={videoTitle}
        />
      </Player>
    </>
  );
};

export default Video;
