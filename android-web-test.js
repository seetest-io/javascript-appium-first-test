"use strict";

function main() {
  var wd = require("wd");
  var assert = require("assert");
  var asserters = wd.asserters;

  var desiredCaps = {
    accessKey: "<ACCESS_KEY>",
    platformName: "android",
    browserName: "chrome",
    //udid: "<UDID OF SPECIFIC DEVICE>", optional
    testName: "Javascript Android Web Test",
  };

  var server = "https://cloud.seetest.io/wd/hub";


  var browser = wd.promiseChainRemote(server, 443, desiredCaps);
  browser
    .init(desiredCaps)
    .get("https://amazon.com")
    .then(function() {
      return browser.waitForElementById(
        "nav-search-keywords",
        asserters.isDisplayed && asserters.isEnabled,
        30000
      );
    })
    .then(function(element) {
      return element.sendKeys("iPhone");
    })
    .then(function() {
      return browser.elementByXPath(
        "(//*[@class='nav-input'])[1]",
        asserters.isDisplayed && asserters.isEnabled,
        30000
      );
    })
    .then(function(element) {
      return element.click();
    })
    .then(function() {
      return browser.elementByXPath(
        "(//*[@class='sx-table-row'])[1]",
        asserters.isDisplayed && asserters.isEnabled,
        30000
      );
    })
    .then(function(){
      return browser.title()
    })
    .then(function(title){
      console.log(title);
    })
    .fin(function() {
      return browser.quit();
    })
    .done();
}

main();
