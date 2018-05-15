"use strict";

function main() {
  var wd = require("wd");
  var assert = require("assert");
  var asserters = wd.asserters;

  var desiredCaps = {
    accessKey: "<ACCESS_KEY>",
    platformName: "ios",
    browserName: "safari",
    //udid: "<UDID OF SPECIFIC DEVICE>", optional
    testName: "Javascript iOS Web Test",
  };

  var server = "https://cloud.seetest.io/wd/hub";


  var browser = wd.promiseChainRemote(server, 443, desiredCaps);
  browser
  .init(desiredCaps)
  .get("https://amazon.com")
  .elementByXPath("//*[@name='k']").sendKeys("iPhone")
  .elementByXPath("(//*[@class='nav-input'])[1]").click()
  .elementByXPath("(//*[@class='sx-table-row'])[1]")
  .then(function(){
    return browser.title();
  })
  .then(function(title){
    console.log("The title of the page is: ", title);
  })
  .fin(function() {
    return browser.quit();
  })
  .done();
}

main();
