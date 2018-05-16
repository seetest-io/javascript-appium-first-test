"use strict";
var webdriverio = require('webdriverio');

function main() {

  let options = {
    host: 'cloud.seetest.io',
    protocol: 'https',
    port: 443,
    path: '',  
    desiredCapabilities: {
        accessKey: "<ACCESS_KEY>",
        platformName: 'android',
        browsermName: 'chrome',
        //udid: "<UDID OF SPECIFIC DEVICE>", optional
        testName: "Javascript Android Web Test"
      }
  };

  webdriverio
    .remote(options)
    .init()
    .url("https://ebay.com")
    .setValue("//*[@id='kw']", "iPhone")
    .click("//*[@id='ghs-submit']")
    .pause(2000)
    .getTitle().then(function(title){
      console.log("The title of the page is: ", title);
    })
    .end()
    .catch(function (err) {
        console.log(err);
    });
  }

main();
