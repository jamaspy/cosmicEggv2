import React from "react";
import StyledTitle from "../styledComponents/StyledTitle";
import Video from "../video/video";
const About = () => {
  return (
    <div className="bg-gray-100">
      <StyledTitle title="About" subtitle="Us" />
      <div className="flex flex-col items-center md:flex-row p-12">
        <div className="w-2/3 md:w-1/3 shadow-2xl">
          <Video
            videoSrcURL="https://stream.mux.com/AXqCdIllYWKsXcK1QFB00ly2u00iX7GAYnpoDWwOC0267I.m3u8"
            posterImage="https://image.mux.com/AXqCdIllYWKsXcK1QFB00ly2u00iX7GAYnpoDWwOC0267I/thumbnail.png?time=9"
            videoID="Home Page Sizzle"
          />
        </div>
        <div className="md:w-2/3 md:mr-8 font-montserrat font-light ">
          <p className="font-montserrat font-light">
            RevelWell is your dedicated online wellness platform offering world
            class training, the highest quality streaming and a one-on-one
            dialogue with your trainer from the comfort of your own home. Ride
            and Yoga are available 24/7, so you can train when and where suits
            you.
          </p>
          <p>
            Choose from a huge selection of Rides and Yoga Flows that you can
            access at a time that suits YOU!
          </p>
          <p>
            Our purpose is to empower people with choice on how, when and where
            they train. We offer world class training from a growing team of
            leading wellness experts. Our vision is to create the new benchmark
            for digital fitness and wellbeing, for people anywhere, with a focus
            on personal and individual connection and a two-way dialogue between
            trainer and clientele.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
