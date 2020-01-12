var homePage = require('../pages/HomePage');
var loginPage = require('../pages/LoginPage');
describe('Testing authorization of user roles and groups', function() {

    'use strict';

    var testData = require('../resources/usersDetails.json');

    beforeEach(function() {
        loginPage.openDashBoard(testData.perx.baseUrl);
        loginPage.isPageLoaded;

    });

    it('admin has privilege to access all features in dashboard', function() {
        // login as admin
        loginPage.enterUserName(testData.admin.user);
        loginPage.enterPassword(testData.admin.password);
        loginPage.clickLoginBtn();

        // verify feature links
        expect(homePage.loggedInUserLogo.isDisplayed()).toBeTruthy();
        expect(homePage.rewardsLink.isDisplayed()).toBeTruthy();
        expect(homePage.cataloguesLink.isDisplayed()).toBeTruthy();
        expect(homePage.campaignsLink.isDisplayed()).toBeTruthy();
        expect(homePage.loyaltiesLink.isDisplayed()).toBeTruthy();
        expect(homePage.reportsLink.isDisplayed()).toBeTruthy();
        expect(homePage.rulesLink.isDisplayed()).toBeTruthy();
        expect(homePage.merchantsLink.isDisplayed()).toBeTruthy();
        expect(homePage.customersLink.isDisplayed()).toBeTruthy();
        expect(homePage.bulkactionLink.isDisplayed()).toBeTruthy();
        expect(homePage.settingsLink.isDisplayed()).toBeTruthy();
    });

    it('reward admin has rights to access only rewards feature not others', function() {
        // login as reward admin
        loginPage.enterUserName(testData.nonAdmin.user);
        loginPage.enterPassword(testData.nonAdmin.password);
        loginPage.clickLoginBtn();

        // verify feature links
        expect(homePage.loggedInUserLogo.isDisplayed()).toBeTruthy();
        expect(homePage.rewardsLink.isDisplayed()).toBeTruthy();
        expect(homePage.cataloguesLink.isPresent()).toBe(false);
        expect(homePage.campaignsLink.isPresent()).toBe(false);
        expect(homePage.loyaltiesLink.isPresent()).toBe(false);
        expect(homePage.reportsLink.isPresent()).toBe(false);
        expect(homePage.rulesLink.isPresent()).toBe(false);
        expect(homePage.merchantsLink.isPresent()).toBe(false);
        expect(homePage.customersLink.isPresent()).toBe(false);
        expect(homePage.bulkactionLink.isPresent()).toBe(false);
        expect(homePage.settingsLink.isPresent()).toBe(false);
    });
});