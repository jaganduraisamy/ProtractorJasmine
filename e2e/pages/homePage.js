module.exports = function () {
    'use strict';
    // Home page
    var objRepo = require('../resources/webObjectRepository.json');

    var objLocator = new utils.objectLocator();
    var waitActions = new commons.waitActions();
    var buttonActions = new commons.buttonActions();

    var rewardsLink = element(by.css('a[href*="/dashboard/p/rewards"]'));
    var loggedInUserLogo = element(by.css('div.sc-fzXfQV.bAzGKD'));
    var createNewRewardBtn = objLocator.findLocator(objRepo.loginPage.createRewardBtn);

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

    this.pickTomorrowDate = function (element){
    
        const EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(element), 5000).then(() => {

            element.click();
            var dateInpputEle = browser.findElement(by.css('input.ant-calendar-input'));
            dateInpputEle.sendKeys(getCurrentDate());
            dateInpputEle.sendKeys(protractor.Key.ENTER);
       });
    };

    function getCurrentDate() {
        var d = new Date();
        var month = '' + (d.getMonth() + 1);
        var day = '' + (d.getDate() + 1);
        var year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
};