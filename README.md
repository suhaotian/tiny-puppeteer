# Tiny puppeteer

Install puppeteer fast

## install

```bash
yarn add tiny-puppeteer
```
or
```bash
npm install tiny-puppeteer
```

## Usage

```js
const {launch} = require("tiny-puppeteer");
const browser = await launch({
  headless: false,
  // executablePath: default is use chrome path
});
```

## Warn 

- You should had install chrome, because the `executablePath` depends chrome 

```json
{
  "name": "tiny-puppeteer",
  "description": "Install puppeteer faster",
  "version": "1.6.0",
  "main": "index.js",
  "license": "MIT",
  "repository": "github:suhaotian/tiny-puppeteer",
  "dependencies": {
    "puppeteer-core": "^1.9.0"
  }
}

```