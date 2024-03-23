/**
 * A lite version of matchRoutes.
 * @param {Array} routes - An array of route definitions.
 * @param {string} url - The current URL to match against the routes.
 * @returns {Object|null} The matched route and parameters, or null if no match is found.
 */
export function matchRoutes(routes, url) {
  // Remove query string from URL for matching
  const path = url.split('?')[0]

  for (const route of routes) {
    const routePattern = route.path
      .replace(/:[^\s/]+/g, '([^\\s/]+)') // Replace :param with regex group
      .replace(/\//g, '\\/') // Escape slashes
    const regex = new RegExp(`^${routePattern}$`) // Create a regex for matching
    const match = path.match(regex)

    if (match) {
      // Extract dynamic parameters from the URL
      const keys = route.path.match(/:[^\s/]+/g) || []
      const params = keys.reduce((acc, key, index) => {
        const paramName = key.replace(':', '') // Remove ':' from param name
        acc[paramName] = match[index + 1] // +1 because match[0] is the full match
        return acc
      }, {})

      return { route, params }
    }
  }

  return null
}
