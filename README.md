# webpack-system-register, issue 12

ref: [CanopyTax/webpack-system-register#12](CanopyTax/webpack-system-register#12)

## How to run locally

* run `npm install`
* run `npm run build`
* look at the generated output in the `dist` directory
* you will also see a console output similar to this one:

```
Hash: bf4a2ac4760c27d51e09
Version: webpack 2.2.1
Time: 1600ms
            Asset     Size  Chunks             Chunk Names
   main.bundle.js  3.09 kB       0  [emitted]  main
index.bundle.html   1.4 kB          [emitted]
   [0] ./src/main.js 115 bytes {0} [built]

ERROR in   Error: /Users/morficus/workspace/webpack-system-register-issue-12/src/index.html:1
  System.register([], function($__export) {
  ^
  ReferenceError: System is not defined

  - index.html:1
    /Users/morficus/workspace/webpack-system-register-issue-12/src/index.html:1:1

  - index.js:232 HtmlWebpackPlugin.evaluateCompilationResult
    [webpack-system-register-issue-12]/[html-webpack-plugin]/index.js:232:26

  - index.js:117
    [webpack-system-register-issue-12]/[html-webpack-plugin]/index.js:117:21

  - util.js:16 tryCatcher
    [webpack-system-register-issue-12]/[bluebird]/js/release/util.js:16:23

  - promise.js:512 Promise._settlePromiseFromHandler
    [webpack-system-register-issue-12]/[bluebird]/js/release/promise.js:512:31

  - promise.js:569 Promise._settlePromise
    [webpack-system-register-issue-12]/[bluebird]/js/release/promise.js:569:18

  - promise.js:614 Promise._settlePromise0
    [webpack-system-register-issue-12]/[bluebird]/js/release/promise.js:614:10

  - promise.js:693 Promise._settlePromises
    [webpack-system-register-issue-12]/[bluebird]/js/release/promise.js:693:18

  - async.js:133 Async._drainQueue
    [webpack-system-register-issue-12]/[bluebird]/js/release/async.js:133:16

  - async.js:143 Async._drainQueues
    [webpack-system-register-issue-12]/[bluebird]/js/release/async.js:143:10


Child html-webpack-plugin for "index.bundle.html":
       [0] ./~/lodash/lodash.js 540 kB {0} [built]
       [1] (webpack)/buildin/global.js 509 bytes {0} [built]
       [2] (webpack)/buildin/module.js 517 bytes {0} [built]
       [3] ./~/html-webpack-plugin/lib/loader.js!./src/index.html 448 bytes {0} [built]

```
