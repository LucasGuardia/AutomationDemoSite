/// <reference types="cypress" />

import Register from '../support/pages/register/index';
const user = require ('../support/variables').user1;

context('Automation Demo Site', () => {

    beforeEach(() => {
        Register.acessarSite()
        // cy.visit('/')
    })

    afterEach(() =>{
        
    })
    
    it.only('Register New User', () => {

        Register.insertInfoPersonal(
            user.nome, 
            user.sobrenome,
            user.description,
            user.email,
            user.phone,
            'FeMale'
        )

        Register.selectHobbies('Movies')
        Register.selectSkills('Ruby')
        Register.selectCountries('Brazil')
        Register.selectCountry('Japan')
        Register.insertBirthday('1992', 'April', '15')
        Register.insertPasswords('Abc@123', 'Abc@123')
        Register.buttonSubmit()
    });

});