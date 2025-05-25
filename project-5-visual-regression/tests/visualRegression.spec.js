import { test, expect } from "@playwright/test";

test("Visual regression for English Wikipedia", async ({ page }) => {
  await page.goto("https://en.wikipedia.org/wiki/Main_Page");
  await expect(await page.screenshot()).toMatchSnapshot(
    "english-main-page.png"
  );
});

test("Visual regression for article page", async ({ page }) => {
  await page.goto("https://en.wikipedia.org/wiki/Playwright_(software)");
  await expect(await page.screenshot()).toMatchSnapshot(
    "article-playwright.png"
  );
});

test("Visual regression for contact page", async ({ page }) => {
  await page.goto("https://en.wikipedia.org/wiki/Wikipedia:Contact_us");
  await expect(await page.screenshot()).toMatchSnapshot("contact-page.png");
});
