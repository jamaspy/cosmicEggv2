import React from "react";
import PropTypes from "prop-types";
//import abductionIllustration from "../../images/abduction-illustration.svg";
import { navigate } from "gatsby";

const VideoCard = ({ title, description, slug, thumbnailID }) => {
  const MUX_POSTER = `https://image.mux.com/${thumbnailID}/thumbnail.png?&fit_mode=pad&time=23`;
  return (
    <div className="border rounded-lg overflow-hidden flex justify-between flex-col items-stretch max-w-sm m-2 bg-gray-800 text-white shadow-lg">
      <div className="">
        <img
          alt="snapshot of ride"
          className="block w-full mx-auto mb-8"
          src={MUX_POSTER}
        />
        <div className="text-center text-xl font-medium font-montserrat">
          {title}
        </div>
      </div>
      {/* <div className="flex flex-col justify-between border max-h-full">
        <div className="text-center text-xl font-semibold">{title}</div>
      </div> */}
      <div>
        <div className="text-justify px-2 font-montserrat font-light">
          {description}
        </div>
      </div>
      <button
        onClick={() => navigate(`/${slug}/`)}
        className="bg-transparent hover:bg-blue-800 text-blue-200 font-semibold font-montserrat hover:text-white py-2 px-4 hover:border-transparent mt-2"
      >
        Watch Now
      </button>
    </div>
  );
};

VideoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.any,
  slug: PropTypes.string,
  thumbnailID: PropTypes.string,
};

export default VideoCard;
