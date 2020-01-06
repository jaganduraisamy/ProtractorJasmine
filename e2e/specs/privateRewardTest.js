describe('All fields related to catalogues, labels, brands, tags and categories should disappaer', function () {

    'use strict';
   
    var testData = require('../resources/usersDetails.json');
   
    var loginPage = new pages.loginPage();
    var homePage = new pages.homePage();


    // dash board links for features
    var rewardsLink = element(by.css('a[href*="/dashboard/p/rewards"]'));
    var loggedInUserLogo = element(by.css('div.sc-fzXfQV.bAzGKD'));
    var createNewRewardBtn = element(by.css('button.ant-btn.bdYfNv.ant-btn-primary'));
    var infoPage = element(by.css('strong.sc-fzXfNf.fRnqps'));
  
    var rewardNameInput = element(by.css('[name="name_en"]'));
   
    var privateRadioBtn = element(by.css('div > div:first-child > div.ant-collapse-item.ant-collapse-no-arrow.hozGFb > div.ant-collapse-content > div.ant-collapse-content-box > div:first-child > div.ant-col.ant-form-item-control-wrapper > div.ant-form-item-control > span.ant-form-item-children > div.ant-radio-group.ant-radio-group-outline > label:nth-of-type(2) > span:nth-of-type(2)'));
     var brandSection = element(by.css('div.ant-collapse-content-box > div:nth-of-type(6) > div.ant-col.ant-form-item-label'));
    var tagSection = element(by.css('div.ant-collapse-content-box > div:nth-of-type(7) > div.ant-col.ant-form-item-label > label'));
    var categoriesSection = element(by.css('div.ant-collapse-content-box > div:nth-of-type(8) > div.ant-col.ant-form-item-label > label'));
    var labelSection = element(by.css('div.ant-collapse-content-box > div:nth-of-type(9) > div.ant-col.ant-form-item-label > label'));
      
    beforeEach(function () {
      loginPage.openDashBoard(testData.perx.baseUrl);
      loginPage.isPageLoaded;
      
       // login as reward admin
       loginPage.enterUserName(testData.nonAdmin.user);
       loginPage.enterPassword(testData.nonAdmin.password);
       loginPage.clickLoginBtn();

       // Click new reward btn
       expect(loggedInUserLogo.isDisplayed()).toBeTruthy();
       rewardsLink.click();
       createNewRewardBtn.click();
       expect(infoPage.isDisplayed()).toBeTruthy();
    });



it('certain sections should get disappear for private rewards', function () {
       var date = new Date();
       var timestamp = date.getTime();
       var newRewardName = "JD-PrivateReward"+timestamp;

       privateRadioBtn.click();
       rewardNameInput.sendKeys(newRewardName);
       homePage.scrollToView(brandSection);
       expect(brandSection.isPresent()).toBe(false);
       expect(tagSection.isPresent()).toBe(false);
       expect(categoriesSection.isPresent()).toBe(false);
       expect(labelSection.isPresent()).toBe(false);
       
     });
});