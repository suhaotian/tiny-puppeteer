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
const puppeteer= require("tiny-puppeteer");
const browser = await puppeteer.launch({
  headless: false,
  // executablePath: default is use chrome path
});
```

## Warn 

- You should had install chrome, because the `executablePath` depends chrome 
- Please don't set ignore-scripts to true. Because `package.json`:

```json
{
  "name": "tiny-puppeteer",
  "version": "1.2.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "preinstall": "npm install puppeteer --ignore-scripts"
  },
  "dependencies": {
    "chrome-launcher": "^0.10.2"
  }
}

```