import { Link, navigate } from "gatsby";
import React, { useState, useEffect, useContext } from "react";
import { menuOptions } from "../data/menu";
import { GlobalDispatchContext } from "../context/GlobalContextProvider";
import { useIdentityContext } from "react-netlify-identity-widget";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const {
    user,
    isLoggedIn,
    logoutUser,
    isConfirmedUser,
  } = useIdentityContext();

  const dispatch = useContext(GlobalDispatchContext);
  useEffect(() => {
    dispatch({
      type: "LOG_IN",
      netlify: isLoggedIn,
      isConfirmed: isConfirmedUser,
      user,
    });
  }, [isLoggedIn]);

  return (
    <header className="bg-transparent z-50 absolute">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <button
          className="items-center block px-3 py-2 text-white border border-white rounded md:hidden transition-all duration-500 ease-in-out"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block ml-auto` : `hidden`
          } md:block md:items-center w-full md:w-auto transition-all duration-500 ease-in-out`}
        >
          {menuOptions.map((link) => (
            <Link
              className="block mt-4 font-montserrat font-light text-white no-underline md:inline-block md:mt-0 md:ml-6 hover:text-blue-800 hover:underline "
              key={link.title}
              to={link.slug}
            >
              {link.title}
            </Link>
          ))}
          {isLoggedIn ? (
            isConfirmedUser && (
              <>
                <Link to="/app/profile">Profile</Link>

                <Link
                  to="/login/"
                  onClick={(event) => {
                    event.preventDefault();
                    logoutUser(() => navigate(`/login`));
                  }}
                  key="logout"
                >
                  Logout
                </Link>
              </>
            )
          ) : (
            <>
              <Link to="/signup/" key="signup">
                Sign Up
              </Link>
              <Link to="/login/" key="login">
                Login
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
