# MongoDB.design

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui/material-ui/blob/HEAD/LICENSE)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fmongodb%2Fdesign%2Fbadge%3Fref%3Dmain&style=flat)](https://actions-badge.atrox.dev/mongodb/design/goto?ref=main)

This repository houses the NextJS application for mongoDB.design, the public documentation website for MongoDB's Leafygreen UI Library.

## Environment Variables

The Contentstack tokens can be found under `Settings > Tokens > Delivery Tokens`.

## Running with linked packages

1. From `leafygreen-ui` directory, run `yarn run link <path/to/design>`
2. Update `next.config.ts` to build linked files
   - Change line 76 to: `const LGModuleRegex = /.+(leafygreen-ui\/packages)/g;`
3. Run the dev server: `yarn dev`

## Running with linked packages that haven't been published yet.

1. Run `yarn`
2. Open the `node_modules` folder. Locate the current `leafygreen-ui` directory and add an empty folder with the name of the unpublished package you want to link to
3. Add that package to `package.json`
4. From `leafygreen-ui` directory, run `yarn run link <path/to/design>`
5. Update `next.config.ts` to build linked files
   - Change line 76 to: `const LGModuleRegex = /.+(leafygreen-ui\/packages)/g;`
6. Run the dev server: `yarn dev`
