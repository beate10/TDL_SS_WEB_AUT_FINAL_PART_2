import FormPage from "../pageObjects/FormPage"
import SortablePage from "../pageObjects/SortablePage";

describe('DEMOQA Tests', () => {

  it('Form Scenario Test', () => {
    FormPage.visit();
    FormPage.firstNameField.type("Anna");
    FormPage.lastNameField.type("Lapa");
    FormPage.emailField.type("anna@lapa.lv");
    FormPage.getGenderRadioButton(1).click();
    FormPage.numberField.type("12345678");
    FormPage.dobField.click();
    FormPage.setYear("1984");
    FormPage.setMonth("February");
    FormPage.setDate("29");
    FormPage.subjectsField.type("Maths{enter}");
    FormPage.getHobbiesField(0).click();
    FormPage.getHobbiesField(1).click();
    FormPage.currentAddressField.type("Kr.Valdemara 8");
    FormPage.stateField.click().trigger('keydown', {key: 'Down',}).trigger('keydown', {key: 'Enter',});
    FormPage.cityField.click().trigger('keydown', {key: 'Enter',});
    FormPage.submitButton.click();

    FormPage.getLabelValue("Student Name").should("contain", "Anna Lapa");
    FormPage.getLabelValue("Student Email").should("contain", "anna@lapa.lv");
    FormPage.getLabelValue("Gender").should("contain", "Female");
    FormPage.getLabelValue("Mobile").should("contain", "12345678");
    FormPage.getLabelValue("Date of Birth").should("contain", "29 February,1984");
    FormPage.getLabelValue("Subjects").should("contain", "Maths");
    FormPage.getLabelValue("Hobbies").should("contain", "Sports, Reading");
    FormPage.getLabelValue("Address").should("contain", "Kr.Valdemara 8");
    FormPage.getLabelValue("State and City").should("contain", "Uttar Pradesh Agra");
    
  
  })


  it("Sortable Scenario Test", () => {
    SortablePage.visit();

    let sequence = ["One", "Two", "Three", "Four", "Five", "Six"];

    sequence.forEach((number, id) => {
      SortablePage.getRow(id).should("contain", number);
    })

    SortablePage.moveRow(4, 100);
    SortablePage.moveRow(3, 200);
    SortablePage.moveRow(2, 300);
    SortablePage.moveRow(1, 400);
    SortablePage.moveRow(0, 500);


    sequence.reverse();

    sequence.forEach((number, id) => {
      SortablePage.getRow(id).should("contain", number);
    })
    
  })
})

