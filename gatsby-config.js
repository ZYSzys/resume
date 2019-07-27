const path = require('path');

require('dotenv').config({
  path: `.env`,
});

module.exports = {
  pathPrefix: `/resume`,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'zys-resume',
        accessToken: process.env.API_KEY,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
