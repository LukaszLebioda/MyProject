## playwright installation

## options to run tests

or npm run whateverComesFromScript (package.json), e.g.:
`"test": "playwright test --headed"`, (npm run test) (we can turn the headed mode on permanently in playwright-config.js => headless: false)
`"testheadless": "playwright test"`, (npm run testheadless)
`"testui": "playwright test --ui"`, (npm run testui)
`"test:ci": "playwright test`" (npm run test:ci)

## various testing hints

PROMISE / LOCATOR
every Playwright method returns:

- promise, e.g. `await page.goto("\")` (await is needed),
- locator, e.g. `page.getByRole('button')` (await not needed); locator is not a promise, so it can be assigned to a variable;

VARIA

- playwright.config.js => `reporter: "line"` or `"html"`;
- `await this.page.pause()` => stops the execution at any moment;
- Playwright Inspector => 'pick locator' (or console devtools);
- use of `waitFor()` to assert that an element is visible before an action is performed on that element (better logs);
- `npx playwright codegen https://demo-bank.vercel.app/` (to record tests);
- RECORD can be used on Playwright's inspector at any time, not only with codegen functionality;

RETRY:
test("verify popular event data", async ({ page }, testInfo) => {
if (testInfo.retry) {
await doSomething();
}
});
