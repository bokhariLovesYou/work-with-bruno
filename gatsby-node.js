/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")
  const PageTemplate = path.resolve("./src/templates/Page.js")
  const HomepageTemplate = path.resolve("./src/templates/HomepageTemplate.js")
  const WhyBrunoTemplate = path.resolve("./src/templates/WhyBrunoTemplate.js")
  const FeaturesTemplate = path.resolve("./src/templates/FeaturesTemplate.js")
  const BlogOverviewTemplate = path.resolve("./src/templates/BlogOverviewTemplate.js")
  const HowItWorksTemplate = path.resolve("./src/templates/HowItWorksTemplate.js")

  return graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
            template
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const BlogPosts = result.data.allWordpressPost.edges
    BlogPosts.forEach(post => {
      createPage({
        path: `/blog/${post.node.slug}`,
        component: BlogPostTemplate,
        context: {
          id: post.node.wordpress_id,
        },
      })

      const Pages = result.data.allWordpressPage.edges
      Pages.forEach(page => {
        createPage({
          path: page.node.template === 'template-homepage.php' ? `/` : `/${page.node.slug}`,
          component: (
            () => {
              if (page.node.template === 'template-homepage.php') {
                return HomepageTemplate; 
              } else if (page.node.template === 'template-whyBruno.php') {
                return WhyBrunoTemplate;
              } else if (page.node.template === 'template-features.php') {
                return FeaturesTemplate;
              } else if (page.node.template === 'template-blogOverview.php') {
                return BlogOverviewTemplate;
              } else if (page.node.template === 'template-howItWorks.php') {
                return HowItWorksTemplate;
              } else {
                return PageTemplate;
              }
            }
            )(),
          context: {
            id: page.node.wordpress_id,
          },
        })
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}
