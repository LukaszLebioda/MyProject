// global playwright fixtures (e.g.: browser, context, page)
// are global variables available across the project;

import { test, expect } from "@playwright/test";

// BROWSER
test("explicit browser context and page", async ({ browser }) => {
  // playwright opens new browser instance in incognito-like mode;
  // with no context: no cookies, no plugins, no caches etc.;
  // (but required proxy, cookies etc. can be passed as params);
  const context = await browser.newContext();
  // opens new fresh page within the above context;
  // and gives access to methods that interact with the page;
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

// PAGE
test("implicit browser context and page", async ({ page }) => {
  // if no params are passed, playwright will provide
  // default context and page right away, so NO need to use:
  // const context = await browser.newContext();
  // const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

// TITLE
test("verify page title", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  // we can do this (await not needed before expect):
  const pageTitle = await page.title();
  console.log("title:", pageTitle);
  expect(pageTitle).toEqual("LoginPage Practise | Rahul Shetty Academy");

  // but Playwright provides in-built assertion for that:
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
});
