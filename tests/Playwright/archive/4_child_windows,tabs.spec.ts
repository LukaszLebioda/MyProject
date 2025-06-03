// CHILD WINDOWS & TABS

import { test, expect, Locator } from "@playwright/test";

test("Child windows & tabs", async ({ browser }) => {
	// we have to first declare new context within browser
	const context = await browser.newContext();
	// and within that context we declare a new page
	const page = await context.newPage();
	const userName = page.locator("#username");
	await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
	// when clicked, link below opens in a separate window
	const documentLink = page.locator("[href*='documents-request']");

	// those two steps have to run simultaneously
	// and both promises have to be resolved, before proceeding
	const [newPage] = await Promise.all([
		// then we wait for the new page to open (no "await" here)
		context.waitForEvent("page"),
		// and only then click the link (no "await" here)
		documentLink.click(),
	]);
	// new page is opened, so we can now work with it
	// from the child page we extract username
	// and paste it into input on parent page
	const text = await newPage.locator(".red").textContent();
	// this returns array of strings splitted by "@" character
	const arrayText = text.split("@");
	const domain = arrayText[1].split(" ")[0];
	await page.locator("#username").fill(domain);
	console.log(await page.locator("#username").textContent());
});
