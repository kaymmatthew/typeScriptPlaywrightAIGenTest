import { Before, After, BeforeAll, AfterAll, setDefaultTimeout, ITestCaseHookParameter } from '@cucumber/cucumber';
import { Driver } from '../support/Driver';
import { Configuration } from '../support/Configuration';

const driver = Driver.getInstance();
const config = Configuration.getInstance();

setDefaultTimeout(config.timeout);

BeforeAll(async function () {
  await driver.initialize();
});

AfterAll(async function () {
  await driver.close();
});

Before(async function (this: ITestCaseHookParameter) {
  // Reset page or context if needed
  const page = driver.getPage();
  await page.goto(config.baseUrl);
});

After(async function (this: ITestCaseHookParameter) {
  if (this.result?.status === 'FAILED') {
    // Take screenshot on failure
    await driver.takeScreenshot(this.pickle.name);
  }
});