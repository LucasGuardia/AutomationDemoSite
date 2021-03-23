//Aqui na index, definimos uma const e requerimos o objeto da página de elements
//Criamos classe para mapearmos nossas interacoes com a página

const el = require('./elements').ELEMENTS;

class Register {

    acessarLogin(){
        cy.visit(el.link)
    }

    insertInfoPersonal(firstName, lastName, description, email, phone ){
        cy.get(el.firstName).type(firstName);
        cy.get(el.lastName).type(lastName);
        cy.get(el.description).type(description);
        cy.get(el.emailAddress).type(email);
        cy.get(el.phone).type(phone);
    }

}


export default new Register();