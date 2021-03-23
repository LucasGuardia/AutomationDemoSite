let Chance = require('chance');
let chance = new Chance();

export const user1 = {
    nome: chance.first(),
    sobrenome: chance.last(),
    description: chance.paragraph(),
    email: chance.email({domain: "guardianos.com"}),
    phone: chance.phone({formatted: false}),
}