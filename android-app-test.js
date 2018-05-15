"use strict";

function main() {
  var wd = require("wd");
  var assert = require("assert");
  var asserters = wd.asserters;

  var desiredCaps = {
    accessKey: "<ACCESS_KEY>",
    platformName: "android", // could be also be ios
    //udid: "<UDID OF SPECIFIC DEVICE>", optional
    app: "http://d242m5chux1g9j.cloudfront.net/eribank.apk", // if you have the app in your project you can do cloud:com.pacakge.name
    appPackage: "com.experitest.ExperiBank",
    appActivity: ".LoginActivity",
    testName: "Javascript Android App Test"
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
        .elementById("button1").click()
        .elementById("logoutButton").click()
    
    .fin(function() {
      return driver.quit();
    })
    .done();
}

main();
