import React from "react";
import StyledTitle from "../styledComponents/StyledTitle";
import { Link } from "gatsby";
const Bike = () => {
  return (
    <div className="bg-gray-100 py-6">
      <StyledTitle title="Become A " subtitle="Reveller" />
      <div className="flex flex-col  sm:flex-row m-auto">
        <div className="flex-1 p-4 mb-4">
          <Link
            className="border uppercase text-gray-800  border-gray-800 text-2xl hover:bg-gray-800 hover:border-gray-800 hover:text-white p-5 rounded-lg hover:shadow-2xl font-montserrat"
            style={{ transition: "all 0.3s linear" }}
            to="/signup/"
          >
            Join The Crew
          </Link>
        </div>
        <div className="flex-1 p-4">
          <Link
            className="border uppercase text-gray-800  border-gray-800 text-2xl hover:bg-gray-800 hover:border-gray-800 hover:text-white p-5 rounded-lg hover:shadow-2xl font-montserrat"
            style={{ transition: "all 0.3s linear" }}
            to="/buybike/"
          >
            Buy A Bike
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bike;
