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
  git remote add origin-tags https://${GH_TOKEN}@github.com/Yukioru/ui-98.git > /dev/null 2>&1
  git push --tags --set-upstream origin-tags master
}

setup_git
commit_website_files
upload_files