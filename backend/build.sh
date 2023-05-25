#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
yarn build
yarn typeorm migration:run -d dist/src/data-source
# cd backend
# npm install
# npm run build
# npm run typeorm migration:run -- -d dist/src/data-source