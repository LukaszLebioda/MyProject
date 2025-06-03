// EXTRACTING TEXT FROM SINGLE SELECTOR
// EXTRACTING TEXT FROM MULTIPLE SELECTORS
// ASSERTING VALUES OF HTML ATTRIBUTES

import { test, expect, Locator } from "@playwright/test";

test.describe("Login form tests", () => {
	test.beforeEach(async ({ page }) => {
		// const context = await browser.newContext();
		// const page = await context.newPage();
		await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
	});

	test("verify login with valid credentials", async ({ page }) => {
		// CSS selectors:
		const usernameInputField = page.locator("#username");
		const passwordInputField = page.locator("input#password");
		const submitButton = page.locator("input[id='signInBtn']");
		const phoneCards = page.locator(".card-body a");
		const documentLink = page.locator("a[href*='documents-request']");

		// valid login action:
		await usernameInputField.fill("rahulshettyacademy");
		await passwordInputField.fill("learning");
		await submitButton.click();

		// extracting the text from single element:
		const firstPhone = phoneCards.first(); // or nth(0)
		const firstPhoneName = await firstPhone.textContent();
		// assertion - one way
		expect(firstPhoneName).toBe("iphone X");
		expect(firstPhoneName).toContain("iphone X");
		// assertion - or another
		await expect(firstPhone).toHaveText("iphone X");
		await expect(firstPhone).toContainText("iphone X");

		// extracting array of texts from multiple elements:
		// warning: we can get empty array, if page isn't loaded yet;
		// (playwright doesn't wait for the page to load this time);
		await phoneCards.nth(0).waitFor();
		await page.waitForURL("**/shop");
		await page.waitForLoadState("networkidle"); // flaky
		const allPhoneNames = await phoneCards.allTextContents();
		console.log(allPhoneNames);

		// asserting value of html attribute
		await expect(documentLink).toHaveAttribute("class", "blinkingText");
	});
});
