"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.test.describe("Form App", () => {
    (0, test_1.test)("should submit data successfully", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // Navigate to the home page
        yield page.goto("/");
        // Verify the page title
        const title = yield page.textContent("h1");
        (0, test_1.expect)(title).toBe("Simple Form App");
        // Fill the input field
        yield page.fill("#userInput", "Test data from Playwright");
        // Submit the form
        yield page.click('button[type="submit"]');
        // Wait for and verify the success message
        yield (0, test_1.expect)(page.locator("#successMessage")).toBeVisible();
        const successMessage = yield page.textContent("#successMessage");
        (0, test_1.expect)(successMessage).toBe("Data successfully saved!");
        // Verify the input field was cleared
        const inputValue = yield page.inputValue("#userInput");
        (0, test_1.expect)(inputValue).toBe("");
    }));
    (0, test_1.test)("should not submit empty data", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // Navigate to the home page
        yield page.goto("/");
        // Try to submit the form without filling the input
        yield page.click('button[type="submit"]');
        // The form should not be submitted (check if the success message is not visible)
        yield (0, test_1.expect)(page.locator("#successMessage")).not.toBeVisible();
        // The default browser validation should prevent submission
        // (Note: This is harder to test directly with Playwright, so we're checking the resulting state)
    }));
});
