import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Heading from "../components/home/Heading";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Bike from "../components/home/Bike";
function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <Heading />
        <About />
        <Services />
        <Bike />
      </section>
    </Layout>
  );
}

export default IndexPage;
