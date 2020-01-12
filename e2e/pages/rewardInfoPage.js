var RewardInfoPage = function () {
    'use strict';
    // Create Info page
    var objRepo = require('../resources/webObjectRepository.json');

    var objLocator = new utils.objectLocator();
    var waitActions = new commons.waitActions();
    
  //  this.Page = objLocator.findLocator(objRepo.createInfoPage.infoPage);
    
    this.Page  = element(by.css('div.sc-fzXfNP.cjVnST > h3.sc-fzXfNR.bAzGIE'));
    this.rewardListPageLink  = element(by.css('ul.ant-menu.mainMenu.ant-menu-white.ant-menu-inline-collapsed.ant-menu-root.ant-menu-vertical > li:first-child'));
    
    this.isElementDisplayed = function (element) {
        waitActions.waitForElementIsDisplayed(element);
        return this;
    };

    this.scrollToView = function (element) {
        waitActions.setScrollPage(element);
        return this;
    };
};
module.exports = new RewardInfoPage();