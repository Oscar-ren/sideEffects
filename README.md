## sideEffects Demo

### run
> npm run build

### entry
`src/sideEffects.js`

### reference
* `src/module/big-module` there is no sideEffects config
* `src/module/big-module-with-flag` this have sideEffects config
* [`lodash-es@4.17.10`](https://github.com/lodash/lodash/blob/es/package.json)

### env
* node v8.5.0
* npm v6.0.0
* webpack @4.10.2

### build result
![image](https://user-images.githubusercontent.com/9464221/40954331-b6e50c58-68b6-11e8-9e11-f5689d65cf2f.png)

