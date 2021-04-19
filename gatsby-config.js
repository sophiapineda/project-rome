module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-firebase",
    //   options: {
    //     credentials: {
    //       apiKey: "AIzaSyDrOtOOuRvHXZ8g6FXvrKdgB2LhE6k_FZc",
    //       authDomain: "test-e1595.firebaseapp.com",
    //       // databaseURL: "<YOUR_FIREBASE_DATABASE_URL>",
    //       projectId: "test-e1595",
    //       storageBucket: "test-e1595.appspot.com",
    //       messagingSenderId: "111794591330",
    //       appId: "1:111794591330:web:33cc85c3c1e0034955a33b",
    //     }
    //   }
    // },
  //   apiKey: "AIzaSyDrOtOOuRvHXZ8g6FXvrKdgB2LhE6k_FZc",
  // authDomain: "test-e1595.firebaseapp.com",
  // projectId: "test-e1595",
  // storageBucket: "test-e1595.appspot.com",
  // messagingSenderId: "111794591330",
  // appId: "1:111794591330:web:33cc85c3c1e0034955a33b",
  // measurementId: "G-8SSVJH778K"
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
