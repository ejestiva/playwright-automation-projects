import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { PaymentPage } from "../pages/PaymentPage";
import dotenv from "dotenv";
dotenv.config();

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLogin();
  await loginPage.loginFill(process.env.EMAIL, process.env.PASSWORD);
});

test("E-commerce checkout", async ({ page }) => {
  //Proudct page
  const productPage = new ProductPage(page);
  await productPage.gotoProduct();
  await productPage.addProductToCart("Blue Top");

  // Cart page
  const cartPage = new CartPage(page);
  await cartPage.CartCheckout();

  // Checkout page
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.gotoPayment();

  // Payment page
  const paymentPage = new PaymentPage(page);
  await paymentPage.fillPaymentForm(
    process.env.NAME,
    process.env.CARD,
    process.env.EXP,
    process.env.MONTH,
    process.env.YEAR
  );
});
