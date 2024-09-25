
const { test, expect } = require('@playwright/test');

import { UserAccountPage } from '../pages/UserAccountPage';
import { HomePage } from '../pages/HomePage';
import { PolestarPage } from '../pagesPoleStarPage';

test('has title', async ({ page }) => {
  await page.goto('https://www.polestar.com/se/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Polestar - Elbilar | Polestar Sverige');
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.polestar.com/se/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
