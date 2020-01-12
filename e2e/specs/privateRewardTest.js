var homePage = require('../pages/HomePage');
var loginPage = require('../pages/LoginPage');
var createInfoPage = require('../pages/CreateInfoPage');
describe('All fields related to catalogues, labels, brands, tags and categories should disappaer', function() {

    'use strict';

    var testData = require('../resources/usersDetails.json');


    beforeEach(function() {
        loginPage.openDashBoard(testData.perx.baseUrl);
        loginPage.isPageLoaded;

        // login as reward admin
        loginPage.enterUserName(testData.nonAdmin.user);
        loginPage.enterPassword(testData.nonAdmin.password);
        loginPage.clickLoginBtn();
        expect(homePage.loggedInUserLogo.isDisplayed()).toBeTruthy();

        // Click new reward btn
        homePage.rewardsLink.click();
        homePage.createNewRewardBtn.click();
        expect(createInfoPage.infoPage.isDisplayed()).toBe(true);
    });



    it('certain sections should get disappear for private rewards', function() {
        var date = new Date();
        var timestamp = date.getTime();
        var newRewardName = "JD-PrivateReward" + timestamp;

        createInfoPage.privateRadioBtn.click();
        createInfoPage.rewardNameInput.sendKeys(newRewardName);
        createInfoPage.scrollToView(createInfoPage.brandSection);
        expect(createInfoPage.brandSection.isPresent()).toBe(false);
        expect(createInfoPage.tagSection.isPresent()).toBe(false);
        expect(createInfoPage.categoriesSection.isPresent()).toBe(false);
        expect(createInfoPage.labelSection.isPresent()).toBe(false);

    });
});