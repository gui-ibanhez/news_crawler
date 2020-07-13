const fs = require('fs');

const path = './sources/'
const sources = fs.readdirSync(path)

const mods = sources.map(source => require(path + source))

for (mod of mods) {
    mod().then(results => {
        console.log("\n" + mod.name + "\n")
        results.forEach(element => {
            console.log(element.title);
            console.log(element.url);
        })
    })
}