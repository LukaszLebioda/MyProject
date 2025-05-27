"use strict";
//---------------------------------------------------------
// npx playwright codegen https://demo-bank.vercel.app/;
// npx playwright test (default: headless, --headed);
// npx playwright test --ui (test with Playwright GUI);
// npx playwright test testFile.spec.ts (run specific file);
// or run tests in VS Code only (Playright test plugin]);
//---------------------------------------------------------
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
// HANDLING UI COMPONENTS:
// INPUT FIELDS, DROPDOWNS, RADIO BUTTONS, CHECKBOXES, BUTTONS
const test_1 = require("@playwright/test");
test_1.test.describe("Login form tests", () => {
    test_1.test.beforeEach((_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
        yield page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    }));
    (0, test_1.test)("logging using different UI components", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
        const usernameInputField = page.locator("#username");
        const passwordInputField = page.locator("input#password");
        const selectDropdown = page.locator("select.form-control");
        const radioButtons = page.locator(".customradio");
        const checkBox = page.locator("[type='checkbox']");
        const submitButton = page.locator("input[id='signInBtn']");
        // filling the login input fields
        yield usernameInputField.fill("rahulshettyacademy");
        yield passwordInputField.fill("learning");
        // handling static select dropdowns (with fixed options)
        yield selectDropdown.selectOption("consult");
        yield (0, test_1.expect)(selectDropdown).toHaveValue("consult");
        // await page.pause();
        // handling radio buttons
        yield radioButtons.nth(0).check(); // or click()
        yield (0, test_1.expect)(radioButtons.nth(0)).toBeChecked();
        yield (0, test_1.expect)(radioButtons.nth(1)).not.toBeChecked();
        // or (less commonly used)
        (0, test_1.expect)(yield radioButtons.nth(0).isChecked()).toBeTruthy();
        (0, test_1.expect)(yield radioButtons.nth(1).isChecked()).toBeFalsy();
        // await page.pause();
        // handling checkboxes
        yield checkBox.check(); // or click()
        yield (0, test_1.expect)(checkBox).toBeChecked();
        // or (less commonly used)
        (0, test_1.expect)(yield checkBox.isChecked()).toBeTruthy();
        // await checkBox.uncheck(); // or click()
        // await expect(checkBox).not.toBeChecked();
        // await page.pause();
        // handling buttons (submitting the form)
        yield submitButton.click();
    }));
});
