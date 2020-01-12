var homePage = require('../pages/HomePage');
var loginPage = require('../pages/LoginPage');
var createInfoPage = require('../pages/CreateInfoPage');
var createMechanicsPage = require('../pages/CreateMechanicsPage');
var rewardInfoPage = require('../pages/RewardInfoPage');
describe('Creating new reward - tests', function() {

    'use strict';

    var testData = require('../resources/usersDetails.json');
    var waitActions = new commons.waitActions();

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
        // expect(createInfoPage.infoPage.isDisplayed()).toBe(true);
    });


    it('name is mandatory field while creating new reward', function() {

        createInfoPage.nextBtn.click();
        expect(createInfoPage.nameMandatoryErrorEle.isDisplayed()).toBeTruthy();
        expect(createInfoPage.nameMandatoryErrorEle.getText()).toContain("Rewards must have a name.");
    });

    it('end date is mandatory field while creating new reward', function() {

        var newRewardName = "JD-TestReward";

        createInfoPage.rewardNameInput.sendKeys(newRewardName);
        createInfoPage.nextBtn.click();
        createMechanicsPage.nextBtn.click();

        createMechanicsPage.scrollToView(createMechanicsPage.dateMandatoryErrorEle);
        expect(createMechanicsPage.dateMandatoryErrorEle.isDisplayed()).toBeTruthy();
        expect(createMechanicsPage.dateMandatoryErrorEle.getText()).toContain("Start date & end date required");

    });

    it('successfully created public-reward should be available in rewards list', function() {
        var date = new Date();
        var timestamp = date.getTime();
        var newRewardName = "JD-TestReward" + timestamp;
        createInfoPage.rewardNameInput.sendKeys(newRewardName);
        createInfoPage.nextBtn.click();

        // pick date form end date 
        createMechanicsPage.scrollToView(createMechanicsPage.endDateEle);
        createMechanicsPage.pickTomorrowDate(createMechanicsPage.endDateEle);
        createMechanicsPage.nextBtn.click();

        createMechanicsPage.launchBtn.click();
        browser.sleep(2000);
        waitActions.waitForElementIsDisplayed(rewardInfoPage.Page);
        expect(rewardInfoPage.Page.isDisplayed()).toBeTruthy();

        waitActions.waitForElementIsDisplayed(rewardInfoPage.rewardListPageLink);
        rewardInfoPage.rewardListPageLink.click();
        browser.sleep(1000);

        // search by reward name
        homePage.rewardSearchInput.sendKeys(newRewardName);
        homePage.rewardSearchInput.sendKeys(protractor.Key.ENTER);
        browser.sleep(1000);
        waitActions.waitForElementIsDisplayed(homePage.rewardResultRecordEle);
        expect(homePage.rewardResultRecordEle.isDisplayed()).toBeTruthy();
        expect(homePage.rewardResultRecordEle.getText()).toEqual(newRewardName);
    });


    it('disabled keywords section should get disappear in payload', function() {
        var date = new Date();
        var timestamp = date.getTime();
        var newRewardName = "JD-SystemReward" + timestamp;

        createInfoPage.rewardNameInput.sendKeys(newRewardName);
        createInfoPage.scrollToView(createInfoPage.rewardRecommendationInput);
        createInfoPage.rewardRecommendationInput.sendKeys("Test reward recommendation");
        createInfoPage.rewardRecommendationToggleBtn.click();
        browser.sleep(500);
        // uploadFileToggleBtn.click();
        createInfoPage.nextBtn.click();
        browser.sleep(500);
        // pick date form end date 
        createMechanicsPage.scrollToView(createMechanicsPage.endDateEle);
        createMechanicsPage.pickTomorrowDate(createMechanicsPage.endDateEle);
        createMechanicsPage.nextBtn.click();

        expect(element(by.cssContainingText("label", newRewardName)).isPresent()).toBe(false);
    });

    it('successfully created system-reward should be available in rewards list', function() {
        var date = new Date();
        var timestamp = date.getTime();
        var newRewardName = "JD-SystemReward" + timestamp;

        createInfoPage.systemRadioBtn.click();
        createInfoPage.rewardNameInput.sendKeys(newRewardName);
        createInfoPage.nextBtn.click();

        // pick date form end date 
        createMechanicsPage.scrollToView(createMechanicsPage.endDateEle);
        createMechanicsPage.pickTomorrowDate(createMechanicsPage.endDateEle);
        createMechanicsPage.nextBtn.click();

        createMechanicsPage.launchBtn.click();
        browser.sleep(2000);
        waitActions.waitForElementIsDisplayed(rewardInfoPage.Page);
        expect(rewardInfoPage.Page.isDisplayed()).toBeTruthy();

        waitActions.waitForElementIsDisplayed(rewardInfoPage.rewardListPageLink);
        rewardInfoPage.rewardListPageLink.click();
        browser.sleep(1000);
        // search by reward name

        homePage.rewardSearchInput.sendKeys(newRewardName);
        homePage.rewardSearchInput.sendKeys(protractor.Key.ENTER);

        browser.sleep(1000);

        waitActions.waitForElementIsDisplayed(homePage.rewardResultRecordEle);
        expect(homePage.rewardResultRecordEle.isDisplayed()).toBeTruthy();
        expect(homePage.rewardResultRecordEle.getText()).toEqual(newRewardName);
    });



    it('successfully created private-reward should be available in rewards list', function() {
        var date = new Date();
        var timestamp = date.getTime();
        var newRewardName = "JD-PrivateReward" + timestamp;

        createInfoPage.privateRadioBtn.click();
        createInfoPage.rewardNameInput.sendKeys(newRewardName);
        createInfoPage.nextBtn.click();

        // pick date form end date 
        createMechanicsPage.scrollToView(createMechanicsPage.endDateEle);
        createMechanicsPage.pickTomorrowDate(createMechanicsPage.endDateEle);
        createMechanicsPage.nextBtn.click();

        createMechanicsPage.launchBtn.click();
        browser.sleep(2000);
        waitActions.waitForElementIsDisplayed(rewardInfoPage.Page);
        expect(rewardInfoPage.Page.isDisplayed()).toBeTruthy();

        waitActions.waitForElementIsDisplayed(rewardInfoPage.rewardListPageLink);
        rewardInfoPage.rewardListPageLink.click();
        browser.sleep(1000);
        // search by reward name

        homePage.rewardSearchInput.sendKeys(newRewardName);
        homePage.rewardSearchInput.sendKeys(protractor.Key.ENTER);

        browser.sleep(1000);

        waitActions.waitForElementIsDisplayed(homePage.rewardResultRecordEle);
        expect(homePage.rewardResultRecordEle.isDisplayed()).toBeTruthy();
        expect(homePage.rewardResultRecordEle.getText()).toEqual(newRewardName);
    });

});