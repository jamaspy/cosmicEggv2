import React from "react";
import PropTypes from "prop-types";
import { navigate, Link } from "gatsby";
import styles from "../../css/video.module.css";
const VideoCard = ({ title, description, slug, thumbnailID, mostRecent }) => {
  const MUX_POSTER = `https://image.mux.com/${thumbnailID}/thumbnail.png?&fit_mode=pad&time=23`;
  return (
    <Link
      to={`/${slug}/`}
      className={`${styles.first} bg-petrol border rounded-lg overflow-hidden flex justify-between flex-col items-stretch max-w-sm m-2 text-white shadow-lg`}
    >
      <div className="">
        <img
          alt="snapshot of ride"
          className="block w-full mx-auto mb-8"
          src={MUX_POSTER}
        />
        {mostRecent && (
          <div className="text-center text-xl px-2 font-medium font-montserrat">
            **NEWEST RIDE**
          </div>
        )}
        <div className="text-center text-xl px-2 font-medium font-montserrat">
          {title}
        </div>
      </div>
      {/* <div className="flex flex-col justify-between border max-h-full">
        <div className="text-center text-xl font-semibold">{title}</div>
      </div> */}
      <div>
        <div className="text-justify px-3 font-montserrat font-light">
          {description}
        </div>
      </div>
      <button
        onClick={() => navigate(`/${slug}/`)}
        className="bg-transparent hover:bg-rust text-white font-semibold font-montserrat hover:text-white py-2 px-4 hover:border-transparent mt-2"
      >
        Watch Now
      </button>
    </Link>
  );
};

VideoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.any,
  slug: PropTypes.string,
  thumbnailID: PropTypes.string,
  mostRecent: PropTypes.boolean,
};

export default VideoCard;
