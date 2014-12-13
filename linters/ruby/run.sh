#!/bin/sh

set -e

git clone -q "https://github.com/$1" project

rubocop --format html
