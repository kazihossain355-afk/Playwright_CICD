import { test, expect } from '@playwright/test';

test('Inventory Page Test', async ({ page }) => {

  // Open SauceDemo website
  await page.goto('https://www.saucedemo.com/');

  // Verify page title
  await expect(page).toHaveTitle(/Swag Labs/);

  // Enter username
  await page.locator('#user-name').fill('standard_user');

  // Enter password
  await page.locator('#password').fill('secret_sauce');

  // Click Login button
  await page.locator('#login-button').click();

  // Verify Products page is displayed
  await expect(page.locator('.title')).toHaveText('Products');

  // Verify inventory list is visible
  await expect(page.locator('.inventory_list')).toBeVisible();

});