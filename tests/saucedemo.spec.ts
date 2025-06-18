import { test, expect } from '@playwright/test';

test('SauceDemo - Check page elements', async ({ page }) => {
    // Navigate to the SauceDemo website
    await page.goto('https://www.saucedemo.com/');

    // Check page title
    await expect(page).toHaveTitle(/Swag Labs/);

    // Check login form elements
    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#login-button')).toBeVisible();

    // Check placeholder text
    await expect(page.locator('#user-name')).toHaveAttribute('placeholder', 'Username');
    await expect(page.locator('#password')).toHaveAttribute('placeholder', 'Password');

    // Check login button text
    await expect(page.locator('#login-button')).toHaveValue('Login');

    // Check logo is present
    await expect(page.locator('.login_logo')).toBeVisible();

    // Check credentials info section
    await expect(page.locator('#login_credentials')).toBeVisible();
    await expect(page.locator('#login_credentials')).toContainText('Accepted usernames are:');

    // Check password info section
    await expect(page.locator('.login_password')).toBeVisible();
    await expect(page.locator('.login_password')).toContainText('Password for all users:');

    console.log('All elements checked successfully!');
});

// Optional: Test with actual login
test('SauceDemo - Login functionality', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Fill login form with standard user
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    // Click login button
    await page.click('#login-button');

    // Check if redirected to inventory page
    await expect(page).toHaveURL(/.*inventory.html/);

    // Check inventory page elements
    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page.locator('.inventory_list')).toBeVisible();

    console.log('Login test completed successfully!');
});

