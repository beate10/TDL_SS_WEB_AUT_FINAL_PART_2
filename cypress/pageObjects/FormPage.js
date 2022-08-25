import BasePage from "./BasePage";


class FormPage extends BasePage{

    static get url(){
        return "https://demoqa.com/automation-practice-form";
    }


    static get firstNameField(){
        return cy.get("#firstName");
    }

    static get lastNameField(){
        return cy.get("#lastName");
    }

    static get emailField(){
        return cy.get("#userEmail");
    }

    static getGenderRadioButton(id){
        return cy.get('.custom-radio').eq(id);
    }

    static get numberField(){
        return cy.get("#userNumber");
    }

    static get dobField(){
        return cy.get("#dateOfBirthInput");
    }


    static setYear(year){
        cy.get(".react-datepicker__year-select").select(year);
    }

    
   
    static setMonth(month){
        
        cy.get(".react-datepicker__month-select").select(month);
    }

    static setDate(day){
       
        cy.get(`:nth-child(5) > .react-datepicker__day--0${day}`).click();;
    }


    static get subjectsField(){
        return cy.get("#subjectsContainer");
    }


    static getHobbiesField(id){
        return cy.get(".custom-checkbox").eq(id);
    }


    static get choosePictureButton(){
        return cy.get("#uploadPicture");
    }


    static get currentAddressField(){
        return cy.get("#currentAddress");
    }


    static get stateField(){
        return cy.get("#state");
    }


    static get cityField(){
        return cy.get("#city");
    }


    static get submitButton(){
        return cy.get("#submit");
    }


    static getLabelValue(label){
        return cy.get("tbody").contains(label).siblings();
    }

    


    


    

}





export default FormPage;