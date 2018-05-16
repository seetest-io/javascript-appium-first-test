"use strict";
var webdriverio = require('webdriverio');

function main() {

  let options = {
    host: 'cloud.seetest.io',
    protocol: 'https',
    port: 443,
    path: '',  
    desiredCapabilities: {
        // accessKey: "<ACCESS_KEY>",
        accessKey: "eyJ4cC51IjozNCwieHAucCI6MywieHAubSI6Ik1UVXhNVGN4TmpnMU56azBOdyIsImFsZyI6IkhTMjU2In0.eyJleHAiOjE4MzU3Mjc3OTUsImlzcyI6ImNvbS5leHBlcml0ZXN0In0.CRZtp5p8termo831h1Pggx8_CTCIT0YiyAqkr-pJcpM",

        platformName: 'android',
        browsermName: 'chrome',
        udid: "5200db7aec16c42b",
        //udid: "<UDID OF SPECIFIC DEVICE>", optional
        testName: "Javascript iOS Web Test"
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
