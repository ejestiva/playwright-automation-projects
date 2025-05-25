export class CartPage {
  constructor(page) {
    this.page = page;
    this.proceedToCheckout = page.getByText("Proceed To Checkout");
  }

  async CartCheckout() {
    
    await this.proceedToCheckout.click();
  }
}
