const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'Smooth DOC',
        siteUrl: 'https://smooth-doc.com',
        description: 'Ready to use documentation theme for Gatsby.',
        baseDirectory: path.resolve(__dirname, '../'),
        author: 'Greg Bergé',
        sections: ['About', 'Guide', 'Components', 'Reference'],
        sitemap: {
          exclude: ['/thanks/'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-154496255-5',
      },
    },
  ],
}
