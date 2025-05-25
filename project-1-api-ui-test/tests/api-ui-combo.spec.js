import path from "path";
import { fileURLToPath } from "url";
import { test } from "@playwright/test";
import { createUser } from "../utils/apiHelper.js";
import { UserMockPage } from "../pages/UserMockPage.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test("Create user via API and verify in UI", async ({ page }) => {
  const user = await createUser("Eric Jan", "QA Analyst");
  console.log(user);

  const filePath = "file://" + path.join(__dirname, "../mock-ui/userMock.html");

  const userPage = new UserMockPage(page);

  await userPage.navigate(filePath);
  await userPage.fillData(user.name, user.job);
  await userPage.verifyData(user.name, user.job);
  
});
