#!/bin/sh

set -e

git clone -q "https://user:password@github.com/$1" project

rubocop --format html
