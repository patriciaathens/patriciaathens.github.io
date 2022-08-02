module.exports = {
  siteMetadata: {
    // siteUrl: "https://www.yourdomain.tld",
    title: "Patricia Athens Acorda - Portfolio",
  },
  plugins: ["gatsby-plugin-sass"],
},
{
  resolve: 'gatsby-plugin-load-script',
  options: {
    src: '/script.js', // Change to the script filename
  },
};
