// npx playwright codegen https://demo-bank.vercel.app/;
// npx playwright test (default: headless, --headed);
// npx playwright test --ui (test with Playwright GUI);
// npx playwright test testFile.spec.ts (run specific file);
// or run tests in VS Code only (Playright test plugin]);

import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("https://playwright.dev/");

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
	await page.goto("https://playwright.dev/");

	// Click the get started link.
	await page.getByRole("link", { name: "Get started" }).click();

	// Expects page to have a heading with the name of Installation.
	await expect(
		page.getByRole("heading", { name: "Installation" })
	).toBeVisible();
});
