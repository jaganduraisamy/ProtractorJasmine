describe('Upload a file in bulk list - tests', function () {

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
    var uploadBtn = element(by.css('div.spaced-extra > button.ant-btn.cRpZpz.ant-btn-primary'));
    var chooseFilePathBtn = element(by.css('span.sc-fzXfPF.dMCuna'));
    var insertPhotoBtn = element(by.css('div.ant-modal-footer > button.ant-btn.bdYfNv.ant-btn-primary'));
    
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


it('upload bulk files', function () {     
//JD-JPEG.jpeg
var newRewardName = "JD-TestReward";
      
rewardNameInput.sendKeys(newRewardName);

// click upload btn
homePage.scrollToView(uploadBtn);
uploadFile("JD-csv.csv");
uploadFile("JD-text.txt");
uploadFile("JD-Excel.xlsx");

expect(element(by.cssContainingText("label","JD-csv.csv")).isDisplayed).toBeTruthy();
expect(element(by.cssContainingText("label","JD-text.txt")).isDisplayed).toBeTruthy();
expect(element(by.cssContainingText("label","JD-Excel.xlsx")).isDisplayed).toBeTruthy();

});

function uploadFile(fileName) {

    uploadBtn.click();
    // click choose file btn
    chooseFilePathBtn.click();
    browser.sleep(200);
    var path = require('path');
    var fileToUpload = '../resources/'+fileName;
    var absolutePath = path.resolve(__dirname, fileToUpload);
    $('input[type="file"]').sendKeys(absolutePath);
    browser.sleep(200);
    insertPhotoBtn.click();
    browser.sleep(200);
}

it('text file should allow to upload', function () {     
    //JD-JPEG.jpeg
    var newRewardName = "JD-TestReward";
          
    rewardNameInput.sendKeys(newRewardName);
    
    // click upload btn
    homePage.scrollToView(uploadBtn);
    uploadFile("JD-text.txt");
    
    expect(element(by.cssContainingText("label","JD-text.txt")).isDisplayed).toBeTruthy();
    
    });


    it('excel file should allow to upload', function () {     
        //JD-JPEG.jpeg
        var newRewardName = "JD-TestReward";
              
        rewardNameInput.sendKeys(newRewardName);
        
        // click upload btn
        homePage.scrollToView(uploadBtn);
        uploadFile("JD-Excel.xlsx");
        
        expect(element(by.cssContainingText("label","JD-Excel.xlsx")).isDisplayed).toBeTruthy();
        
        });

        it('csv file should allow to upload', function () {     
            //JD-JPEG.jpeg
            var newRewardName = "JD-TestReward";
                  
            rewardNameInput.sendKeys(newRewardName);
            
            // click upload btn
            homePage.scrollToView(uploadBtn);
            uploadFile("JD-csv.csv");
            
            expect(element(by.cssContainingText("label","JD-csv.csv")).isDisplayed).toBeTruthy();
            
            });

            it('jpeg file should not allow to upload', function () {     
                //JD-JPEG.jpeg
                var newRewardName = "JD-TestReward";
                      
                rewardNameInput.sendKeys(newRewardName);
                
                // click upload btn
                homePage.scrollToView(uploadBtn);
                uploadFile("JD-JPEG.jpeg");
                
                expect(element(by.cssContainingText("label","JD-JPEG.jpeg")).isPresent()).toBe(false);
                
                });
        
});