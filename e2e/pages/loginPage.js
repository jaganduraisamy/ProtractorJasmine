var LoginPage = function () {
    'use strict';
    // Login page
    var objRepo = require('../resources/webObjectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();

    var perxLogo = objLocator.findLocator(objRepo.loginPage.perxLogo);
    var usenameInput = objLocator.findLocator(objRepo.loginPage.username);
    var passwordInput = objLocator.findLocator(objRepo.loginPage.password);
    var loginButton = objLocator.findLocator(objRepo.loginPage.loginBtn);

    this.openDashBoard = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };

    this.enterUserName = function (value) {
        inputBoxActions.type(usenameInput, value);
        return this;
    };

    this.enterPassword = function (value) {
        inputBoxActions.type(passwordInput, value);
        return this;
    };

    this.clickLoginBtn = function () {
        buttonActions.click(loginButton);
        return this;
    };

    this.isPageLoaded = function () {
        waitActions.waitForElementIsDisplayed(perxLogo);
        return this;
    };
};
module.exports = new LoginPage();