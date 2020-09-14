module.exports = {
  siteMetadata: {
    title: 'CMSClubs',
    keywords: ['CSEC', 'Computer Science Enrichment Club', 'AMACSS', 'UTSC', 'cs', 'UTSC CS', 'UofT CS', 'University of Toronto', 'Scarborough', 'Computer Science'],
    description: 'Your gateway to all things Computer Science, Statistics, and Mathematics at UTSC student CMS clubs.',
    author: 'Computer Science Enrichment Club'
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    'gatsby-plugin-layout',
    'gatsby-plugin-sass',
    `gatsby-plugin-netlify-cms`,
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `Rubik\:400,500`,
          `noto sans\:500,600`
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
          exclude: /node_modules/
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: './src/images/Logo.png'
      }
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        aliases: {
          '@components': './src/components',
          '@util': './src/util',
          '@sections': './src/components/pages',
          '@styles': './src/styles',
          '@images': './src/images'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 8001,
        production: true
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-112733614-3",
      },
    },
  ]
}
