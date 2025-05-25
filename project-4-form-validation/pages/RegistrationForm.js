import { expect } from "@playwright/test";
const path = require("path");
export class RegistrationForm {
  constructor(page) {
    this.page = page;
    this.firstName = page.getByRole("textbox", { name: "First Name" });
    this.lastName = page.getByRole("textbox", { name: "Last Name" });
    this.email = page.getByRole("textbox", { name: "name@example.com" });
    // this.gender = page.getByText("Male", { exact: true });
    this.mobile = page.getByRole("textbox", { name: "Mobile Number" });
    this.birthDate = page.locator("#dateOfBirthInput");
    this.subject = page.locator(".subjects-auto-complete__value-container");
    this.subjectInput = page.locator("#subjectsInput");
    this.hobbiesSports = page.getByText("Sports");
    this.hobbiesReading = page.getByText("Reading");
    this.hobbiesMusic = page.getByText("Music");
    this.picture = page.getByRole("button", { name: "Select picture" });
    this.address = page.getByPlaceholder("Current Address");
    this.stateDropwdown = page.locator("#state");
    this.cityDropdown = page.locator("#city");
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.confirmationMessage = page.getByText("Thanks for submitting the form");
  }

  async goToRegistrationForm() {
    await this.page.goto("https://demoqa.com/automation-practice-form");
  }
  async fillForm(
    fName,
    lName,
    emailAddress,
    mobileNumber,
    birthdate,
    subject,
    address,
    gender,
    state,
    city,
    hobbies = []
  ) {
    //First Name and Last Name
    await this.firstName.fill(fName);
    await this.lastName.fill(lName);
    //Gender
    await this.page.getByText(gender, { exact: true }).click();
    //Email and Mobile
    await this.email.fill(emailAddress);
    await this.mobile.fill(mobileNumber);

    //Birthdate
    await this.birthDate.click();
    await this.birthDate.press("ControlOrMeta+a");
    await this.birthDate.fill(birthdate);

    //Subject
    await this.subject.click();
    await this.subjectInput.fill(subject);
    await this.subjectInput.press("Enter");

    //Hobbies
    // await this.hobbiesSports.click();
    // await this.hobbiesReading.click();

    // -- Dynamic Hobbies Selection --
    for (const hobby of hobbies) {
      await this.page.getByText(hobby.trim(), { exact: true }).click();
    }

    //Upload Picture
    await this.picture.setInputFiles(
      path.resolve("assets/FB_IMG_1736241440045.jpg")
    );

    //Address
    await this.address.fill(address);

    //State and City
    await this.stateDropwdown.click();
    await this.page.getByText(state, { exact: true }).click();

    await this.cityDropdown.click();
    await this.page.getByText(city, { exact: true }).click();
  }
  async submitForm() {
    await this.submitButton.click();
  }

  async verifySubmission() {
    await expect(this.confirmationMessage).toBeVisible();
    console.log("✅ Registration form submitted successfully!");
    const timestamp = new Date().toISOString().replace(/:/g, "-");
    await this.page.screenshot({
      path: `screenshots/form_submission_${timestamp}.png`,
    });
  }
}
