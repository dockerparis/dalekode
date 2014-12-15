#!/bin/sh

set -e

git clone -q "https://user:password@github.com/$1" project

jshint --reporter /home/node_modules/jshint-html-reporter/reporter.js project
