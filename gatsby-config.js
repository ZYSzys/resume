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
  ],
};
