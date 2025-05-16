import { test, expect } from "@playwright/test";
import { RegistrationForm } from "../pages/RegistrationForm";
import dotenv from "dotenv";
dotenv.config();

test("Registration Form", async ({ page }) => {
    
  const registrationForm = new RegistrationForm(page);
  const hobbies = process.env.HOBBIES.split(",");

  await registrationForm.goToRegistrationForm();
  await registrationForm.fillForm(
    process.env.FIRSTNAME,
    process.env.LASTNAME,
    process.env.EMAIL,
    process.env.MOBILE,
    process.env.BIRTHDATE,
    process.env.SUBJECT,
    process.env.ADDRESS,
    process.env.GENDER,
    process.env.STATE,
    process.env.CITY,
    hobbies // Hobbies array
  );
  await registrationForm.submitForm();
  await registrationForm.verifySubmission();
  
});
