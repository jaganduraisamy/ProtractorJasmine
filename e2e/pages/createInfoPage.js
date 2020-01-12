var CreateInfoPage = function () {
    'use strict';
    // Create Info page
    var objRepo = require('../resources/webObjectRepository.json');

    var objLocator = new utils.objectLocator();
    var waitActions = new commons.waitActions();
    
    this.infoPage = objLocator.findLocator(objRepo.createInfoPage.infoPage);
    this.rewardNameInput = objLocator.findLocator(objRepo.createInfoPage.rewardNameInput);
    this.uploadBtn = element(by.cssContainingText('button','Upload a File'));
    this.privateRadioBtn = element(by.cssContainingText('span','Private'));
    this.brandSection = element(by.cssContainingText('label','Brands'));
    this.tagSection = element(by.cssContainingText('label','Tags'));
    this.categoriesSection = element(by.cssContainingText('label','Categories'));
    this.labelSection = element(by.cssContainingText('label','Labels'));
    this.chooseFilePathBtn = element(by.css('span.sc-fzXfPF.dMCuna'));
    this.insertPhotoBtn = element(by.css('div.ant-modal-footer > button.ant-btn.bdYfNv.ant-btn-primary'));
    this.nextBtn = element(by.css('button.ant-btn.bdYfNv.ant-btn-primary'));
    this.nameMandatoryErrorEle = element(by.css('span.ant-form-item-children > div:nth-of-type(2)'));

    this.rewardRecommendationToggleBtn = element(by.css('div > div:nth-of-type(3) > div.ant-collapse-item.ant-collapse-no-arrow.hozGFb > div.ant-collapse-header > div > button.cbfKhz.ant-switch.ant-switch-checked'));
    this.rewardRecommendationInput = element(by.css('div > div:nth-of-type(3) > div.ant-collapse-item.ant-collapse-no-arrow.hozGFb > div.ant-collapse-content > div.ant-collapse-content-box > div.ant-row.ant-form-item.sc-fzXfPH.ctqxEg > div.ant-col.ant-form-item-control-wrapper > div.ant-form-item-control > span.ant-form-item-children > div.sc-fzXfPg.bAzGKn > div > div > ul > li > div > input'));
  //  var privateRadioBtn = element(by.css('div > div:first-child > div.ant-collapse-item.ant-collapse-no-arrow.hozGFb > div.ant-collapse-content > div.ant-collapse-content-box > div:first-child > div.ant-col.ant-form-item-control-wrapper > div.ant-form-item-control > span.ant-form-item-children > div.ant-radio-group.ant-radio-group-outline > label:nth-of-type(2) > span:nth-of-type(2)'));
    this.systemRadioBtn = element(by.css('div.ant-radio-group.ant-radio-group-outline > label:nth-of-type(3)'));
    


    this.isElementDisplayed = function (element) {
        waitActions.waitForElementIsDisplayed(element);
        return this;
    };

    this.scrollToView = function (element) {
        waitActions.setScrollPage(element);
        return this;
    };
};
module.exports = new CreateInfoPage();