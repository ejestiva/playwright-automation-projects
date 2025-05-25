export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.proceedToPayment = page.getByRole("link", { name: "Place Order" });
  }

  async gotoPayment() {
    await this.proceedToPayment.click();
  }
}
