/* eslint react/prop-types: 0 */
import "./src/css/style.css";
import "video-react/dist/video-react.css";
import "typeface-montserrat";
import React from "react";
import { IdentityContextProvider } from "react-netlify-identity-widget";
import GlobalContextProvider from "./src/context/GlobalContextProvider";

const url = process.env.GATSBY_NETLIFY_IDENTITY_URL;

export const wrapPageElement = ({ element, props }) => {
  return (
    <GlobalContextProvider>
      <IdentityContextProvider url={url} {...props}>
        {element}
      </IdentityContextProvider>
    </GlobalContextProvider>
  );
};
