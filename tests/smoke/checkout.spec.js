import { test, expect } from '@playwright/test';

test('Checkout Test', async ({ page }) => {

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

  // Verify Products page
  await expect(page.locator('.title')).toHaveText('Products');

  // Add Backpack to Cart
  await page.locator('#add-to-cart-sauce-labs-backpack').click();

  // Open Cart
  await page.locator('.shopping_cart_link').click();

  // Verify Backpack is in the Cart
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

  // Click Checkout
  await page.locator('#checkout').click();

  // Enter First Name
  await page.locator('#first-name').fill('Kazi');

  // Enter Last Name
  await page.locator('#last-name').fill('Hossain');

  // Enter Zip Code
  await page.locator('#postal-code').fill('06040');

  // Click Continue
  await page.locator('#continue').click();

  // Verify Checkout Overview page
  await expect(page.locator('.title')).toHaveText('Checkout: Overview');

  // Click Finish
  await page.locator('#finish').click();

  // Verify Success Message
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

});