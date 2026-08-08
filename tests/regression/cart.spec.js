import { test, expect } from '@playwright/test';

test('Add Product to Cart Test', async ({ page }) => {

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

  // Verify Cart Badge shows 1
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Open Cart
  await page.locator('.shopping_cart_link').click();

  // Verify Backpack is in the Cart
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

});