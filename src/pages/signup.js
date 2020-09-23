import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { FiLock } from "react-icons/fi";
import Card from '../components/card'
import Img from "gatsby-image";
//import Hero from "../components/styledComponents/StyledHero";
const signup = () => {
  const [userCredentials, setUserCredentials] = useState({
    firstname: undefined,
    lastname: undefined,
    email: undefined,
    password: undefined,
    userPackage: "plan_HF8Tc4J2WjLDAg",
    terms: undefined,
  });
  const handleChange = (event) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
  };
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "REVELWELL- Petrol Icon-Logo-Grey" } }) {
        nodes {
          name
          childImageSharp {
            fluid(quality: 90, maxWidth: 1080) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <div className="h-screen flex flex-row justify-center items-center">
        <div className="sm:border border-0 border-gray-600 rounded-lg p-6">
          <div className="w-full">
            <Img fluid={data.allFile.nodes[0].childImageSharp.fluid} />
          </div>
          <div className="text-xl flex flex-row justify-center items-center font-montserrat">
            Join Us For Just $14.95 AUD per week
          </div>
          <div className="flex flex-row justify-center items-center font-montserrat mb-4">
            7 Day Free Trial Cancel Anytime Zero Cancellation Fees
          </div>

          <div id="names" className="flex flex-row w-full justify-between ">
            <label
              htmlFor="firstname"
              className="mr-4 font-montserrat font-light"
            >
              First Name
            </label>
            <input
              name="firstname"
              onChange={(e) => handleChange(e)}
              className="bg-transparent border-b text-gray-800 font-montserrat"
            />
          </div>
          <div id="names" className="flex flex-row w-full justify-between ">
            <label
              htmlFor="lastname"
              className="mr-4 font-montserrat font-light"
            >
              Last Name
            </label>
            <input
              name="lastname"
              onChange={(e) => handleChange(e)}
              className="bg-transparent border-b text-gray-800 font-montserrat"
            />
          </div>
          <div id="contact" className="flex flex-row w-full justify-between ">
            <label htmlFor="email" className="mr-4 font-montserrat font-light">
              Enter Email
            </label>
            <input
              name="email"
              onChange={(e) => handleChange(e)}
              className="bg-transparent border-b text-gray-800 font-montserrat"
            />
          </div>
          <div id="contact" className="flex flex-row w-full justify-between ">
            <label
              htmlFor="confirmemail"
              className="mr-4 font-montserrat font-light"
            >
              Confirm Email
            </label>
            <input
              name="confirmemail"
              onChange={(e) => handleChange(e)}
              className="bg-transparent border-b text-gray-800 font-montserrat"
            />
          </div>
          <div id="contact" className="flex flex-row w-full justify-between ">
            <label
              htmlFor="password"
              className="mr-4 font-montserrat font-light"
            >
              Password
            </label>
            <input
              name="password"
              onChange={(e) => handleChange(e)}
              className="bg-transparent border-b text-gray-800 font-montserrat"
            />
          </div>
          <div id="contact" className="flex flex-row w-full justify-between ">
            <label
              htmlFor="confirmpassword"
              className="mr-4 font-montserrat font-light"
            >
              Confirm Password
            </label>
            <input
              name="confirmpassword"
              onChange={(e) => handleChange(e)}
              className="bg-transparent border-b text-gray-800 font-montserrat"
            />
          </div>
          <div id="payment" className="mt-2 " >
            <label className="mr-4 font-montserrat font-light">
              Payment Details
            </label>
            <Card className="mt-2" email={userCredentials.email} name={`${userCredentials.firstname} ${userCredentials.lastname}`}/>
          </div>
          <div id="contact" className="mt-4">
            <label
              htmlFor="confirmpassword"
              className="mr-4 font-montserrat font-light"
            >
              I confirm that I accept RevelWell`s TCs
            </label>
            <input
              type="checkbox"
              name="confirmpassword"
              onChange={(e) => handleChange(e)}
              className="bg-transparent border-b text-gray-800 font-montserrat"
            />
          </div>
          <div className="mt-2 font-montserrat text-light text-gray-600">
            <Link className="hover:text-gray-800" to="/login/">
              Already A Member? Log In
            </Link>
          </div>
          <div className="w-full flex flex-row justify-center mt-6 ">
            <button className="border hover:bg-gray-800 hover:text-white hover:border-gray-800 border-gray-500 rounded-lg text-gray-800 p-4 font-montserrat font-semibold ">
              Proceed to Secure Checkout <FiLock className="inline" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default signup;
