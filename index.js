const puppeteer= require("puppeteer");
const chromeFinder = require('chrome-launcher/dist/chrome-finder');
const getPlatform = require('chrome-launcher/dist/utils').getPlatform;


const tmpLaunch = puppeteer.launch;

puppeteer.launch = function(options = {}) {
  if (!options['executablePath']) {
    const chromePaths = chromeFinder[getPlatform()]()
    if (!chromePaths || !chromePaths[0]) throw "Don't find chrome install path, maybe you haven't install chrome :("
    options['executablePath'] = chromePaths[0];
  }
  return tmpLaunch(options);
}

module.exports = puppeteer;