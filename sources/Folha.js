const  HTMLParser  = require('node-html-parser');
const fetch = require('node-fetch');

const Folha = async () => {
    const url = "https://www1.folha.uol.com.br/mercado/";
    const resp = await fetch(url);
    const data = await resp.text()
    
   let searchResults = [];

    const main_content = HTMLParser.parse(data).querySelector('.main')
    const results =  main_content.querySelectorAll('div.c-headline__content a');

    results.forEach((result) => {
        let title = result.structuredText
        let row = { 
            'title':title.slice(0, title.indexOf('\n')).trim(),
            'url':result.getAttribute("href")
        }
    searchResults.push(row);
    })

    //return results;
    return searchResults;
};

module.exports = Folha;