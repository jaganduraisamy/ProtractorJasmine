var CreateMechanicsPage = function () {
    'use strict';
    // Create Info page
    var objRepo = require('../resources/webObjectRepository.json');

    var objLocator = new utils.objectLocator();
    var waitActions = new commons.waitActions();
    
    this.endDateEle = element(by.css('div.ant-collapse-content-box > div:nth-of-type(2) > div:nth-of-type(2) > div.ant-col.ant-form-item-control-wrapper > div.ant-form-item-control > span.ant-form-item-children > section.sc-fzXfOy.dYspSv > section.sc-fzXfPa.cxtbYi > div > span.sc-fzXfPc.bAzGKj.datePicker.ant-calendar-picker > div > input.ant-calendar-picker-input.ant-input'));
    this.nextBtn = element(by.css('button.ant-btn.bdYfNv.ant-btn-primary'));
    this.dateMandatoryErrorEle = element(by.css('label.eqwEup'));
    this.launchBtn  = element(by.css('div.bdiHVz > div:nth-of-type(2) > button:nth-of-type(2)'));
 
   // this.page = objLocator.findLocator(objRepo.mechanicsPage.page);

    this.isElementDisplayed = function (element) {
        waitActions.waitForElementIsDisplayed(element);
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
module.exports = new CreateMechanicsPage();