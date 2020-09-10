const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const rideTemplate = path.resolve(`./src/templates/RideVideoTemplate.js`);
  const yogaTemplate = path.resolve(`./src/templates/YogaVideoTemplate.js`);
  const blogTemplate = path.resolve("./src/templates/BlogTemplate.js");
  const blogListTemplate = path.resolve("./src/templates/BlogListTemplate.js");
  const result = await graphql(
    `
      {
        ride: allContentfulOnDemandVideo {
          edges {
            node {
              title
              description
              slug
              video {
                mux {
                  playbackId
                }
              }
            }
          }
        }
        yoga: allContentfulOnDemandYogaVideo {
          edges {
            node {
              title
              description
              price
              slug
              contentful_id
              muxVideo {
                mux {
                  playbackId
                  ready
                  id
                }
              }
            }
          }
        }
        allPosts: allContentfulBlog {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const AllRides = result.data.ride.edges;
  const AllYoga = result.data.yoga.edges;
  const posts = result.data.allPosts.edges;
  const postsPerPage = 5;
  const numPages = Math.ceil(posts.length / postsPerPage);

  posts.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: blogTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? "/blogs/" : `blogs/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    });
  });

  AllRides.forEach((outline, index) => {
    const previous =
      index === AllRides.length - 1 ? null : AllRides[index + 1].node;
    const next = index === 0 ? null : AllRides[index - 1].node;

    createPage({
      path: outline.node.slug,
      component: rideTemplate,
      context: {
        slug: outline.node.slug,
        previous,
        next,
      },
    });
  });

  AllYoga.forEach((outline, index) => {
    const previous =
      index === AllYoga.length - 1 ? null : AllYoga[index + 1].node;
    const next = index === 0 ? null : AllYoga[index - 1].node;

    createPage({
      path: outline.node.slug,
      component: yogaTemplate,
      context: {
        slug: outline.node.slug,
        previous,
        next,
      },
    });
  });
};
