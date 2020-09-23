To publish in NPM
------------------
remove all github configuration
npm set registry http://registry.npmjs.org/
npm login --registry=http://registry.npmjs.org/
ditinexhosting
Hello#9903614705
npm publish


To publish in Github
------------------
add below 2 lines in json. Delete old package name.

"name":"@ditinexhosting/ddux",
"publishConfig": { "registry": "https://npm.pkg.github.com/ditinexhosting" },

change npmrc_bak to npmrc

npm set registry https://npm.pkg.github.com/ditinexhosting
npm login --registry=https://npm.pkg.github.com/
ditinex
d7064887ae5e8fba52e858b0368d0fdea98e7b2d
npm publish