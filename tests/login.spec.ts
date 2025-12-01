import { test, expect } from '@playwright/test';

test('verify login functionality', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/login');

  // Fill username
  await page.locator('#username').fill('tomsmith');

  // Fill password
  await page.locator('#password').fill('SuperSecretPassword!');

  // Click Login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Assert navigation
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
});