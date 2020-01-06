describe('Testing authorization of user roles and groups', function () {

    'use strict';
   
    var testData = require('../resources/usersDetails.json');
   
    var loginPage = new pages.loginPage();
    

    // dash board links for features
    var rewardsLink = element(by.css('a[href*="/dashboard/p/rewards"]'));
    var loggedInUserLogo = element(by.css('div.sc-fzXfQV.bAzGKD'));
    var cataloguesLink = element(by.css('a[href*="/dashboard/p/catalogues"]'));
    var reportsLink = element(by.css('a[href*="/dashboard/p/reports"]'));
    var campaignsLink = element(by.css('a[href*="/dashboard/p/campaigns"]'));
   
    var loyaltiesLink = element(by.css('a[href*="/dashboard/p/loyalties"]'));
    var rulesLink = element(by.css('a[href*="/dashboard/p/rules"]'));
    var merchantsLink = element(by.css('a[href*="/dashboard/p/merchants"]'));

    var customersLink = element(by.css('a[href*="/dashboard/p/customers"]'));
    var bulkactionLink = element(by.css('a[href*="/dashboard/p/bulkaction"]'));
    var settingsLink = element(by.css('a[href*="/dashboard/p/settings"]'));


    beforeEach(function () {
      loginPage.openDashBoard(testData.perx.baseUrl);
      loginPage.isPageLoaded;
     
      
    });


it('admin has privilege to access all features in dashboard', function () {     
  // login as admin
  loginPage.enterUserName(testData.admin.user);
  loginPage.enterPassword(testData.admin.password);
  loginPage.clickLoginBtn();
  
  // verify feature links
          expect(loggedInUserLogo.isDisplayed()).toBeTruthy();
          expect(rewardsLink.isDisplayed()).toBeTruthy();
          expect(cataloguesLink.isDisplayed()).toBeTruthy();
          expect(campaignsLink.isDisplayed()).toBeTruthy();
          expect(loyaltiesLink.isDisplayed()).toBeTruthy();
          expect(reportsLink.isDisplayed()).toBeTruthy();
          expect(rulesLink.isDisplayed()).toBeTruthy();
          expect(merchantsLink.isDisplayed()).toBeTruthy();
          expect(customersLink.isDisplayed()).toBeTruthy();
          expect(bulkactionLink.isDisplayed()).toBeTruthy();
          expect(settingsLink.isDisplayed()).toBeTruthy();
  });

  it('reward admin has rights to access only rewards feature not others', function () {     
      // login as reward admin
      loginPage.enterUserName(testData.nonAdmin.user);
      loginPage.enterPassword(testData.nonAdmin.password);
      loginPage.clickLoginBtn();
      
      // verify feature links
              expect(loggedInUserLogo.isDisplayed()).toBeTruthy();
              expect(rewardsLink.isDisplayed()).toBeTruthy();
              expect(cataloguesLink.isPresent()).toBe(false);
              expect(campaignsLink.isPresent()).toBe(false);
              expect(loyaltiesLink.isPresent()).toBe(false);
              expect(reportsLink.isPresent()).toBe(false);
              expect(rulesLink.isPresent()).toBe(false);
              expect(merchantsLink.isPresent()).toBe(false);
              expect(customersLink.isPresent()).toBe(false);
              expect(bulkactionLink.isPresent()).toBe(false);
              expect(settingsLink.isPresent()).toBe(false);
    });
});