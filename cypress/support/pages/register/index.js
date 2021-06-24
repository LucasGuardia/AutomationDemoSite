const el = require('./elements').ELEMENTS;

class Register {

    acessarSite(){
        cy.visit(el.link)
    }

    insertInfoPersonal(firstName, lastName, description, email, phone, gender){
        cy.get(el.firstName).type(firstName);
        cy.get(el.lastName).type(lastName);
        cy.get(el.description).type(description);
        cy.get(el.emailAddress).type(email);
        cy.get(el.phone).type(phone);
        cy.get(el.gender).check(gender)
    }

    selectHobbies(hobbie){
        cy.get(el.hobbies).check(hobbie)
    }

    selectSkills(skill){
        cy.get(el.skills).select(skill)
    }

    selectCountries(country){
        cy.get(el.country).select(country)
    }

    selectCountry(country){
        cy.get(el.selectCountry).select(country, {force: true})
    }

    insertBirthday(year, month, day){
        cy.get(el.yearBirthday).select(year)
        cy.get(el.monthBirthday).select(month)
        cy.get(el.dayBirthday).select(day)
    }

    insertPasswords(password1, password2){
        cy.get(el.password).type(password1)
        cy.get(el.confirmPassword).type(password2)
    }

    buttonSubmit(){
        cy.get(el.submitRegister).click()
    }

}


export default new Register();