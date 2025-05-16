import { expect } from "@playwright/test";

export class DataExtractionPage {
  constructor(page) {
    this.page = page;
    // this.featuredItems = page.locator(".features_items");
    // this.productNames = page.locator(".features_items .productinfo p");
    this.productCards = page.locator(".features_items .product-image-wrapper");
  }

  async gotoProductsPage() {
    await this.page.goto("https://automationexercise.com/products");
  }

  // async getProductNames() {
  //   const names = await this.productNames.allTextContents();
  //   console.log("🛍️ Extracted Product Names:", names);
  //   expect(names.length).toBeGreaterThan(0); // Check if there are any product names
  //   return names;
  // }

  async getProductCards() {
    const count = await this.productCards.count();
    const productList = [];

    for (let i = 0; i < count; i++) {
      const card = this.productCards.nth(i);
      const name = await card.locator(".productinfo p").textContent();
      const price = await card.locator(".productinfo h2").textContent();

      productList.push({
        name: name.trim(),
        price: price.trim(),
      });
    }
    console.log("🛍️ Extracted Product Cards:", productList);
    return productList;
  }
}
