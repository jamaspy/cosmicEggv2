import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import { menuOptions } from "../data/footer";
// import socialIcons from "../data/icons";
import { Link } from "gatsby";
const Layout = ({ children }) => {
  return (
    <div className="flex font-montserrat flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full mx-auto">{children}</main>

      <footer style={{ backgroundColor: "rgba(46,91,105,1)" }}>
        <nav className="flex flex-col md:flex-row items-center justify-center p-4 mx-auto text-sm md:p-8">
          {menuOptions.map((link) => (
            <Link
              className="block mt-4 font-montserrat font-light text-white no-underline md:inline-block md:mt-0 md:ml-6 hover:text-gray-500"
              key={link.title}
              to={link.slug}
            >
              {link.title}
            </Link>
          ))}
          {/* <div>
            {socialIcons.map((icon, index) => {
              return (
                <a
                  key={index}
                  href={icon.url}
                  target="_blank"
                  aria-label="social media icon"
                  rel="noopener noreferrer"
                >
                  {icon.icon}
                </a>
              );
            })}
          </div> */}
        </nav>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
