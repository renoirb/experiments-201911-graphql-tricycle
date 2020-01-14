const main = {
  '*.{json,js,ts,md,graphql}': ['npm run fix', 'git add'],
  'package.json': ['sort-package-json', 'git add'],
}

module.exports = main
