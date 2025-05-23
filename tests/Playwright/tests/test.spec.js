//---------------------------------------------------------
// npx playwright codegen https://demo-bank.vercel.app/;
// npx playwright test (default: headless, --headed);
// npx playwright test --ui (test with Playwright GUI);
// npx playwright test testFile.spec.ts (run specific file);
// or run tests in VS Code only (Playright test plugin]);
//---------------------------------------------------------

// CHILD WINDOWS & TABS

import { test, expect, Locator } from "@playwright/test";

test.describe("Child windows & tabs", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  });

  test("Child windows & tabs", async ({ page }) => {});
});
