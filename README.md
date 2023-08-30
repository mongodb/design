# MongoDB.design

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui/material-ui/blob/HEAD/LICENSE)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fmongodb%2Fdesign%2Fbadge%3Fref%3Dmain&style=flat)](https://actions-badge.atrox.dev/mongodb/design/goto?ref=main)

This repository houses the NextJS application for mongoDB.design, the public documentation website for MongoDB's Leafygreen UI Library.

## Environment Variables

The Contentstack tokens can be found under `Settings > Tokens > Delivery Tokens`.

## Running with linked packages

1. Run `yarn install`
2. If the package you want to link to has not been published yet, create an empty folder inside `node_modules/@leafygreen-ui/` with the name of the unpublished package you want to link to. E.g. `node_modules/@leafygreen-ui/<unpublished-package-name>`
3. From `leafygreen-ui` directory, run `yarn run link <path/to/design>`
4. Update `next.config.ts` to build linked files
   - Change line 76 to: `const LGModuleRegex = /(.+(node_modules\/@leafygreen-ui))|(.+(leafygreen-ui\/packages))/g;`
5. Run the dev server: `yarn dev`
6. If there are React mismatch errors you will need to link react and react-dom from the `leafygreen-ui` directory:
   - cd into react node_module folder `cd node_modules/react`
   - run `yarn link`
   - cd into react-dom node_module folder `cd node_modules/react-dom`
   - run `yarn link`
   - inside this package run `yarn link "react"` and `yarn link "react-dom"`
   - run `yarn dev`
