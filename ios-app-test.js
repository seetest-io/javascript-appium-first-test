"use strict";

function main() {
  var wd = require("wd");
  var assert = require("assert");
  var asserters = wd.asserters;

  var desiredCaps = {
    accessKey: "<ACCESS_KEY>",
    platformName: "ios", // could be also be Android
    //udid: "<UDID OF SPECIFIC DEVICE>", optional
    app: "http://d242m5chux1g9j.cloudfront.net/EriBank.ipa", // if you have the app in your project you can do cloud:com.pacakge.name
    bundleId: "com.experitest.ExperiBank", // would be appPackage and appActivity for Android
    testName: "Javascript iOS App Test"
  };

  var server = "https://cloud.seetest.io/wd/hub";

  var driver = wd.promiseChainRemote(server, 443, desiredCaps);

  driver
    .init(desiredCaps)

        .elementById("usernameTextField").sendKeys("company")
        .elementById("passwordTextField").sendKeys("company")
        .elementById("loginButton").click()
        .elementById("makePaymentButton").click()
        .elementById("phoneTextField").sendKeys("123456")
        .elementById("nameTextField").sendKeys("Test")
        .elementById("amountTextField").sendKeys("10")
        .elementById("countryTextField").sendKeys("US")
        .elementById("sendPaymentButton").click()
        .elementById("Yes").click()
        .elementById("logoutButton").click()
    
    .fin(function() {
      return driver.quit();
    })
    .done();
}

main();
