import { Link } from "gatsby";
import React, { useState } from "react";
import { menuOptions } from "../data/menu";
function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <header className="bg-transparent z-50 absolute">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        {/* <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <svg
              className="w-8 h-8 mr-2 fill-current"
              height="54"
              viewBox="0 0 54 54"
              width="54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link> */}

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
              className="block mt-4 font-montserrat font-light text-white no-underline md:inline-block md:mt-0 md:ml-6 hover:text-red-500 "
              key={link.title}
              to={link.slug}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
