module.exports = {
  siteMetadata: {
    siteUrl: `https://kihyun.me`,
  },
  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://kihyun.me", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "Ki hyun lee", // Used in manifest.json
          shortName: "Ki hyun lee", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        googleAnalytics: {
          trackingId: "G-MMB05FRLGZ",
          anonymize: true, // Default true
          environments: ["production"], // Default ["production"]
        },
      },
    },
  ],
};
