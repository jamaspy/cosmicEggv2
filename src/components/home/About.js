import React from "react";
import StyledTitle from "../styledComponents/StyledTitle";
import Video from "../video/video";
const About = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center md:flex-row"
        // style={{ backgroundColor: "rgba(219,209,204, 1)" }}
      >
        <div className="md:w-1/2 font-montserrat font-light p-6 text-justify">
          <StyledTitle title="About" subtitle="Us" />
          <p className="font-montserrat font-light text-lg text-gray-800">
            RevelWell is your dedicated online wellness platform offering world
            class training, the highest quality streaming and a one-on-one
            dialogue with your trainer from the comfort of your own home. Ride
            and Yoga are available 24/7, so you can train when and where suits
            you.
          </p>
          <br />
          <p className="font-montserrat font-semibold text-lg text-gray-800">
            Choose from a huge selection of Rides and Yoga Flows that you can
            access at a time that suits YOU!
          </p>
          <br />
          <p className="font-montserrat font-light text-lg text-gray-800">
            Our purpose is to empower people with choice on how, when and where
            they train. We offer world class training from a growing team of
            leading wellness experts. Our vision is to create the new benchmark
            for digital fitness and wellbeing, for people anywhere, with a focus
            on personal and individual connection and a two-way dialogue between
            trainer and clientele.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Video
            videoSrcURL="https://stream.mux.com/AXqCdIllYWKsXcK1QFB00ly2u00iX7GAYnpoDWwOC0267I.m3u8"
            posterImage="https://image.mux.com/AXqCdIllYWKsXcK1QFB00ly2u00iX7GAYnpoDWwOC0267I/thumbnail.png?time=9"
            videoID="Home Page Sizzle"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
