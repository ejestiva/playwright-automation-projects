import { expect } from '@playwright/test';

export class ProductPage {
  constructor(page) {
    this.page = page;
     this.viewCart = page.getByRole("link", { name: "View Cart" });
  }
  async gotoProduct() {
    await this.page.getByRole("link", { name: " Products" }).click();
  }

  async addProductToCart(productName) {
    const productLocator = this.page.locator(".productinfo p", {
      hasText: productName,
    });
    await productLocator.waitFor();

    const addToCartButton = productLocator.locator("..").locator(".btn"); // Get the corresponding button
    await addToCartButton.click();

    await this.viewCart.waitFor();
    await expect(this.page.getByRole('heading', { name: 'Added!' })).toBeVisible();
    await this.viewCart.click();
  }
}
