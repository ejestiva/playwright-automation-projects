import { LoginPage } from "../pages/LoginPage";
import { DataExtractionPage } from "../pages/DataExtractionPage";
import { test, expect } from "@playwright/test";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLogin();
  await loginPage.loginFill(process.env.EMAIL, process.env.PASSWORD);
});

test("Extract data from the page", async ({ page }) => {
  const dataExtractionPage = new DataExtractionPage(page);
  await dataExtractionPage.gotoProductsPage();
  // await dataExtractionPage.getProductNames();
  const product = await dataExtractionPage.getProductCards();

  // JSON
  const timestamp = new Date().toISOString().replace(/:/g, "-");
  fs.writeFileSync(
    `product-${timestamp}.json`,
    JSON.stringify(product, null, 2)
  );

  // CSV
  const csv =
    "Name, Price\n" +
    product.map((p) => `"${p.name}", "${p.price}"`).join("\n");
  fs.writeFileSync("product.csv", csv);
});
