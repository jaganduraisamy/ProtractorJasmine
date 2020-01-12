var homePage = require('../pages/HomePage');
var loginPage = require('../pages/LoginPage');
var createInfoPage = require('../pages/CreateInfoPage');
describe('Upload a file in bulk list - tests', function() {

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
    });


    it('upload bulk files', function() {

        var newRewardName = "JD-TestReward";
        createInfoPage.rewardNameInput.sendKeys(newRewardName);

        // click upload btn
        createInfoPage.scrollToView(createInfoPage.uploadBtn);
        uploadFile("JD-csv.csv");
        uploadFile("JD-text.txt");
        uploadFile("JD-Excel.xlsx");

        expect(element(by.cssContainingText("label", "JD-csv.csv")).isDisplayed).toBeTruthy();
        expect(element(by.cssContainingText("label", "JD-text.txt")).isDisplayed).toBeTruthy();
        expect(element(by.cssContainingText("label", "JD-Excel.xlsx")).isDisplayed).toBeTruthy();

    });


    it('text file should allow to upload', function() {
        //JD-JPEG.jpeg
        var newRewardName = "JD-TestReward";

        createInfoPage.rewardNameInput.sendKeys(newRewardName);

        // click upload btn
        createInfoPage.scrollToView(createInfoPage.uploadBtn);
        uploadFile("JD-text.txt");

        expect(element(by.cssContainingText("label", "JD-text.txt")).isDisplayed).toBeTruthy();

    });


    it('excel file should allow to upload', function() {
        //JD-JPEG.jpeg
        var newRewardName = "JD-TestReward";

        createInfoPage.rewardNameInput.sendKeys(newRewardName);

        // click upload btn
        createInfoPage.scrollToView(createInfoPage.uploadBtn);
        uploadFile("JD-Excel.xlsx");

        expect(element(by.cssContainingText("label", "JD-Excel.xlsx")).isDisplayed).toBeTruthy();

    });

    it('csv file should allow to upload', function() {
        //JD-JPEG.jpeg
        var newRewardName = "JD-TestReward";

        createInfoPage.rewardNameInput.sendKeys(newRewardName);
        createInfoPage.scrollToView(createInfoPage.uploadBtn);
        uploadFile("JD-csv.csv");

        expect(element(by.cssContainingText("label", "JD-csv.csv")).isDisplayed).toBeTruthy();

    });

    it('jpeg file should not allow to upload', function() {
        //JD-JPEG.jpeg
        var newRewardName = "JD-TestReward";

        createInfoPage.rewardNameInput.sendKeys(newRewardName);

        // click upload btn
        createInfoPage.scrollToView(createInfoPage.uploadBtn);
        uploadFile("JD-JPEG.jpeg");

        expect(element(by.cssContainingText("label", "JD-JPEG.jpeg")).isPresent()).toBe(false);

    });


    function uploadFile(fileName) {

        createInfoPage.uploadBtn.click();
        browser.sleep(200);
        // click choose file btn
        createInfoPage.chooseFilePathBtn.click();
        browser.sleep(200);
        var path = require('path');
        var fileToUpload = '../resources/' + fileName;
        var absolutePath = path.resolve(__dirname, fileToUpload);
        $('input[type="file"]').sendKeys(absolutePath);
        browser.sleep(200);
        createInfoPage.insertPhotoBtn.click();
        browser.sleep(300);
    }

});