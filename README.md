# public-reports

see [./reports/README](./reports/README.md)

## how to start

```sh
node ➜ /workspaces/public-reports $ cd docusaurus-site/
node ➜ /workspaces/public-reports/docusaurus-site $ npm install
node ➜ /workspaces/public-reports/docusaurus-site $ npm start

> docusaurus-site@0.0.0 start
> docusaurus start -h 127.0.0.1

[INFO] Starting the development server...
[SUCCESS] Docusaurus website is running at: http://127.0.0.1:3000/

✔ Client
  Compiled successfully in 23.03s

client (webpack 5.98.0) compiled successfully
```

deployment

```sh
node ➜ /workspaces/public-reports/docusaurus-site $ GIT_USER=ask-parars npm run deploy

> docusaurus-site@0.0.0 deploy
> docusaurus deploy

[INFO] Deploy command invoked...
[INFO] organizationName: PARARS
[INFO] projectName: public-reports
[INFO] deploymentBranch: gh-pages
[INFO] Remote repo URL: https://ask-parars@github.com/PARARS/public-reports.git
4fa5a3e4bf7cd2ce61deed0f89691d5a1ba93a54
[INFO] `git rev-parse HEAD` code: 0
[INFO] [ja-JP] Creating an optimized production build...

✔ Client
  Compiled successfully in 49.28s

✔ Server
  


● Client █████████████████████████ cache (99%) shutdown IdleFileCachePlugin
 stored

✔ Server
  

[SUCCESS] Generated static files in "build".
```
