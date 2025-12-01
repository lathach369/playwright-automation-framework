import { test, expect } from '@playwright/test';

test.describe('Login Negative Tests', () => {

  test('Invalid username', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    // Locators
    const usernameField = page.locator('#username');
    const passwordField = page.locator('#password');
    const loginButton = page.locator('button[type="submit"]');
    const flashMessage = page.locator('#flash');

    // Actions
    await usernameField.fill('wrongUser');
    await passwordField.fill('SuperSecretPassword!');
    await loginButton.click();

    // Assertions
    await expect(flashMessage).toContainText('Your username is invalid!');
  });

  test('Invalid password', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    // Locators
    const usernameField = page.locator('#username');
    const passwordField = page.locator('#password');
    const loginButton = page.locator('button[type="submit"]');
    const flashMessage = page.locator('#flash');

    // Actions
    await usernameField.fill('tomsmith');
    await passwordField.fill('wrongPassword');
    await loginButton.click();

    // Assertions
    await expect(flashMessage).toContainText('Your password is invalid!');
  });

});