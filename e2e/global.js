(function () {
    'use strict';

    // Helper functions
    global.wait = {
        until: {
            present: function (elementFinder, optionalTimeout) {
                browser.driver.wait(function () {
                    return elementFinder.isPresent().then(function (present) {
                        return present;
                    });
                }, optionalTimeout || 60000);
            }
        }
    };

    global.commons = {};
    global.commons.inputBoxActions = require('./commons/inputBoxActions.js');
    global.commons.buttonActions = require('./commons/buttonActions.js');
    global.commons.dropDownActions = require('./commons/dropDownActions.js');
    global.commons.mouseActions = require('./commons/mouseActions.js');
    global.commons.waitActions = require('./commons/waitActions.js');
    global.commons.verifyActions = require('./commons/verifyActions.js');

    global.utils = {};
    global.utils.objectLocator = require('./utils/objectLocator.js');
    
    global.pages = {};
    global.pages.loginPage = require('./pages/loginPage.js');
    global.pages.homePage = require('./pages/homePage.js');
    global.pages.createInfoPage = require('./pages/createInfoPage.js');
    global.pages.createInfoPage = require('./pages/createMechanicsPage.js');
    
    

}());
