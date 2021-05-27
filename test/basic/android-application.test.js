const webdriverio = require('webdriverio');
const androidOptions = require('../../helpers/caps').androidOptions;
const assert = require('chai').assert;



//androidOptions.capabilities.app = app;

describe('Create Android session', function () {
  let client = 

  before(async function () {
    client = await webdriverio.remote(androidOptions);
    

       
  });

  it('Check if the current package is Summachar Application', async function () {

    const current_package = await client.getCurrentPackage();
    assert.equal(current_package, 'in.summachar.summachar');
      
    
       });
  it('User when click on Profile button should be taken to login screen ',async function(){

    const profileBtn = await client.$('//android.widget.FrameLayout[@content-desc="Profile"]/android.widget.ImageView');
    await profileBtn.click();
    const getLoginBitton =  await client.$('//android.widget.Button[@resource-id="in.summachar.summachar:id/login"]');
    let appText = await getLoginBitton.getText();
    assert.equal(appText, 'LOGIN');
    
  });

  it('User can click on login Page',async function(){

    const getLoginBitton =  await client.$('//android.widget.Button[@resource-id="in.summachar.summachar:id/login"]');
    await getLoginBitton.click();
    
    
  });


  it('User try to login via email ',async function(){

    const clickLoginBtn =  await client.$('//android.widget.Button[@resource-id="in.summachar.summachar:id/login_with_email"]');
    await clickLoginBtn.click();
    const typeInText = await client.$('//android.widget.EditText[@resource-id="in.summachar.summachar:id/email"]');
    await typeInText.setValue('saurabh@dispostable.com')
    
  });


  it('User try to login via phone ',async function(){

    const anothermethodBtn =  await client.$('//android.widget.TextView[@resource-id="in.summachar.summachar:id/try_another_login_method"]');
    await anothermethodBtn.click();
    const clickphoneBtn =  await client.$('//android.widget.Button[@resource-id="in.summachar.summachar:id/login_with_phone"]');    //await typeInText.type('saurabh@dispostable.com')
    await clickphoneBtn.click();
    const ardBtn = await client.$('//android.widget.Button[@index="0"]');
    await ardBtn.click()
    const enterPhText =  await client.$('//android.widget.EditText[@resource-id="in.summachar.summachar:id/phone_number"]'); 
    await enterPhText.setValue('9739992722')
    const getOTP =  await client.$('//android.widget.Button[@resource-id="in.summachar.summachar:id/btn_get_otp"]'); 
    await getOTP.click();
    await client.setTimeout({ 'implicit': 20000 })
    const profilePage =  await client.$('//android.widget.TextView[@resource-id="in.summachar.summachar:id/welcome_text"]'); 
    //await getOTP.click();
    const expectedRes = await profilePage.getText();
    assert.equal(expectedRes, 'Welcome Back!');
    //await client.$('//android.widget.Button[@resource-id="in.summachar.summachar:id/btn_continue"]');
    const letBtn= await client.$('//android.widget.Button[@text="LET\'S GO!"]')
    await letBtn.click();
    
  });
  

  it('Search item in the app is working',async function(){

    const searchbtn = await client.$('//android.widget.ImageView[@resource-id="in.summachar.summachar:id/search"]'); 
    await searchbtn.click()
    const typeSearch = await client.$('//android.widget.EditText[@resource-id="in.summachar.summachar:id/search_view"]'); 
    await typeSearch.setValue('Test')
    //await typeSearch.click()
    await client.pressKeyCode(84)
    const clickCancel = await client.$('//android.widget.TextView[@resource-id="in.summachar.summachar:id/cancel"]'); 
    await clickCancel.click()





  });


});
