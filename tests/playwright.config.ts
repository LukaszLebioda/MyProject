import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./Playwright/tests", // directory with test spec(s)
  timeout: 15 * 1000, // locator timeout, default -> 30000
  expect: { timeout: 5000 }, // assertion timeout, default -> 5000
  fullyParallel: false, // false -> tests will run sequentially within single spec file; true -> tests will run parallelly within single spec file, and each test will be executed in independent worker;
  forbidOnly: false, // default -> !!process.env.CI
  retries: 1, // default -> process.env.CI ? 2 : 1
  workers: process.env.CI ? 1 : 1, // default -> ? 1 : undefined; worker is a new instance of web browser (in incognito mode); by default playwright creates 1 separate worker for each spec file (by default max 5);
  reporter: [["html", { open: "never", outputFolder: "./Playwright/playwright-report" }]], // or open: "on-failure" (other reporter -> line); outputFolder is optional, by default reports are stored in main directory
  outputDir: "./Playwright/test-results/", // directory to store test results; it's optional, by default reports are stored in main directory
  use: {
    // baseURL: 'http://127.0.0.1:3000',
    trace: "retain-on-failure", // or -> "on", "on-first-retry";
    video: "retain-on-failure", // or -> "on", "on-first-retry";
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
  ],
});
