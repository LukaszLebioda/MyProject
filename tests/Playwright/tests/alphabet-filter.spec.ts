import { test, expect } from "@playwright/test";
import { AlphabetFilter } from "../page-objects/AlphabetFilter.ts";

// datatest-id!!!!!!!!

test.describe("verify alphabet filter functionality", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:3000/");
	});

	test("verify alphabet filter type can be changed", async ({ page }) => {
		const filter = new AlphabetFilter(page);
		await expect(filter.filterTypeButton).toHaveText("Title");
		await filter.changeFilterType();
		await expect(filter.filterTypeButton).toHaveText("Author");
	});

	test("verify alphabet letters can be hovered & clicked", async ({ page }) => {
		const filter = new AlphabetFilter(page);
		await expect(filter.letterButton).toHaveCount(26);

		// if hovered - assert css
		// if clicked - assert class ("active")
		// if clicked - assert book details correspons with letter
	});
});
