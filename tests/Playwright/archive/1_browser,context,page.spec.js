"use strict";
// global playwright fixtures (e.g.: browser, context, page)
// are global variables available across the project;
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
// BROWSER
(0, test_1.test)("explicit browser context and page", (_a) => __awaiter(void 0, [_a], void 0, function* ({ browser }) {
    // playwright opens new browser instance in incognito-like mode;
    // with no context: no cookies, no plugins, no caches etc.;
    // (but required proxy, cookies etc. can be passed as params);
    const context = yield browser.newContext();
    // opens new fresh page within the above context;
    // and gives access to methods that interact with the page;
    const page = yield context.newPage();
    yield page.goto("https://rahulshettyacademy.com/loginpagePractise/");
}));
// PAGE
(0, test_1.test)("implicit browser context and page", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    // if no params are passed, playwright will provide
    // default context and page right away, so NO need to use:
    // const context = await browser.newContext();
    // const page = await context.newPage();
    yield page.goto("https://rahulshettyacademy.com/loginpagePractise/");
}));
// TITLE
(0, test_1.test)("verify page title", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // we can do this (await not needed before expect):
    const pageTitle = yield page.title();
    console.log("title:", pageTitle);
    (0, test_1.expect)(pageTitle).toEqual("LoginPage Practise | Rahul Shetty Academy");
    // but Playwright provides in-built assertion for that:
    yield (0, test_1.expect)(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
}));
