const antdLessLoader = require("next-antd-aza-less")
const withTM = require("next-transpile-modules")
// const modifyVars = require("./your/custom/vars")
const withCSS = require("@zeit/next-css")
const withPlugins = require("next-compose-plugins")

if (typeof require !== "undefined") {
  require.extensions[".less"] = file => {}
  // require.extensions[".css"] = file => {}
}

/* Without CSS Modules, with PostCSS */
module.exports = withPlugins([
  [
    withCSS(
      antdLessLoader({
        // exportPathMap: function() {
        //   return {
        //     '/': { page: '/' },
        //     '/dashboard'
        //   }
        // },
        // transpileModules: ['antd'],
        cssModules: false,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: "[local]___[hash:base64:5]"
        },
        lessLoaderOptions: {
          javascriptEnabled: true
        }
      })
    )
  ],
  {
    exportPathMap: async function(defaultPathMap) {
      return {
        "/admin": { page: "/" },
        "/admin/dashboard/project": {
          page: "/dashboard",
          query: { page: "project" }
        },
        "/admin/dashboard/reports": {
          page: "/dashboard",
          query: { page: "reports" }
        }
      }
    }
  }
])
