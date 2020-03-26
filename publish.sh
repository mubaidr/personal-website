# create new subtree from latest commit for dist/
commit=$(git subtree split --prefix=dist/ -b gh-pages)

# force push this commit to remote
git push mubaidr.github.io $commit:master --force

# git subtree push --prefix=dist/ mubaidr.github.io master
