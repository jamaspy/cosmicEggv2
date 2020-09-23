import React, { useState, useContext } from "react";
import Layout from "../components/layout";
import {graphql, Link, navigate, useStaticQuery} from "gatsby";
import { useIdentityContext } from "react-netlify-identity-widget";
import {
  GlobalDispatchContext
} from "../context/GlobalContextProvider";
import Img from "gatsby-image";
import {FiLock} from "react-icons/fi";
const Login = () => {
  const dispatch = useContext(GlobalDispatchContext);

  const [userCredentials, setUserCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  console.log(isError, isLoading);
  const { email, password } = userCredentials;

  const handleChange = (event) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
  };
  const { loginUser, isLoggedIn } = useIdentityContext();

  const handleSubmit = () => {
    // event.preventDefault();
    setIsLoading(true);
    loginUser(email, password)
      .then((user) =>
        user.update({
          data: {
            userPackage: "plan_HF8Tc4J2WjLDAg",
            lastLogin: new Date(),
          },
        })
      )
      .then((getStripeId) => {
        const { stripeId } = getStripeId?.user_metadata || undefined;
        dispatch({
          type: "LOG_IN",
          netlify: isLoggedIn,
          stripe: stripeId,
          user: getStripeId,
        });
        console.log("USER_LOGGED_IN")
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
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
              LogIn
            </div>


            <div id="names" className="flex flex-row w-full justify-between ">
              <label
                  htmlFor="email"
                  className="mr-4 font-montserrat font-light"
              >
               Email
              </label>
              <input
                  name="email"
                  onChange={(e) => handleChange(e)}
                  className="bg-transparent border-b text-gray-800 font-montserrat"
              />
            </div>
            <div id="names" className="flex flex-row w-full justify-between ">
              <label
                  htmlFor="password"
                  className="mr-4 font-montserrat font-light"
              >
                Password
              </label>
              <input
                  name="password"
                  type='password'
                  onChange={(e) => handleChange(e)}
                  className="bg-transparent border-b text-gray-800 font-montserrat"
              />
            </div>


            <div className="mt-2 font-montserrat text-light text-sm text-gray-600">
              <Link className="hover:text-gray-800" to="/signup/">
                Not A Member Yet? Sign Up Now
              </Link>
            </div>
            <div className="w-full flex flex-row justify-center mt-6 ">
              <button onClick={handleSubmit} className="border hover:bg-gray-800 hover:text-white hover:border-gray-800 border-gray-500 rounded-lg text-gray-800 p-4 font-montserrat font-semibold ">
                Login <FiLock className="inline" />
              </button>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default Login;
