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

  var driver = wd.promiseRemote(server);

  driver
    .init(desiredCaps)
    .then(function() {
      return driver.waitForElementById(
        "usernameTextField",
        asserters.isDisplayed && asserters.isEnabled,
        30000
      );
    })
    .then(function(element) {
      return element.sendKeys("company");
    })
    .then(function() {
      return driver.waitForElementById(
        "passwordTextField",
        asserters.isDisplayed && asserters.isEnabled,
        30000
      );
    })
    .then(function(element) {
      return element.sendKeys("company");
    })
    .then(function() {
        return driver.waitForElementById(
          "loginButton",
          asserters.isDisplayed && asserters.isEnabled,
          30000
        );
      })
      .then(function(element) {
        return element.click();
      })
      .then(function() {
        return driver.waitForElementById(
          "makePaymentButton",
          asserters.isDisplayed && asserters.isEnabled,
          30000
        );
      })
      .then(function(element) {
        return element.click();
      })
      .then(function() {
        return driver.waitForElementById(
          "phoneTextField",
          asserters.isDisplayed && asserters.isEnabled,
          30000
        );
      })
      .then(function(element) {
        return element.sendKeys("123456");
      })
      .then(function() {
        return driver.waitForElementById(
          "nameTextField",
          asserters.isDisplayed && asserters.isEnabled,
          30000
        );
      })
      .then(function(element) {
        return element.sendKeys("Test");
      })
      .then(function() {
        return driver.waitForElementById(
          "amountTextField",
          asserters.isDisplayed && asserters.isEnabled,
          30000
        );
      })
      .then(function(element) {
        return element.sendKeys("10");
      })
      .then(function() {
        return driver.waitForElementById(
          "countryTextField",
          asserters.isDisplayed && asserters.isEnabled,
          30000
        );
      })
      .then(function(element) {
        return element.sendKeys("US");
      })
      .then(function() {
        return driver.waitForElementById(
          "sendPaymentButton",
          asserters.isDisplayed && asserters.isEnabled,
          30000
        );
      })
      .then(function(element) {
        return element.click();
      })
      .then(function() {
        return driver.waitForElementById(
          "Yes",
          asserters.isDisplayed && asserters.isEnabled,
          30000
        );
      })
      .then(function(element) {
        return element.click();
      })
      .then(function() {
        return driver.waitForElementById(
          "logoutButton",
          asserters.isDisplayed && asserters.isEnabled,
          30000
        );
      })
      .then(function(element) {
        return element.click();
      })
    .fin(function() {
      return driver.quit();
    })
    .done();
}

main();
