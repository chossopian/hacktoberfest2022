const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
pptr.use(AdblockerPlugin({blockTrackers: true}));
const delay = require('delay');
const chromePaths = require('chrome-paths');
const fetch = require('node-fetch');