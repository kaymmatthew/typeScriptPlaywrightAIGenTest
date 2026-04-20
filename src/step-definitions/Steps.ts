import { Given, When, Then } from '@cucumber/cucumber';
import { HomePage } from '../pages/HomePage';

const homePage = new HomePage();

Given('I am on the DemoQA home page', async function () {
  await homePage.navigateToHome();
});

When('I click on the Elements card', async function () {
  await homePage.clickElementsCard();
});

Then('I should see the page title as {string}', async function (expectedTitle: string) {
  const title = await homePage.getPageTitle();
  if (title !== expectedTitle) {
    throw new Error(`Expected title "${expectedTitle}", but got "${title}"`);
  }
});