#!/usr/bin/env bash
# exit on error
set -o errexit

npm install -g yarn
yarn
yarn build
yarn typeorm migration:run -d dist/src/data-source