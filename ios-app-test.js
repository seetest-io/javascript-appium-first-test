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
        platformName: 'ios',
        //udid: "<UDID OF SPECIFIC DEVICE>", optional
        app: "http://d242m5chux1g9j.cloudfront.net/EriBank.ipa", // if you have the app in your project you can do cloud:com.pacakge.name
        bundleId: "com.experitest.ExperiBank", // would be appPackage and appActivity for Android
        testName: "Javascript iOS App Test"
      }
  };

  webdriverio
    .remote(options)
    .init()
    .setValue("//*[@id='usernameTextField']", "company")
    .setValue("//*[@id='passwordTextField']", "company")
    .click("//*[@id='loginButton']")
    .click("//*[@id='makePaymentButton']")
    .setValue("//*[@id='phoneTextField']", "123456")
    .setValue("//*[@id='nameTextField']", "Test")
    .setValue("//*[@id='amountTextField']", "10")
    .setValue("//*[@id='countryTextField']", "US")
    .click("//*[@id='sendPaymentButton']")
    .click("//*[@id='Yes']")
    .click("//*[@id='logoutButton']")
    .end()
    .catch(function (err) {
        console.log(err);
    });
  }

main();
