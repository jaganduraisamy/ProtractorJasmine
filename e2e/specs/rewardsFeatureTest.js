describe('Creating new reward - tests', function () {

    'use strict';
   
    var testData = require('../resources/usersDetails.json');
   
    var loginPage = new pages.loginPage();
    var homePage = new pages.homePage();
    var waitActions = new commons.waitActions();

    // dash board links for features
    var rewardsLink = element(by.css('a[href*="/dashboard/p/rewards"]'));
    var loggedInUserLogo = element(by.css('div.sc-fzXfQV.bAzGKD'));
    var createNewRewardBtn = element(by.css('button.ant-btn.bdYfNv.ant-btn-primary'));
    var infoPage = element(by.css('strong.sc-fzXfNf.fRnqps'));
    var nextBtn = element(by.css('button.ant-btn.bdYfNv.ant-btn-primary'));
    var nameMandatoryErrorEle = element(by.css('span.ant-form-item-children > div:nth-of-type(2)'));
    var rewardNameInput = element(by.css('[name="name_en"]'));
    var dateMandatoryErrorEle = element(by.css('label.eqwEup'));
    var endDateEle = element(by.css('div.ant-collapse-content-box > div:nth-of-type(2) > div:nth-of-type(2) > div.ant-col.ant-form-item-control-wrapper > div.ant-form-item-control > span.ant-form-item-children > section.sc-fzXfOy.dYspSv > section.sc-fzXfPa.cxtbYi > div > span.sc-fzXfPc.bAzGKj.datePicker.ant-calendar-picker > div > input.ant-calendar-picker-input.ant-input'));

    var launchBtn  = element(by.css('div.bdiHVz > div:nth-of-type(2) > button:nth-of-type(2)'));
    var rewardInfoPage  = element(by.css('div.sc-fzXfNP.cjVnST > h3.sc-fzXfNR.bAzGIE'));
    var rewardListPageLink  = element(by.css('ul.ant-menu.mainMenu.ant-menu-white.ant-menu-inline-collapsed.ant-menu-root.ant-menu-vertical > li:first-child'));
    
    var rewardSearchInput  = element(by.css('input.ant-input.ant-input-lg'));
    var rewardResultRecordEle = element(by.css('tbody.ant-table-tbody > tr:first-child > td:first-child > a > div.iHJFYX'));
    
    var privateRadioBtn = element(by.css('div > div:first-child > div.ant-collapse-item.ant-collapse-no-arrow.hozGFb > div.ant-collapse-content > div.ant-collapse-content-box > div:first-child > div.ant-col.ant-form-item-control-wrapper > div.ant-form-item-control > span.ant-form-item-children > div.ant-radio-group.ant-radio-group-outline > label:nth-of-type(2) > span:nth-of-type(2)'));
    var systemRadioBtn = element(by.css('div.ant-radio-group.ant-radio-group-outline > label:nth-of-type(3)'));
    
    var rewardRecommendationToggleBtn = element(by.css('div > div:nth-of-type(3) > div.ant-collapse-item.ant-collapse-no-arrow.hozGFb > div.ant-collapse-header > div > button.cbfKhz.ant-switch.ant-switch-checked'));
    var rewardRecommendationInput = element(by.css('div > div:nth-of-type(3) > div.ant-collapse-item.ant-collapse-no-arrow.hozGFb > div.ant-collapse-content > div.ant-collapse-content-box > div.ant-row.ant-form-item.sc-fzXfPH.ctqxEg > div.ant-col.ant-form-item-control-wrapper > div.ant-form-item-control > span.ant-form-item-children > div.sc-fzXfPg.bAzGKn > div > div > ul > li > div > input'));

   
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

    it('name is mandatory field while creating new reward', function () {
        
        nextBtn.click();
        expect(nameMandatoryErrorEle.isDisplayed()).toBeTruthy();
        expect(nameMandatoryErrorEle.getText()).toContain("Rewards must have a name.");    
     });

     it('end date is mandatory field while creating new reward', function () {
       
        var newRewardName = "JD-TestReward";
      
        rewardNameInput.sendKeys(newRewardName);
        nextBtn.click();
        nextBtn.click();
        
        homePage.scrollToView(dateMandatoryErrorEle);
        expect(dateMandatoryErrorEle.isDisplayed()).toBeTruthy();
        expect(dateMandatoryErrorEle.getText()).toContain("Start date & end date required");   
 
     });


      it('successfully created public-reward should be available in rewards list', function () {
         var date = new Date();
         var timestamp = date.getTime();
         var newRewardName = "JD-TestReward"+timestamp;
         rewardNameInput.sendKeys(newRewardName);
         nextBtn.click();
  
         // pick date form end date 
         homePage.scrollToView(endDateEle);   
         homePage.pickTomorrowDate(endDateEle);
         nextBtn.click();
  
         launchBtn.click();
         browser.sleep(2000);
         waitActions.waitForElementIsDisplayed(rewardInfoPage);
         expect(rewardInfoPage.isDisplayed()).toBeTruthy();
         
         waitActions.waitForElementIsDisplayed(rewardListPageLink);
         rewardListPageLink.click();
         browser.sleep(1000);
        // search by reward name
  
        rewardSearchInput.sendKeys(newRewardName);
        rewardSearchInput.sendKeys(protractor.Key.ENTER);
  
        browser.sleep(1000);
  
        waitActions.waitForElementIsDisplayed(rewardResultRecordEle);
        expect(rewardResultRecordEle.isDisplayed()).toBeTruthy();
        expect(rewardResultRecordEle.getText()).toEqual(newRewardName);
       });
  
     
      it('disabled keywords section should get disappear in payload', function () {
          var date = new Date();
          var timestamp = date.getTime();
          var newRewardName = "JD-SystemReward"+timestamp;
   
          rewardNameInput.sendKeys(newRewardName);
          homePage.scrollToView(rewardRecommendationInput); 
          rewardRecommendationInput.sendKeys("Test reward recommendation");
          rewardRecommendationToggleBtn.click();
          browser.sleep(500);
         // uploadFileToggleBtn.click();
          nextBtn.click();
          browser.sleep(500);
          // pick date form end date 
          homePage.scrollToView(endDateEle);   
          homePage.pickTomorrowDate(endDateEle);
          nextBtn.click();
   
         expect(element(by.cssContainingText("label",newRewardName)).isPresent()).toBe(false);
        });


 it('successfully created system-reward should be available in rewards list', function () {
   var date = new Date();
   var timestamp = date.getTime();
   var newRewardName = "JD-SystemReward"+timestamp;

   systemRadioBtn.click();
   rewardNameInput.sendKeys(newRewardName);
   nextBtn.click();

   // pick date form end date 
   homePage.scrollToView(endDateEle);   
   homePage.pickTomorrowDate(endDateEle);
   nextBtn.click();

   launchBtn.click();
   browser.sleep(2000);
   waitActions.waitForElementIsDisplayed(rewardInfoPage);
   expect(rewardInfoPage.isDisplayed()).toBeTruthy();
   
   waitActions.waitForElementIsDisplayed(rewardListPageLink);
   rewardListPageLink.click();
   browser.sleep(1000);
  // search by reward name

  rewardSearchInput.sendKeys(newRewardName);
  rewardSearchInput.sendKeys(protractor.Key.ENTER);

  browser.sleep(1000);

  waitActions.waitForElementIsDisplayed(rewardResultRecordEle);
  expect(rewardResultRecordEle.isDisplayed()).toBeTruthy();
  expect(rewardResultRecordEle.getText()).toEqual(newRewardName);
 });

 it('successfully created private-reward should be available in rewards list', function () {
   var date = new Date();
   var timestamp = date.getTime();
   var newRewardName = "JD-PrivateReward"+timestamp;

   privateRadioBtn.click();
   rewardNameInput.sendKeys(newRewardName);
   nextBtn.click();

   // pick date form end date 
   homePage.scrollToView(endDateEle);   
   homePage.pickTomorrowDate(endDateEle);
   nextBtn.click();

   launchBtn.click();
   browser.sleep(2000);
   waitActions.waitForElementIsDisplayed(rewardInfoPage);
   expect(rewardInfoPage.isDisplayed()).toBeTruthy();
   
   waitActions.waitForElementIsDisplayed(rewardListPageLink);
   rewardListPageLink.click();
   browser.sleep(1000);
  // search by reward name

  rewardSearchInput.sendKeys(newRewardName);
  rewardSearchInput.sendKeys(protractor.Key.ENTER);

  browser.sleep(1000);

  waitActions.waitForElementIsDisplayed(rewardResultRecordEle);
  expect(rewardResultRecordEle.isDisplayed()).toBeTruthy();
  expect(rewardResultRecordEle.getText()).toEqual(newRewardName);
 });
});