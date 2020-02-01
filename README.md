# Personal Website

<http://mubaidr.js.org/>
<http://mubaidr.netlify.com/>

[![Netlify Status](https://api.netlify.com/api/v1/badges/0d555704-f4b4-40d6-bb78-05495b2b990f/deploy-status)](https://app.netlify.com/sites/mubaidr/deploys)

## build steps

<!-- - git remote add mubaidr.github.io <https://github.com/mubaidr/mubaidr.github.io> -->

- npm run ssr:static
- git subtree push --prefix=dist/ mubaidr.github.io master
