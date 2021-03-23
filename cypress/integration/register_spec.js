/// <reference types="cypress" />

import Register from '../support/pages/register/index';
const user = require ('../support/variables').user1;

context('Automation Demo Site', () => {

    beforeEach(() => {
        Register.acessarLogin()
    })
    
    it('Register New User', () => {
        Register.insertInfoPersonal(
            user.nome, 
            user.sobrenome,
            user.description,
            user.email,
            user.phone
        )

        cy
            .get('input[name=radiooptions]')
            .check('FeMale')

        cy
            .get('input[type=checkbox]')
            .check('Movies')

        cy
            .get('select#Skills')
            .select('Ruby')

        cy
            .get('select#countries')
            .select('Brazil')

        cy
            .get('select#country')
            .select('Japan', {force: true});

        cy
            .get('select#yearbox')
            .select('1992');

        cy
            .get('select[ng-model=monthbox]')
            .select('April');

        cy
            .get('select#daybox')
            .select('14');

        cy
            .get('input#firstpassword')
            .type('Abc@123');

        cy
            .get('input#secondpassword')
            .type('Abc@123');

        cy
            .get('button#submitbtn')
            .click()

    });

});