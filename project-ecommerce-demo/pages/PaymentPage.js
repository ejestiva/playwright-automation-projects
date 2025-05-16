export class PaymentPage {
  constructor(page) {
    this.page = page;
    this.nameOnCard = page.locator('input[name="name_on_card"]');
    this.cardNumber = page.locator('input[name="card_number"]');
    this.expirationDate = page.getByRole("textbox", { name: "ex." });
    this.monthDate = page.getByRole("textbox", { name: "MM" });
    this.yearDate = page.getByRole("textbox", { name: "YYYY" });
    this.payButton = page.getByRole("button", {
      name: "Pay and Confirm Order",
    });
    this.continueButton = page.getByRole("link", { name: "Continue" });
  }


  async fillPaymentForm(name, card, exp, month, year)
  {
    await this.nameOnCard.fill(name);
    await this.cardNumber.fill(card);
    await this.expirationDate.fill(exp);
    await this.monthDate.fill(month);
    await this.yearDate.fill(year);
    await this.payButton.click();
    await this.continueButton.click();
  }

}
