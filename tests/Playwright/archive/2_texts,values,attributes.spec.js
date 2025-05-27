"use strict";
// EXTRACTING TEXT FROM SINGLE SELECTOR
// EXTRACTING TEXT FROM MULTIPLE SELECTORS
// ASSERTING VALUES OF HTML ATTRIBUTES
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
test_1.test.describe("Login form tests", () => {
    test_1.test.beforeEach((_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // const context = await browser.newContext();
        // const page = await context.newPage();
        yield page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    }));
    (0, test_1.test)("verify login with valid credentials", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // CSS selectors:
        const usernameInputField = page.locator("#username");
        const passwordInputField = page.locator("input#password");
        const submitButton = page.locator("input[id='signInBtn']");
        const phoneCards = page.locator(".card-body a");
        const documentLink = page.locator("a[href*='documents-request']");
        // valid login action:
        yield usernameInputField.fill("rahulshettyacademy");
        yield passwordInputField.fill("learning");
        yield submitButton.click();
        // extracting the text from single element:
        const firstPhone = phoneCards.first(); // or nth(0)
        const firstPhoneName = yield firstPhone.textContent();
        // assertion - one way
        (0, test_1.expect)(firstPhoneName).toBe("iphone X");
        (0, test_1.expect)(firstPhoneName).toContain("iphone X");
        // assertion - or another
        yield (0, test_1.expect)(firstPhone).toHaveText("iphone X");
        yield (0, test_1.expect)(firstPhone).toContainText("iphone X");
        // extracting array of texts from multiple elements:
        // warning: we can get empty array, if page isn't loaded yet;
        // (playwright doesn't wait for the page to load this time);
        yield phoneCards.nth(0).waitFor();
        yield page.waitForURL("**/shop");
        yield page.waitForLoadState("networkidle"); // flaky
        const allPhoneNames = yield phoneCards.allTextContents();
        console.log(allPhoneNames);
        // asserting value of html attribute
        yield (0, test_1.expect)(documentLink).toHaveAttribute("class", "blinkingText");
    }));
});
