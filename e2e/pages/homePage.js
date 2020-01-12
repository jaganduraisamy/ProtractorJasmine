var HomePage = function () {
    'use strict';
    // Home page
    var objRepo = require('../resources/webObjectRepository.json');

    var objLocator = new utils.objectLocator();
    var waitActions = new commons.waitActions();
    var buttonActions = new commons.buttonActions();

    this.rewardsLink = objLocator.findLocator(objRepo.homePage.rewardsLink);
    this.loggedInUserLogo = objLocator.findLocator(objRepo.homePage.loggedInUserLogo);
    this.createNewRewardBtn = objLocator.findLocator(objRepo.homePage.createNewRewardBtn);
  
    this.rewardSearchInput  = element(by.css('input.ant-input.ant-input-lg'));
    this.rewardResultRecordEle = element(by.css('tbody.ant-table-tbody > tr:first-child > td:first-child > a > div.iHJFYX'));
   
    // navigation pane links
   // var rewardsLink = element(by.css('a[href*="/dashboard/p/rewards"]'));
   // var loggedInUserLogo = element(by.css('div.sc-fzXfQV.bAzGKD'));
    this.cataloguesLink = element(by.css('a[href*="/dashboard/p/catalogues"]'));
    this.reportsLink = element(by.css('a[href*="/dashboard/p/reports"]'));
    this.campaignsLink = element(by.css('a[href*="/dashboard/p/campaigns"]'));
   
    this.loyaltiesLink = element(by.css('a[href*="/dashboard/p/loyalties"]'));
    this.rulesLink = element(by.css('a[href*="/dashboard/p/rules"]'));
    this.merchantsLink = element(by.css('a[href*="/dashboard/p/merchants"]'));

    this.customersLink = element(by.css('a[href*="/dashboard/p/customers"]'));
    this.bulkactionLink = element(by.css('a[href*="/dashboard/p/bulkaction"]'));
    this.settingsLink = element(by.css('a[href*="/dashboard/p/settings"]'));

    this.isPageLoaded = function () {
        waitActions.waitForElementIsDisplayed(rewardsLink);
        return this;
    };

    this.isElementDisplayed = function (element) {
        waitActions.waitForElementIsDisplayed(element);
        return this;
    };

    this.clickRewardBtn = function () {
        buttonActions.click(rewardsLink);
        return this;
    };

    this.scrollToView = function (element) {
        waitActions.setScrollPage(element);
        return this;
    };
};
module.exports = new HomePage();