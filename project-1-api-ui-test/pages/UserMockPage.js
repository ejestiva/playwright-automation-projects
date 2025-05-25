import { expect } from "@playwright/test";

export class UserMockPage {
    constructor(page)
    {
        this.page = page;
        this.nameInput = page.locator("#nameInput");
        this.jobInput = page.locator("#jobInput");
    }

    async navigate(filePath)
    {
        await this.page.goto(filePath);
    }

    async fillData(name, job)
    {
        await this.nameInput.fill(name);
        await this.jobInput.fill(job);
    }

    async verifyData(name, job)
    {
        await expect(this.nameInput).toHaveValue(name);
        await expect(this.jobInput).toHaveValue(job);
    }
}