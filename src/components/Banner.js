import React from "react";
import styles from "../css/banner.module.css";
import SVG from "../images/REVELWELL- Main-Logo-All White.svg";
import PropTypes from "prop-types";
const Banner = ({ title, info, children, home }) => {
  return (
    <div className={styles.banner}>
      {home ? (
        <img src={SVG} alt="RevelWell LogoSVG" />
      ) : (
        <>
          <h1>{title}</h1>
          <p>{info}</p>
        </>
      )}
      {children}
    </div>
  );
};

Banner.propTypes = {
  children: PropTypes.node,
  home: PropTypes.any,
  title: PropTypes.string,
  info: PropTypes.string,
};

export default Banner;
