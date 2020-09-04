import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h4>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.any,
};
export default styled(Title)`
  // text-transform: uppercase;
  font-size: 2.3rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: #959595;
  }
  .title {
    color: #b6643a;
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`;
