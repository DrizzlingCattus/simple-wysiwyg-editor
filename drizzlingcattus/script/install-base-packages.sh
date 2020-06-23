#!/bin/bash

# babel
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save-dev @babel/plugin-transform-runtime

# eslint
## Notice - https://github.com/babel/babel-eslint#note-babel-eslint-is-being-moved-into-the-babel-monorepo-please-follow-along-here-to-track-our-progress
## Still experimental from 2019 dec (https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin)
## move babel-eslint to babel monorepo
npm install --save-dev eslint babel-eslint
npx install-peerdeps --dev eslint-config-airbnb

# webpack
npm install --save-dev webpack webpack-cli webpack-dev-server
# webpack loaders
npm install --save-dev babel-loader css-loader
# webpack plugins
# npm install --save-dev mini-css-extract-plugin

