
const androidCaps = {
          //
         platformName:'Android',
         udid:'4XKFFUKBBQHI59JZ',
         deviceName:'RMX3085L1',
        appPackage : 'in.summachar.summachar',
        appActivity: 'in.summachar.summachar.ui.splash.SplashActivity',
        ensureWebviewsHavePages:true,
        newCommandTimeout:0,
        connectHardwareKeyboard:true , 
  //npmapp: undefined // Will be added in tests
};

const serverConfig = {
  path: '/wd/hub',
  host: 'localhost',
  port: 4723,
  logLevel: 'info'
};

const androidOptions = Object.assign(
  {
    capabilities: androidCaps
  },
  serverConfig
);


const config = {
  // ...
  reporters: [['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
  }]],
  // ...
}



module.exports = { androidOptions,config }
