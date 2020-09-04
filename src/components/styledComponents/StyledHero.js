import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import PropTypes from "prop-types";
const StyledHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage
      className={className}
      fluid={img}
      home={home}
      alt="Revel Well"
    >
      {children}
    </BackgroundImage>
  );
};

export default styled(StyledHero)`
  min-height: ${(props) => (props.home ? "100vh" : "50vh")};
  background: ${(props) =>
    props.home
      ? "linear-gradient(rgba(182,100,58,0.5), rgba(46,91,105,0.7))"
      : "none"};
  background-position: right;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

StyledHero.propTypes = {
  children: PropTypes.node,
  home: PropTypes.any,
  fluid: PropTypes.any,
  img: PropTypes.any,
  className: PropTypes.any,
};
