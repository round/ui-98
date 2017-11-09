#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git checkout -b master
  git add package.json
}

upload_files() {
  git push --tags 
}

setup_git
commit_website_files
upload_files