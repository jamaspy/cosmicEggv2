import React from "react";
import StyledTitle from "../styledComponents/StyledTitle";
import { MdDirectionsBike } from "react-icons/md";
import { GrYoga } from "react-icons/gr";
import { FiUnlock } from "react-icons/fi";
const Services = () => {
  return (
    <div className="py-12 bg-gray-100 ">
      <StyledTitle title="What We" subtitle="Offer" />
      <div className="flex flex-col sm:flex-row m-auto">
        <div className=" flex-1 flex flex-col items-center h-full my-3 px-2">
          <MdDirectionsBike className="text-6xl text-gray-800" />
          <p className="text-2xl font-montserrat text-gray-800 font-light">
            CHOOSE YOUR RIDE
          </p>
          <p className=" font-montserrat text-gray-800 font-light">
            Choose from a huge selection of rides to suit your mood and energise
            your day
          </p>
        </div>
        <div className=" flex-1 flex flex-col items-center h-full my-3 px-2">
          <GrYoga className="text-6xl text-gray-800" />
          <p className="text-2xl font-montserrat text-gray-800 font-light">
            FREE YOGA
          </p>
          <p className=" font-montserrat text-gray-800 font-light">
            Find your flow with guided yoga sessions. Take on a 4 part series or
            a quick 25 minute flow. All included in your subscription
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center h-full my-3 px-2">
          <FiUnlock className="text-6xl text-gray-800" />
          <p className="text-2xl font-montserrat text-gray-800 font-light">
            NO LOCK IN CONTRACT
          </p>
          <p className=" font-montserrat text-gray-800 font-light">
            Zero Pressure, Zero Commiment. Signup today and get your first week
            free with access to the FULL RevelWell suite
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
