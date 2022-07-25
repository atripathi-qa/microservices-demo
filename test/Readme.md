**Install project dependencies

``` 
npm install
brew install bash
```

**To get started with the WebdriverIO test framework for the UI tests**

The project has been tested with NODEJS 17 environment. Please make sure your MAC/Windows has Node 10 and above installed.

Requirements
NodeJS 10+
Browser: Chrome/Firefox/MicrosoftEdge
VS Code (IDE)
Install allure commandline globally to access the allure report for the application.  
npm install -g allure-commandline

What is this repository for?
This respository consists of an automated test for various scenarios of the sock shop application.
Allure report is used for test reporting and video recording.

How do I get the set up?

Configurations for run:
1. Clone the repository. [tests scripts are in the test folder]
2. The latest version of the Chrome browser installed in your machine.
3. Run "npm install" to download all the dependencies if you haven't already.
4. Run ``
npx wdio wdio.conf.js
``
 to run the test. Default browser is set as chrome in the wdio.conf.js 
 5. To generate the test report of the UI tests you need allure installed (run npm install -g allure-commandline if you haven't already), use the command: run ```
allure generate --clean allure-results/&& allure open ```

The framework can run the tests in different browsers in parallel. Just add the desired browsers in the capabilities[] array in wdio.conf.js and run the tests. For Safari, you must enable the 'Allow Remote Automation' option in Safari's Develop menu to control it via WebDriver.

Reasons to choose WebdriverIO test framework:
1. Strong support for cross browser testing.
2. The possibility to run the tests locally and on live environment.
3. Strong support for parallel running of the tests.
4. WebdriverIO fully support async/await for the clean readable code.
5. Previous experience with the tool.
