
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/bear/Projects/portfolio/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/bear/Projects/portfolio/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/bear/Projects/portfolio/src/pages/index.js"))
}

