import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailAddress = page
      .locator("form")
      .filter({ hasText: "Login" })
      .getByPlaceholder("Email Address");
    this.password = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async gotoLogin() {
    await this.page.goto("https://automationexercise.com/login");
  }

  async loginFill(email, password) {
    await this.emailAddress.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
    await expect(this.page.getByText('Logged in as ')).toBeVisible();
  }
}
