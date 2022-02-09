// apollo.config.js
// eslint-disable-next-line no-undef
module.exports = {
  client: {
    service: {
      name: "my-app",
      // URL to the GraphQL API
      url: "http://localhost:1337/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};
