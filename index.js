const Infomoney = require('./sources/infomoney')
const Moneytimes = require('./sources/moneytimes')
const Valor = require('./sources/valor')
const Folha = require('./sources/folha')
const Broadcast = require('./sources/broadcast')
const Exame = require('./sources/exame')

Exame().then(results => {
    console.log("\n Exame \n")
    results.forEach(element => {
        console.log(element.title);
    })
})

Infomoney().then(results => {
    console.log("\n Infomoney \n")
    results.forEach(element => {
        console.log(element.title);
    })
})

Moneytimes().then(results => {
    console.log("\n Moneytimes \n")
    results.forEach(element => {
        console.log(element.title);
    })
})

Valor().then(results => {
    console.log("\n Valor \n")
    results.forEach(element => {
        console.log(element.title);
    })
})

Folha().then(results => {
    console.log("\n Folha \n")
    results.forEach(element => {
        console.log(element.title);
    })
})
Broadcast().then(results => {
    console.log("\n Broadcast \n")
    results.forEach(element => {
        console.log(element.title);
    })
})