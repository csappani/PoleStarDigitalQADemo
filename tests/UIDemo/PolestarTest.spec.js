const {chromium} = require ('@playwright/test');
import { test, expect } from '@playwright/test';

test('Navigate HomePage', async({page})=>{
  // Home Page
  await page.goto('https://www.polestar.com/se/');
  await page.waitForTimeout(3000)
  //AcceptAll
  await page.locator("#onetrust-policy-title").click()
  await page.locator("#onetrust-accept-btn-handler").click();
  // const acceptAllBtn=await page.locator("//font[contains(text(),'Accept all')]")
  // await acceptAllBtn.click() 
  //check app url
  await expect(page).toHaveURL("https://www.polestar.com/se/")
  // Expect a title "to contain" a substring.
   await expect(page).toHaveTitle("Polestar – Elbilar | Polestar Sverige");
})

test('User Account', async({page})=>{
  // Home Page
  await page.goto('https://www.polestar.com/se/');
  await page.waitForTimeout(3000)
  //AcceptAll
  await page.locator("#onetrust-policy-title").click()
  await page.locator("#onetrust-accept-btn-handler").click();
  await page.waitForTimeout(3000);
  //click on user account
  await page.locator("//a[@id='L_aKvtA0TE-V7FLPcm1OLQ']").click()
  await page.waitForTimeout(7000)
  await expect("//h2[text()='Inloggning']").toBeVisible()
  await page.locator("#email-username-field").fill('chiranjevulu@gmail.com');
  await page.locator("#password-field").fill('password');
  await page.locator('#login-btn').click();
  await expect("//font[text()='We did not recognize the username or password you entered. Try again.']").toBeVisible()
})
