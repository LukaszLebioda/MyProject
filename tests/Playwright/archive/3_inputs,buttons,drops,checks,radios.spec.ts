//---------------------------------------------------------
// npx playwright codegen https://demo-bank.vercel.app/;
// npx playwright test (default: headless, --headed);
// npx playwright test --ui (test with Playwright GUI);
// npx playwright test testFile.spec.ts (run specific file);
// or run tests in VS Code only (Playright test plugin]);
//---------------------------------------------------------

// HANDLING UI COMPONENTS:
// INPUT FIELDS, DROPDOWNS, RADIO BUTTONS, CHECKBOXES, BUTTONS

import { test, expect, Locator } from "@playwright/test";

test.describe("Login form tests", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
	});

	test("logging using different UI components", async ({ page }) => {
		const usernameInputField = page.locator("#username");
		const passwordInputField = page.locator("input#password");
		const selectDropdown = page.locator("select.form-control");
		const radioButtons = page.locator(".customradio");
		const checkBox = page.locator("[type='checkbox']");
		const submitButton = page.locator("input[id='signInBtn']");

		// filling the login input fields
		await usernameInputField.fill("rahulshettyacademy");
		await passwordInputField.fill("learning");

		// handling static select dropdowns (with fixed options)
		await selectDropdown.selectOption("consult");
		await expect(selectDropdown).toHaveValue("consult");
		// await page.pause();

		// handling radio buttons
		await radioButtons.nth(0).check(); // or click()
		await expect(radioButtons.nth(0)).toBeChecked();
		await expect(radioButtons.nth(1)).not.toBeChecked();
		// or (less commonly used)
		expect(await radioButtons.nth(0).isChecked()).toBeTruthy();
		expect(await radioButtons.nth(1).isChecked()).toBeFalsy();
		// await page.pause();

		// handling checkboxes
		await checkBox.check(); // or click()
		await expect(checkBox).toBeChecked();
		// or (less commonly used)
		expect(await checkBox.isChecked()).toBeTruthy();
		// await checkBox.uncheck(); // or click()
		// await expect(checkBox).not.toBeChecked();
		// await page.pause();

		// handling buttons (submitting the form)
		await submitButton.click();
	});
});
