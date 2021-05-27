# Summachar mobile application testing using webDriverio

The test is conducted on real android device (RealMe 8 Pro). 

## Pre-Condition 
* Phone is set to developer option. Enable it by following this link.(https://developer.android.com/studio/debug/dev-options_

## Tech Stack 
- Andorid SDK to work in emulators 
- javaScript 
- mocha framework 
- webdriverio

## UseCase which are automated 
1. Check for the package installed corectly
2. User can navigate to profile page
3. User can login via Email 
4. User can login via phone number
5. User can perform Search 

## Setup

* Must have NodeJS and NPM installed (https://nodejs.org/en/)
* Install dependencies by running `npm install`

## Running Tests

* To run all of the tests, run `npm test`
* To run individual tests, run `$(npm bin)/mocha test/path/to/test.js`

## Enhancement
  * allure-results integration 
  * Integration with CI tool i.e. Jenkins
  * define pageObject module for each module 
  * ApI call for setup and tearDown 
