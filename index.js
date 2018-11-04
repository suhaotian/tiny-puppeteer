const puppeteer = require("puppeteer-core");
const findChrome = require('./find_chrome');

module.exports = function(options = {}) {
  const chromePaths = options.executablePath || findChrome().pop();
  if (!chromePaths) console.error("Could not find Chrome installation, please make sure Chrome browser is installed from https://www.google.com/chrome/.");
  options['executablePath'] = chromePaths;
  return puppeteer.launch(options);
};