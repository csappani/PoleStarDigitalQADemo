const { chromium } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Home Page
  await page.goto('https://www.polestar.com/se/');
  await page.waitForTimeout(3000)
  //AcceptAll
  await page.locator("#onetrust-policy-title").click()
  await page.locator("#onetrust-accept-btn-handler").click();

})

test('check app url/titile', async ({ page }) => {
  //check app url
  await expect(page).toHaveURL("https://www.polestar.com/se/")
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Polestar – Elbilar | Polestar Sverige");
})

test.skip('verify polish2 is displayed', async({page})=>{

})

test.skip('verify polish3 details', async({page})=>{
  
})

test.skip('verify polish4 is displayed', async({page})=>{
  
  await expect.page.locator("font[text()='Buy from SEK 738,000 with Plus package and optional exterior color and winter wheels.³']").toBeVisible();
})

test('User Account', async ({ page }) => {
  //click on user account
  await page.locator("//a[@id='L_aKvtA0TE-V7FLPcm1OLQ']").click()
  await page.waitForTimeout(12000);
  // await page.getByRole('heading', { name: 'Inloggning' }).click();
  
  // await page.waitForURL('https://polestarid.eu.polestar.com/PolestarLogin/login?resumePath=MwCjLnROk5&client_id=polmystar')
  await expect(".ps.resource.page-header").click()
  await expect(".ps.resource.page-header").toBeVisible()
  await page.locator("#email-username-field").fill('chiranjevulu@gmail.com');
  await page.locator("#password-field").fill('password');
  await page.locator('#login-btn').click();
  await expect("//div[@id='errorSection']").toBeVisible()
  await page.pause()
})

test.afterAll(async ({ page }) => {
  await page.close()
})
