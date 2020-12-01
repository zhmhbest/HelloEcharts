# Hello Echarts

- [demo](https://echarts.apache.org/examples/zh/index.html)

## Ready

```bash
npm init -f
npm -D i cross-env
npm -D i webpack@4 webpack-cli@3
npm -D i webpack-dev-server@3 html-webpack-plugin@4
npm -S i echarts
```

## Run

```bash
npx webpack-dev-server --inline --progress
# http://localhost:9000/
```

## Build

```bash
npx cross-env NODE_ENV=production webpack
```
