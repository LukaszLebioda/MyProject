import { type Locator, type Page } from "@playwright/test";

export class AlphabetFilter {
	readonly page: Page;
	readonly filterTypeButton: Locator;
	readonly letterButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.filterTypeButton = page.locator("#alphabet-filter-type-btn");
		this.letterButton = page.locator("[id*='button-letter-']");
	}

	changeFilterType = async () => {
		await this.filterTypeButton.click();
	};
}
