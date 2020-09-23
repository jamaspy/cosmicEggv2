/* eslint react/prop-types: 0 */
import "./src/css/style.css";
import "video-react/dist/video-react.css";
import "typeface-montserrat";
import React from "react";
import { IdentityContextProvider } from "react-netlify-identity-widget";
import GlobalContextProvider from "./src/context/GlobalContextProvider";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const url = process.env.GATSBY_NETLIFY_IDENTITY_URL;
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export const wrapPageElement = ({ element, props }) => {
  return (
    <GlobalContextProvider>
      <IdentityContextProvider url={url} {...props}>
          <Elements stripe={stripePromise}>
              {element}
          </Elements>
      </IdentityContextProvider>
    </GlobalContextProvider>
  );
};

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `RevelWell has been updated. ` + `Reload to display the latest version?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
