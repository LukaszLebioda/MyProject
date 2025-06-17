import { test, expect } from "@playwright/test";

test.describe("Form App", () => {
  test("should submit data successfully", async ({ page }) => {
    // Navigate to the home page
    await page.goto("/");

    // Verify the page title
    const title = await page.textContent("h1");
    expect(title).toBe("Simple Form App");

    // Fill the input field
    await page.fill("#userInput", "Test data from Playwright");

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for and verify the success message
    await expect(page.locator("#successMessage")).toBeVisible();
    const successMessage = await page.textContent("#successMessage");
    expect(successMessage).toBe("Data successfully saved!");

    // Verify the input field was cleared
    const inputValue = await page.inputValue("#userInput");
    expect(inputValue).toBe("");
  });

  test("should not submit empty data", async ({ page }) => {
    // Navigate to the home page
    await page.goto("/");

    // Try to submit the form without filling the input
    await page.click('button[type="submit"]');

    // The form should not be submitted (check if the success message is not visible)
    await expect(page.locator("#successMessage")).not.toBeVisible();

    // The default browser validation should prevent submission
    // (Note: This is harder to test directly with Playwright, so we're checking the resulting state)
  });
});
