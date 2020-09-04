import React from "react";
import StyledTitle from "../styledComponents/StyledTitle";
import catAndHumanIllustration from "../../images/dog-illustration.svg";
const Services = () => {
  return (
    <div className="bg-gray-400">
      <StyledTitle title="What We" subtitle="Offer" />
      <div className="flex m-auto">
        <div className="flex-1 text-left">
          <p>
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
        <div className="flex-1">
          <img
            alt="Cat and human sitting on a couch"
            className="block w-1/2 mx-auto mb-8"
            src={catAndHumanIllustration}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
