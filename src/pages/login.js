import React, { useState, useContext } from "react";
import Layout from "../components/layout";
import { Link, navigate } from "gatsby";
import { useIdentityContext } from "react-netlify-identity-widget";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider";
const Login = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);
  console.log("TESTY TSTATE", state);
  // useEffect(() => {
  //   dispatch({
  //     type: 'LOG_IN',
  //     netlify: isLoggedIn,
  //     user,
  //   });
  // }, [isLoggedIn]);
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
        console.log("UserStripeID: ", stripeId, "USerProfile: ", getStripeId);
        dispatch({
          type: "LOG_IN",
          netlify: isLoggedIn,
          stripe: stripeId,
          user: getStripeId,
        });
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      });
  };

  return (
    <Layout>
      <div className="flex  justify-center items-center border  w-full h-screen ">
        <div className=" border rounded-lg p-4">
          <div>
            <div className="flex justify-between">
              <label htmlFor="email" className="font-montserrat font-light">
                Email:
              </label>
              <input
                name="email"
                className="bg-transparent border-b border-gray-400"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex justify-between my-3">
              <label
                htmlFor="password"
                className="font-montserrat font-light pr-2"
              >
                Password:
              </label>
              <input
                name="password"
                className="bg-transparent border-b border-gray-400"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="flex my-6 items-center w-full justify-center">
            <button
              onClick={handleSubmit}
              className="bg-white hover:bg-gray-600 rounded-lg px-3 py-2 font-montserrat font-light "
            >
              Login
            </button>
          </div>

          <Link to="/signup/">Not A Member Yet, Sign Up</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
